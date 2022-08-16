import React from "react"
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import configureStore from "../configureStore";
import Greeting, { getGreeting } from "./Greeting";

const store = configureStore();

store.dispatch(getGreeting());

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={"Welcome!"} />
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App