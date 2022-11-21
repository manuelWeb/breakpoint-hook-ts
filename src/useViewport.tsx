import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWidowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidowResize)

    // rm listener componentWillUnmount
    return (() => { window.removeEventListener('resize', handleWidowResize) })

  }, [width])

  return { width }

};

export default useViewport;