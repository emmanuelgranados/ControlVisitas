import logo from './logo.svg';
import './App.css';

import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
  
    <div className="App">
        
      <header className="App-header">
      <SegundoComponente/>
        <img src={logo} className="App-logo" alt="logo" />
        <PrimerComponente/>
       
        </header>
    </div>
  );
}

export default App;
