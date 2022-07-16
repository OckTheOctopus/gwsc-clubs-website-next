import React from 'react';
// Styles

export default function Header() {
  return (
    <>
        <header>
            
            <h1>Welcome to our Club Page</h1>
        </header>

        <style jsx>{`
            /* Header/logo Title */
            header {
              padding: 60px;
              background: #002266;
              color: white;
              width: 100%;
              height: 15%;
              text-align: center;
            }
            
            /* Increase the font size of the heading */
            header h1 {
              font-size: 80px;
            }
            
        `}</style>
    </>
  );
}
