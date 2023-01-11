import React, { useEffect, useState } from 'react'
import { UseLocalStorage } from '../../UseLocalStorage';

import './NewTab.css'

const NewTab = () => {

  const [html, setHtml] = UseLocalStorage("html", "");
  const [css, setCss] = UseLocalStorage("css", "");
  const [js, setJs] = UseLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

 useEffect(() => {
   const timeout = setTimeout(() => {
     setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
   }, 250);
   return () => clearTimeout(timeout);
 }, [html, css, js]);


return (
  <div className="container">
    <iframe className='newtab-iframe' srcDoc={srcDoc} title="output" width="100%" height="100%"></iframe>
    
  </div>
);
}

export default NewTab;