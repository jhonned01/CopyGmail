import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail.jsx";
import EmailList from "./components/EmailList.jsx";
import SendMail from "./components/SendMail.jsx";
import { useSelector } from "react-redux";
import { selectSendMenssageIsOpen } from "./features/counter/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMenssageIsOpen);
  return (
    <div className="app">
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
        {sendMessageIsOpen && <SendMail />}
      </Router>
    </div>
  );
}

export default App;
