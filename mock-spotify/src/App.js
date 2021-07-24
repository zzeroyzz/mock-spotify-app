import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
const  App = ()=> {
  return (
    <div className= "outerwrap">
    <div className="App">
    <NavBar/>
    <Main/>
    </div>
    <div className="musicControls">Music controls</div>
    </div>
  );
}

export default App;

