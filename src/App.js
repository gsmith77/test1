import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
const marked = require('marked')

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [opensInNewtab, setOpensInNewtab] = useState(false)

  const changeInput = async (value) => {   
    const text = marked(value)
    setMarkdownText(text)
    document.getElementById('markdown').innerHTML = text
  }

  const setOpenInNewtab = () => {
    setOpensInNewtab(!opensInNewtab)
    
    const doc = document.getElementById('markdown').children[0].children
    if (doc && opensInNewtab) {
      for( let i = 0; i < doc.length; i++) {
        doc[i].target = '_blank'
      }
    } else if ( doc && opensInNewtab === false) {
      for( let i = 0; i < doc.length; i++) {
        doc[i].target = ''
      }
    }
  }

  return (
    <div className="App">
      <div id="markdown"></div> 
      <button onClick={setOpenInNewtab}>open link in new tab</button>
      <p>{opensInNewtab}</p>
      <input type="text" onChange={(e) => changeInput(e.target.value)} />
    </div>
  );
}

export default App;
