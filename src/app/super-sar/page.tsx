"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function SuperSARPage() {
    return (
        <div className="min-h-screen bg-white text-[#374151] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <style jsx global>{`
                :root {
                    --bg-color: #FFFFFF;
                    --bg-alt: #F9FAFB;
                    --card-bg: #FFFFFF;
                    --border-color: #E5E7EB;
                    --text-primary: #111827;
                    --text-secondary: #374151;
                    --text-muted: #6B7280;
                    --color-primary: #1D4ED8;
                    --color-success: #059669;
                    --color-danger: #DC2626;
                    --color-warning: #D97706;
                    --color-info: #0891B2;
                }

                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap');

                .pipeline {
                    position: relative;
                    max-width: 500px;
                    margin: 0 auto;
                    padding-left: 40px;
                }

                .pipeline::before {
                    content: '';
                    position: absolute;
                    left: 7px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background-color: var(--color-primary);
                    opacity: 0.15;
                }

                .pipeline-step {
                    position: relative;
                    margin-bottom: 48px;
                }

                .pipeline-node {
                    position: absolute;
                    left: -40px;
                    top: 4px;
                    width: 16px;
                    height: 16px;
                    background-color: var(--bg-color);
                    border: 3px solid var(--color-primary);
                    border-radius: 50%;
                    z-index: 2;
                }

                .data-flow-diagram {
                    background-color: #0B1220;
                    border-radius: 12px;
                    padding: 32px;
                    margin: 32px 0;
                    font-family: 'JetBrains Mono', monospace;
                    color: #94A3B8;
                    font-size: 0.85rem;
                    line-height: 1.8;
                    overflow-x: auto;
                    white-space: pre;
                }

                .flow-box {
                    display: inline-block;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                    font-weight: 600;
                    color: white;
                }
                
                .flow-arrow {
                    margin: 10px 0;
                    color: #4b5563;
                    font-size: 0.8em;
                }
            `}</style>

            <div className="max-w-[900px] mx-auto px-6 py-12 md:py-20">
                {/* Navigation */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
                >
                    <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                {/* HEADER */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 tracking-tight">
                        SUPER-SAR Option Trading System
                    </h1>
                    <p className="text-xl text-[#374151] font-normal max-w-2xl leading-relaxed">
                        Production-Ready Multi-Threaded Algorithmic Trading System
                    </p>
                </header>

                {/* EXECUTIVE SUMMARY */}
                <section className="mb-16 pb-16 border-b border-[#E5E7EB]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D4ED8] mb-8 relative pl-4">
                        <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#1D4ED8] rounded-full"></span>
                        Executive Summary
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed">
                        SUPER-SAR-Option is a robust algorithmic trading system designed for professional
                        options trading on the Bombay Stock Exchange (BSE). The platform leverages a decoupled, multi-threaded
                        architecture to deliver high-performance execution latency while maintaining enterprise-level
                        reliability and compliance.
                    </p>

                    <div className="bg-[#F0F7FF] border-l-4 border-[#1D4ED8] p-8 rounded-r-lg">
                        <strong className="block text-[#111827] text-lg mb-4">Key Capabilities:</strong>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 list-disc pl-5 text-[#374151]">
                            <li>Real-time multi-strike monitoring</li>
                            <li>Automatic ATM selection</li>
                            <li>Proprietary algorithmic signals</li>
                            <li>Real-time validation engine</li>
                            <li>Emergency kill-switch protection</li>
                            <li>Multi-layered risk management</li>
                            <li>Automated position protocols</li>
                            <li>Audit logging & P&L tracking</li>
                        </ul>
                    </div>
                </section>

                {/* SYSTEM ARCHITECTURE */}
                <section className="mb-16 pb-16 border-b border-[#E5E7EB]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D4ED8] mb-8 relative pl-4">
                        <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#1D4ED8] rounded-full"></span>
                        System Architecture
                    </h2>
                    <p className="mb-12 leading-relaxed">
                        The SUPER-SAR-Option platform is built on a modular, service-oriented architecture (SOA) that separates
                        concerns across five distinct processing layers:
                    </p>

                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-8 md:p-12 mb-12">
                        <div className="pipeline">
                            {[
                                { level: 1, title: "Data Layer", desc: "WebSocket and REST API integration for real-time market data ingestion." },
                                { level: 2, title: "Ingestion Layer", desc: "Dedicated sync engine for historical data reconciliation and state management." },
                                { level: 3, title: "Strategy Engine", desc: "Technical indicator computation and multi-consensus signal generation." },
                                { level: 4, title: "Risk Engine", desc: "Automated position management, stop-loss logic, and volatility filtering." },
                                { level: 5, title: "Execution Engine", desc: "High-performance order placement and lifecycle management via broker APIs." },
                                { level: 6, title: "Audit Layer", desc: "Structured logging, compliance tracking, and real-time P&L reporting." }
                            ].map((step) => (
                                <div key={step.level} className="pipeline-step">
                                    <div className="pipeline-node"></div>
                                    <span className="block text-[10px] font-bold text-[#6B7280] uppercase tracking-widest font-mono mb-1">Level {step.level}</span>
                                    <span className="block text-xl font-bold text-[#111827] mb-2">{step.title}</span>
                                    <p className="text-sm text-[#374151] leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#111827] mb-6">Layer 1: Data Layer</h3>
                            <p className="mb-6">The data layer handles all external data ingestion and acts as the primary interface to broker APIs.</p>
                            <ul className="space-y-3 list-disc pl-5">
                                <li><strong>FlatTrade REST API:</strong> Licensed broker integration for live market data and order execution</li>
                                <li><strong>WebSocket Subscription:</strong> Real-time LTP (Last Traded Price) streaming for sub-second latency</li>
                                <li><strong>Historical Data Retrieval:</strong> 3-day OHLCV candle data for technical analysis foundation</li>
                                <li><strong>Quote Fetching:</strong> Periodic snapshot polls for VWAP, Ask/Bid prices, and Greeks</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#111827] mb-6">Layer 2: Ingestion Layer (Real-Time Syncer)</h3>
                            <p className="mb-6">A dedicated <code>historical_syncer()</code> thread manages continuous data ingestion with intelligent caching and conflict avoidance.</p>
                            <div className="bg-[#F0F7FF] border-l-4 border-[#1D4ED8] p-8 rounded-r-lg">
                                <strong className="block text-[#111827] text-lg mb-4">Key Responsibilities:</strong>
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>Monitors global state for CE/PE token changes</li>
                                    <li>Fetches 3-day historical bars every 30 seconds</li>
                                    <li>Prevents "zero-value overwrites" during API hiccups</li>
                                    <li>Calculates structural support/resistance from price peaks and valleys</li>
                                    <li>Thread-safe state management via reader/writer locks</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#111827] mb-6">Layer 5: Execution Engine (Order Manager)</h3>
                            <p className="mb-6">The execution engine handles all order lifecycle management with thread-safety and rate-limit protection.</p>
                            <ul className="space-y-3 list-disc pl-5">
                                <li><strong>Session API Pooling:</strong> Maintains persistent broker session to avoid redundant logins</li>
                                <li><strong>Order Pyramiding:</strong> Incremental lot scaling (Buy-1 → Buy-2 → Buy-3) on momentum confirmation</li>
                                <li><strong>Emergency Kill Switch:</strong> Centralized <code>emergency_exit()</code> function cancels all pending orders and squares off positions in &lt;2 seconds</li>
                                <li><strong>Market Hours Enforcement:</strong> Trades only execute between 9:25 AM – 3:15 PM IST</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* TECHNICAL IMPLEMENTATION */}
                <section className="mb-16 pb-16 border-b border-[#E5E7EB]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D4ED8] mb-8 relative pl-4">
                        <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#1D4ED8] rounded-full"></span>
                        Technical Implementation Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Web Dashboard (app.py)", tech: "Flask + Vanilla JS", items: ["Real-time WebSocket updates", "Paper/Live mode toggles", "SL1/SL2 switching", "P&L dashboard", "OAuth integration"] },
                            { title: "Engine Core (core/engine.py)", tech: "Multi-threaded Python", items: ["historical_syncer() loop", "trading_engine() signals", "zmq_listener() trend filter", "ThreadPoolExecutor"] },
                            { title: "Indicators (core/indicators.py)", tech: "NumPy + Pandas", items: ["Heikin-Ashi normalization", "SuperTrend dynamic bands", "VWAP accumulation", "Parabolic SAR tracking"] },
                            { title: "Logging (core/logger.py)", tech: "Structured JSON", items: ["JSON-formatted audit logs", "Signal history CSVs", "Trade journal export", "System health monitoring"] }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-[#1D4ED8] font-bold text-lg mb-2">{card.title}</h4>
                                <p className="text-sm font-semibold mb-4 text-[#111827]">Technology: <span className="font-normal text-[#374151]">{card.tech}</span></p>
                                <ul className="text-sm font-medium text-[#6B7280] space-y-2 list-inside list-disc">
                                    {card.items.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold mb-6">Data Flow Architecture</h3>
                    <div className="data-flow-diagram">
                        {`FlatTrade Broker
↓
WebSocket Feed (Real-time LTP)
↓
[historical_syncer Thread]
Fetches 3-day OHLCV bars
Calculates: HA, ATR, ST, SAR, VWAP
Detects Structural Support/Resistance
↓
[Global State] (Thread-Safe)
ce_token, ce_price, ce_atr, ce_st
pe_token, pe_price, pe_atr, pe_st
↓
[trading_engine Thread]
Watch Filter → Entry Signal → Position Tracking
↓
[zmq_listener Thread]
Receives NIFTY trend from external publisher
Validates cross-market confirmation
↓
[Execution Engine]
place_real_order() / place_paper_order()
Update position state
↓
[Audit Layer]
Log trade + P&L to CSV/JSON
Dashboard real-time update`}
                    </div>
                </section>

                {/* SIGNAL LOGIC */}
                <section className="mb-16 pb-16 border-b border-[#E5E7EB]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D4ED8] mb-8 relative pl-4">
                        <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#1D4ED8] rounded-full"></span>
                        Signal Generation & Entry Logic
                    </h2>

                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-8 md:p-12 mb-12 flex flex-col items-center">
                        <div className="flow-box bg-[#1D4ED8]">IDLE STATE</div>
                        <div className="flow-arrow">↓ [ATR &gt; threshold AND ST uptrend AND SAR bullish]</div>
                        <div className="flow-box bg-[#374151]">WATCH STATE</div>
                        <div className="flow-arrow">↓ [LTP &gt; HA_Close AND HA_Open = HA_Low AND ZMQ signal]</div>
                        <div className="flow-box bg-[#059669]">ENTRY EXECUTED</div>
                        <div className="flow-arrow">↓ [Exit condition met: Target OR SL1 OR SL2]</div>
                        <div className="flow-box bg-[#DC2626]">POSITION CLOSED</div>
                        <div className="flow-arrow">↓ [Cooldown period (5 min)]</div>
                        <div className="flow-box bg-[#1D4ED8]">IDLE STATE</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-8">
                            <h4 className="text-xl font-bold mb-4">SL1: ATR-Based</h4>
                            <p className="text-sm text-[#6B7280] mb-6">Formula: SL = Entry Price - (1.5 × ATR)</p>
                            <p className="text-sm leading-relaxed">Adapts to market volatility. Prevents whipsaws in trending markets. Ensures 1.5:1 risk/reward ratio. Used for high volatility (ATR &gt; ₹10).</p>
                        </div>
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-8">
                            <h4 className="text-xl font-bold mb-4">SL2: Structural</h4>
                            <p className="text-sm text-[#6B7280] mb-6">Formula: SL = Low[T-1] (previous candle's low)</p>
                            <p className="text-sm leading-relaxed">Aligned with actual support zones. Reduces false stops from noise. Better for range-bound markets. Used for low volatility (ATR &lt; ₹5).</p>
                        </div>
                    </div>
                </section>

                {/* DASHBOARD IMAGES PLACEHOLDER */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D4ED8] mb-8 relative pl-4">
                        <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#1D4ED8] rounded-full"></span>
                        Operational Dashboard
                    </h2>
                    <p className="mb-12">The platform provides a real-time web-based trading dashboard with comprehensive market monitoring and indicator visualization.</p>

                    <div className="grid grid-cols-1 gap-12">
                        <div className="bg-[#f8fafc] rounded-2xl p-4 border border-blue-100 shadow-xl overflow-hidden group">
                            <div className="aspect-[16/10] bg-[#0B1220] rounded-xl flex items-center justify-center text-blue-400 font-mono text-sm">
                                [ Live Market Monitoring: CE/PE Strikes & Indicators ]
                            </div>
                            <p className="mt-4 text-center text-sm font-medium text-gray-500 italic">Idle State: Multi-strike real-time monitoring</p>
                        </div>

                        <div className="bg-[#f8fafc] rounded-2xl p-4 border border-blue-100 shadow-xl overflow-hidden">
                            <div className="aspect-[16/10] bg-[#0B1220] rounded-xl flex items-center justify-center text-blue-400 font-mono text-sm">
                                [ Signal Watch: Entry Validation in Progress ]
                            </div>
                            <p className="mt-4 text-center text-sm font-medium text-gray-500 italic">Watch State: Real-time validation matrix active</p>
                        </div>
                    </div>
                </section>

                <section className="mt-20 p-8 bg-[#FEF2F2] border-l-4 border-[#DC2626] rounded-r-lg">
                    <h2 className="text-[#991B1B] text-xl font-bold mb-4">⚠️ Risk Disclosure</h2>
                    <p className="text-[#991B1B] text-sm leading-relaxed font-semibold">
                        Algorithmic trading carries significant financial risk. Automated systems can amplify losses during market dislocations. Always validate in PAPER MODE before deploying capital.
                    </p>
                </section>

                <footer className="mt-24 pt-12 border-t border-[#E5E7EB] text-center">
                    <p className="font-bold text-[#111827] mb-2">SUPER-SAR Option Trading System (v9.0)</p>
                    <p className="text-sm text-[#6B7280]">© 2026 Professional Trading Systems Development</p>
                </footer>
            </div>
        </div>
    );
}
