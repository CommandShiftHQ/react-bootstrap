import React from 'react';
import RepoCard from './repo-card';

const RepoList = () => (
  <div>
    <p>Repo List</p>
    <ul>
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </ul>
  </div>
);

export default RepoList;
