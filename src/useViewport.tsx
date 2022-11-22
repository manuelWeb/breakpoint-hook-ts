import { useEffect, useState } from 'react';
const breakpoints: any = {
  xs: 320,
  sm: 600,
  md: 900,
  lg: 1000,
  xl: 1100,
}

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [currBp, setCurrBp] = useState<null | string>(null)

  useEffect(() => {
    const handleWidowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidowResize)
    // rm listener componentWillUnmount
    return (() => { window.removeEventListener('resize', handleWidowResize) })
  }, [width])
  /**
   * transform window.innerWidth to breakpoints string
   */
  useEffect(() => {
    for (const key in breakpoints) {
      if (width < breakpoints[key]) {
        setCurrBp(key)
        break
      } else { setCurrBp('xxlarge') }
    }
  }, [width])

  return { currBp }

};

export default useViewport;