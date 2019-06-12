import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const RepoList = props => (
  <Query
    pollInterval={1000}
    query={gql`
      {
        user(login: "nivvyart") {
          avatarUrl
          resourcePath

          followers {
            totalCount
          }
          starredRepositories {
            totalCount
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Please use the search function above</p>;

      return data.user.repositories.edges.map(({ node }, index) => (
        <tr key={index}>
          <td>{node.name}</td>
          <td>{node.createdAt}</td>
          <td>
            <a target="_blank" href={node.url}>
              Link to external Repo
            </a>
          </td>
        </tr>
      ));
    }}
  </Query>
);

export default RepoList;
