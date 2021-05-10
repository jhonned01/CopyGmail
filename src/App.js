import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail.jsx";
import EmailList from "./components/EmailList.jsx";
import SendMail from "./components/SendMail.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMenssageIsOpen } from "./features/counter/mailSlice";
import { login, selectUser } from "./features/counter/userSlice";
import Login from "./components/Login.jsx";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMenssageIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
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
        </div>
      )}
    </Router>
  );
}

export default App;
