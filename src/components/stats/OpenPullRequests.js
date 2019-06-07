import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const OpenPullRequests = props => (
  <Query
    query={gql`
      {
        user(login: "${props.username}") {
          repository(name: "${props.repository}") {
            url
            pullRequests(last: 30, states: OPEN) {
              edges {
                node {
                  id
                  author {
                    login
                  }
                  title
                  createdAt
                  closed
                  url
                }
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let startDate = new Date(props.startDate).toISOString();
      let endDate = props.endDate + "T23:59:59.999Z";

      console.log(startDate);
      console.log(endDate);

      //data.user.repository.pullRequest.edges.filter( (pr) => pr.closed === flase )
      //data.user.repository.pullRequest.edges.filter( (pr) => pr.closed === flase ).map etc etc
      return data.user.repository.pullRequests.edges.map(({ node }, index) => (
        <div>
          <tr key={index}>
            <td>{node.title}</td>
            <td>{node.url}</td>
            <td>{node.createdAt}</td>
          </tr>
        </div>
      ));
    }}
  </Query>
);

export default OpenPullRequests;
