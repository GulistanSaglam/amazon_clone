import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Components/Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
