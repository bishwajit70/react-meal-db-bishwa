import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AllFoods from './components/AllFoods/AllFoods';
import Navbars from './components/Navbar/Navbars';

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <AllFoods></AllFoods>
    </div>
  );
}

export default App;
