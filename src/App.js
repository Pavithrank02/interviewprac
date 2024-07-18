import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  const prop = "abc"
  return (

    <div className="App">
      <Header prop={prop} />
    </div>
  );
}

export default App;
