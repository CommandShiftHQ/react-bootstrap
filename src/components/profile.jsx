import React, { Component } from 'react';
import ContributionSummary from './contribution-summary';
import ProfileCard from './profile-card';
import RepoList from './repo-list';


class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ProfileCard />
        <RepoList />
        <ContributionSummary />
      </div>
    );
  }
}

export default Profile;
