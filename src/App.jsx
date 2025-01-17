import "./App.css";
import TaskCreate from "./components/TaskCreate";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="app-container">
        <div className="app-creator">
          <TaskCreate></TaskCreate>
        </div>
        <div>
          <TaskList></TaskList>
        </div>
      </div>
    </>
  );
}

export default App;
