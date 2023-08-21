
import "./App.css";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import UserCreate from "./components/UserCreate";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <TopBar />
                <div className="container-fluid">
                  <Switch>
                    <Route path="/" exact={true} component={Dashboard} />
                    <Route path="/user" exact={true} component={Users} />
                    <Route
                      path="/user-create"
                      exact={true}
                      component={UserCreate}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
