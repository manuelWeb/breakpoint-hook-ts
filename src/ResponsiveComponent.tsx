import React from 'react';
import useViewport from './useViewport';

const ResponsiveComponent = () => {
  const { currBp } = useViewport();

  return (
    <h1>{currBp}</h1>
  );
};

export default ResponsiveComponent;