import React from 'react';
import useViewport from './useViewport';

const ResponsiveComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620

  return (
    width < breakpoint ? <Mobile /> : <Desktop />
  );
};

export default ResponsiveComponent;

function Mobile() {
  return (
    <h1>Je suis en dessous de 620</h1>
  )
}
function Desktop() {
  return (
    <h1>Je suis &gt;620 Desktop</h1>
  )
}