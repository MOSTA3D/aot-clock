import '../App.scss';
import Nav from "./Nav";
import Clock from "./Clock";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className='app-main'>
        <div className="left">
          <Clock />
        </div>
        <Todos />
      </main>
    </div>
  );
}

export default App;
