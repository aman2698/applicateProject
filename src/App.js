import logo from './logo.svg';
import './App.css';
import Row1 from './Components/Row1';
import Row2 from './Components/Row2';


function App() {
  return (
    <div className="App">
    <div className="row1"> <Row1/> </div>
    <div><Row2/> </div>
    </div>
  );
}

export default App;
