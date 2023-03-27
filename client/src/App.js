import './App.css';
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Outlet/>
      </header>
    </div>
  );
}

export default App;
