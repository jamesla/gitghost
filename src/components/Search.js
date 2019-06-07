import React, { Component } from "react";
import ApolloProvider from "react-apollo";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import RepoList from "./stats/RepoList";
import { Route, Redirect } from "react-router-dom";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      repository: "",
      startDate: new Date(),
      endDate: ""
    };
    this._handleUserChange = this._handleUserChange.bind(this);
    this._handleRepoChange = this._handleRepoChange.bind(this);
    this._handleStartDateChange = this._handleStartDateChange.bind(this);
    this._handleEndDateChange = this._handleEndDateChange.bind(this);
    this._selectRepo = this._selectRepo.bind(this);
  }

  _handleUserChange(e) {
    this.setState({ username: e.target.value });
  }

  _handleRepoChange(e) {
    this.setState({ repository: e.target.value });
  }

  _handleStartDateChange(e) {
    this.setState({ startDate: e.target.value });
  }

  _handleEndDateChange(e) {
    this.setState({ endDate: e.target.value });
  }

  _selectRepo() {
    console.log(this.state.username, this.state.repository);
    this.props.history.push(
      `/project/${this.state.username}/${this.state.repository}/${
        this.state.startDate
      }/${this.state.endDate}`

      //this.props.match.params.usernmae/repo
    );
  }

  render() {
    return (
      <div className="container">
        <h2>Search Users and Repositories</h2>
        <form className="form-inline">
          <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
            GitHub Username
          </label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">👻</div>
            </div>
            <input
              type="text"
              value={this.state.username}
              onChange={this._handleUserChange}
              className="form-control"
              id="inlineFormInputGroupUsername2"
              placeholder="GitHub Username"
            />
          </div>

          <label className="sr-only" htmlFor="inlineFormInputName2">
            Repository
          </label>
          <input
            type="text"
            value={this.state.repository}
            onChange={this._handleRepoChange}
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Repository"
          />

          <input
            className="form-control mb-2 mr-sm-2"
            type="date"
            value={this.state.startDate}
            onChange={this._handleStartDateChange}
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="date"
            value={this.state.endDate}
            onChange={this._handleEndDateChange}
          />

          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={this._selectRepo}
            onChange={this._handleRepoChange}
          >
            Goto Repo
          </button>
        </form>
        <h4>Repository list</h4>
        <RepoList username={this.state.username} />
      </div>
    );
  }
}

export default Search;
