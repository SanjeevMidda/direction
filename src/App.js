import { useCallback, useState } from 'react';
import './index.css';
import up from "./icons/up.svg"
import right from "./icons/right.svg"
import down from "./icons/down.svg"
import left from "./icons/left.svg"

function App() {

  const [status, setStatus] = useState(true);

  function change(){
    setStatus(!status);
  }

  return (
    <div className="App">
     <div className="container" onClick={change}>
     {/* <img src={up} alt="" className={status? "arrow" : "arrowUp"}/> */}
      <div className="center">
        {/* <img src={left} alt="" className={status? "arrow" : "arrowLeft"}/> */}
        <h1>{status? "open" : "close"}</h1>
        <img src={right} alt="" className={status? "arrow" : "arrowRight"}/>
      </div>
      <img src={down} alt="" className={status? "arrow" : "arrowDown"}/>
     </div>
    </div>
  );
}

export default App;
