import React from 'react';
import reactLoadable from 'react-loadable';
import { isMobile } from 'react-device-detect';

const Loading = () => (<div>Loading...</div>);

const Loadable = (props) => {
  const { location, ...rest } = props;
  if (isMobile) {
    return reactLoadable({
      loading: Loading,
      loader: () => import(`mobile/${location}`),
      ...rest
    })
  } else {
    return reactLoadable({
      loading: Loading,
      loader: () => import(`web/${location}`),
      ...rest
    })
  }
}

export default Loadable
