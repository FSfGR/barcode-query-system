import React, { Component, useState } from 'react';
// import NavBar from '../components/Navigation.jsx';
import Scanner from '../components/Scanner';
import Result from '../components/Result';


// class Scan extends Component {
  // render() {
const Scan = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);

  return (
      <div>
          <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
          <ul className="results">
              {results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
          </ul>
          {scanning ? <Scanner onDetected={(result) => setResults([...results, result])} /> : null}
      </div>
  );
};
// }

export default Scan;
