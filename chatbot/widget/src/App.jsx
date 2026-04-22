import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Paperclip, MoreHorizontal, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE_URL = '';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Hello! I am your AI assistant for this website. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle auto-crawl on mount
  useEffect(() => {
    const currentUrl = window.location.origin;
    fetch(`${API_BASE_URL}/crawl`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ website_url: currentUrl })
    }).catch(err => console.error('Auto-crawl failed:', err));
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_url: window.location.origin,
          question: input
        })
      });

      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: data.answer || "I'm sorry, I couldn't process that.",
        sources: data.sources || [],
        reasoning: data.reasoning || null,
        showReasoning: false
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'bot',
        text: "Connection error. Make sure the backend is running."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div id="chat-widget-root">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="chat-window"
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <h3>Chat Assistant</h3>
                <p>Website-Aware AI</p>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={msg.id} className={`message ${msg.role}`}>
                  <div className="message-text">{msg.text}</div>

                  {msg.reasoning && (
                    <div className="reasoning-container">
                      <button
                        className="reasoning-toggle"
                        onClick={() => {
                          const newMessages = [...messages];
                          newMessages[idx].showReasoning = !newMessages[idx].showReasoning;
                          setMessages(newMessages);
                        }}
                      >
                        {msg.showReasoning ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        Internal Reasoning
                      </button>
                      {msg.showReasoning && (
                        <div className="reasoning-content">
                          {msg.reasoning}
                        </div>
                      )}
                    </div>
                  )}

                  {msg.sources && msg.sources.length > 0 && (
                    <div className="sources">
                      <strong>Sources:</strong>
                      {msg.sources.map((src, i) => (
                        <a key={i} href={src} target="_blank" rel="noreferrer" className="source-link">
                          {new URL(src).pathname || '/'}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                className="chat-input"
                placeholder="Ask something about this site..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="send-button" onClick={handleSend}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MessageSquare size={28} /> : <MessageCircle size={28} />}
      </div>
    </div>
  );
}

export default App;
