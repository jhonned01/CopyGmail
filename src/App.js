import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail.jsx";
import EmailList from "./components/EmailList.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
