import './App.css';
import Header from './component/Header'
import Meme from './component/Hero'

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <Header />
      </div>

      <div>
        <Meme />
      </div>

    </div>
  );
}

export default App;
