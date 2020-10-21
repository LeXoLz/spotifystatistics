import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Overview from './spotify/overview/overview';
import Landingpage from './landingpage/landingpage';
import Tracks from './spotify/tracks/tracks';
import Artists from './spotify/artists/artists';
import Analyze from './spotify/analyze/analyze';
import { Header } from './common';

import './App.css';

import { validateToken } from '../helper/authenticationhelper';

const AppRouter = ({ isLoading }) => {
  if (isLoading) {
    return null;
  }

  if (!validateToken()) {
    return <Landingpage />;
  }

  return (
    <div className="router-section" id="router-element">
      <Header />
      <Route exact path="/" component={Overview} />
      <Route exact path="/artists" component={Artists} />
      <Route exact path="/tracks" component={Tracks} />
      <Route exact path="/analyze" component={Analyze} />
      <Route component={Overview} />
    </div>
  );
};

AppRouter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

AppRouter.defaultProps = {
  isLoading: false,
};

export default AppRouter;
