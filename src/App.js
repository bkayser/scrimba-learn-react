import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Controls from "./components/Controls"
function App() {
  return (
    <div className="App">
      <Header />
      <div className="control_panel">
        <Controls />
        <img src="https://miro.medium.com/max/1176/0*FIrgbyL6VCO4jUmG"/>
      </div>
    </div>
  )
}

export default App;
