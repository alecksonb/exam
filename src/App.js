import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header';
import Search from './search';
import RepoList from './repo-list';
import RepoDetail from './repo-detail';
import Loading from './loading';

class App extends Component {  
    state = {
        repos: [],
        username: '',
        loading: false
    }

    handleNewSearch = () => {
      this.setState({
        repos: [],
        username: ''
      })
    }

    handleUsernameSubmit = (username) => {
        this.setState({loading:true, username:username})
        return axios.get(`https://api.github.com/users/${username}/repos`)
            .then(({ data }) => {
                if (data < 1) {
                    this.setState({
                        repos: [],
                        loading:false
                    })
                    throw new Error('No results');
                }
                this.setState({
                    repos: data,
                    loading:false
                });
            });
    }
  render() {
    let loadingIndicator = (this.state.loading) ? <Loading /> : null;
    let repoList = (this.state.repos.length >= 1) ? <RepoList repos={this.state.repos} username={this.state.username}/> : null;
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => {
              return (
                <div>
                  <Header showHome={false}/>
                  <Search onSubmit={this.handleUsernameSubmit} newSearch={this.handleNewSearch}/>
                  {loadingIndicator}
                  {repoList}
                </div>
              )}} />
          <Route path="/repoDetail/:reponame" render={(props) => {
                  const repo = this.state.repos.find(item => item.name  === props.match.params.reponame)
                  return (
                          <div>
                          <Header showHome={true}/>
                          <RepoDetail {...props} repo={repo} shouldRedirect={this.state.repos.length < 1}/>
                          </div>
                        )   
                    }} />
        </div>
      </Router>
    );
  }
}

export default App;
