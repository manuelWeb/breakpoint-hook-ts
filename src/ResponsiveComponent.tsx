import React, { useEffect, useState } from 'react';

const ResponsiveComponent = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 620;

  useEffect(() => {
    const handleWidowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidowResize)

    // rm listener componentWillUnmount
    return (() => { window.removeEventListener('resize', handleWidowResize) })

  }, [])

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