(function() {
  window.process = { env: { NODE_ENV: 'production' } };
  console.log("Chat Widget SDK Loading...");
  
  const init = () => {
    const script = document.createElement('script');
    script.src = '/static/widget.iife.js';
    script.async = true;
    document.head.appendChild(script);
    console.log("Chat Widget Bundle Injected.");
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }
})();
