import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {array.map((value) => Task(value))}
        </p>
      </header>
    </div>
  );
}

export default App;
