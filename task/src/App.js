import "./App.css";
import FillingForm from "./components/fillingForm/fillingForms";
import Confirmation from "./components/confirmation/confirmation";
import Result from "./components/result/result";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  const urlConfirmation = useSelector((s) => s.urlConfirmation);
  console.log(urlConfirmation);
  return (
    <div className="App">
      <div className="center">
        <Router>
          <Route exact path="/" component={FillingForm} />
          <Route exact path="/сonfirmation">
            {urlConfirmation ? <Confirmation /> : <Redirect to="/" />}
          </Route>
          <Route path="/result" component={Result} />
        </Router>
      </div>
    </div>
  );
}

export default App;
