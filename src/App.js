import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';
import AllFoods from './components/AllFoods/AllFoods';
import Navbars from './components/Navbar/Navbars';

function App() {
  const [count, setCount] = useState(0)

  const setCartCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Navbars count={count}></Navbars>
      <AllFoods setCartCount={setCartCount}></AllFoods>
    </div>
  );
}

export default App;
