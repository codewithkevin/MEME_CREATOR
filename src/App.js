import './App.css';
import Header from './component/Header'
import Meme from './component/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';

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
