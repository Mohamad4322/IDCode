import React from 'react';

// Critical CSS that should be inlined for faster initial render
const CriticalCSS: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical styles for above-the-fold content */
        .header--new {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.5s;
        }
        
        .header--new__logo-img {
          width: 120px;
          height: 40px;
          object-fit: contain;
        }
        
        /* Loading spinner critical styles */
        .loading-spinner {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
        }
        
        /* Hero section critical styles */
        .hero-section {
          padding-top: 5rem;
          min-height: 100vh;
        }
        
        /* Prevent layout shift for images */
        img[width][height] {
          height: auto;
        }
        
        /* Critical button styles */
        .btn-n--emerald {
          background: linear-gradient(to right, #059669, #0d9488);
          color: white;
          border-radius: 9999px;
          transition: all 0.3s;
          font-weight: 500;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .btn-n--emerald:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Prevent flash of unstyled content */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Critical layout styles */
        .container-n {
          max-width: 1280px;
          margin: 0 auto;
        }
        
        /* Prevent cumulative layout shift */
        .aspect-video {
          aspect-ratio: 16 / 9;
        }
        
        /* Critical responsive utilities */
        @media (max-width: 768px) {
          .header--new__logo-img {
            width: 100px;
            height: 33px;
          }
        }
      `
    }} />
  );
};

export default CriticalCSS;
