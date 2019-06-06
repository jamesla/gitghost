import React, { Component } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Project from "./components/Project";
import { ApolloProvider } from "react-apollo";
import client from "./utils/GitHubGQL";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/project" component={Project} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default Routes;
