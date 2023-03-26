import { useState } from 'react';
import { IsPrime } from './IsPrime';

import './styles.css';

export const App = () => {
  const [number, setNumber] = useState(8191);
  const [showExplainer, setShowExplainer] = useState(false);

  return (
    <>
      <h1 style={{textAlign: "center", paddingTop: "1em", fontFamily: "monospace", fontWeight: "bold", fontSize: "3em", color: "#bd5734 "}}>BUCHELI PRIME CHECKER</h1>
      <div className='container' style={{width: "50%", margin: "auto", paddingTop: "2%"}}>
        <div className='e2-container'>
          <div className='e2-header'>
            <div>
              <h2>Prime checker</h2>
              <p>See if a number is prime by typing below</p>
            </div>
            <button
              className='e2-button'
              onClick={() => setShowExplainer(!showExplainer)}
            >
              {showExplainer ? 'Hide' : 'Show'} Explainers
            </button>
          </div>
          <input
            className='e2-input'
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type='number'
          />
          <IsPrime number={number} showExplainer={showExplainer} />
        </div>
      </div>
      <footer style={{textAlign: "center", paddingTop: "2em", fontFamily: "monospace", fontWeight: "bold", fontSize: "2em", color: "#bd5734 "}}>Bucheli Web © 2023</footer>
    </>
  );
};

export default App;
