import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Loadable from 'shared/Loadable'

const Home = Loadable({
  location: 'Home'
});

export default class componentName extends Component {
  render() {
    return (
      <div>
        {
          /**
           * Default Header
           * Set Other to single page
          */
        }
        <Helmet>
          <title>Server Side Rendering - Create React App</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}
