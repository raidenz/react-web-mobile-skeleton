import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Loadable from 'react-loadable'

const Loading = () => (<div>Loading bro</div>)

const RenderContent = () => {
  if (isMobile) {
    const Mobile = Loadable({
      loader: () => import('./mobile'),
      loading: Loading,
    });
    return <Mobile />
  }
  const Web = Loadable({
    loader: () => import('./web'),
    loading: Loading,
  });
  return <Web />
}

ReactDOM.render((
  <BrowserRouter>
    <RenderContent />
  </BrowserRouter>
),document.getElementById('root'));
