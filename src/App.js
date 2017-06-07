import React, { Component } from 'react';
import Header from './header';
import Search from './search';
import RepoList from './repo-list';
import RepoDetail from './repo-detail';
import Loading from './loading';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <RepoList />
        <RepoDetail />
        <Loading />
      </div>
    );
  }
}

export default App;
