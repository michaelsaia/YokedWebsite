'use client';

import { useEffect, useRef } from 'react';

export default function TermlyPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the Termly embed div
    if (containerRef.current) {
      const embedDiv = document.createElement('div');
      embedDiv.setAttribute('name', 'termly-embed');
      embedDiv.setAttribute('data-id', '5144f9e6-b684-40b6-98ae-baeffe5c7479');
      embedDiv.setAttribute('data-type', 'iframe');
      containerRef.current.appendChild(embedDiv);
    }

    // Load Termly embed script
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="termly-policy">
      <div ref={containerRef} className="termly-embed-container" />
      
      {/* Styling for the embed */}
      <style jsx global>{`
        .termly-policy {
          background: transparent;
        }
        
        .termly-embed-container {
          width: 100%;
        }
        
        .termly-embed-container iframe {
          background: white;
          border-radius: 12px;
          min-height: 800px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
