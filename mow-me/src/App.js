import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
// import Map from "./pages/Map";
import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import Form from "./components/Form";
import AllJobs from "./components/AllJobs";
import "./App.css";

const App = () => (
  <Router>
    <div>
      
        {/* <Route exact path="/" component={Home} /> */}

        {/* <Route exact path="/home" component={Home} /> */}


        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/" component={Jobs} /> */}

          {/* <Route exact path="/home" component={Home} /> */}

        {/* <Route exact path="/jobs" component={Jobs} /> */} */}


    </div>
  </Router>
);

export default App;
