import "./App.css";
import AdminPanel from "./AdminPanel.js";
import "./index.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
// import ExtraFeatures from "./ExtraFeatures";
import Navbar from "./component/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <header className="row">
          <div>
            <Link className="brand" to="/">
              GoComet Assignment
            </Link>
          </div>

          <div>
            <Link to="/">Cart</Link>
          </div>
        </header> */}
        <Navbar />
        <main>
          <Route path="/" component={AdminPanel} exact />
          {/* <Route path="/extrafeatures" component={ExtraFeatures} exact /> */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
