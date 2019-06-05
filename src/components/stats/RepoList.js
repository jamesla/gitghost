import React, { Component } from "react";
import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

//repoList, needs to be 5-8? By default.

client
  .query({
    query: gql`
      {
        viewer {
          name
          repositories(last: 5) {
            nodes {
              name
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));

class RepoList extends Component {
  render() {
    return <h1>RepoList - Console.log(5)</h1>;
  }
}

export default RepoList;