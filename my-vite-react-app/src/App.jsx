
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
   
      <div className="home">
        <h2 className="title">Manage Your Portfolio</h2>
        <div className="links">
          <button>
            <Link to={"/addexperience"}> Add an Experience</Link>
          </button>
          <button>
            <Link to={"/addproject"}>Add a Project</Link>
          </button>
          <button>
            <Link to={"/deleteproject"}>Delete a Project</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
