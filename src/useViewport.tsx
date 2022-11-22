import { useEffect, useState } from 'react';
const breakpoints: any = {
  xs: 320,
  sm: 600,
  md: 900,
  lg: 1000,
  xl: 1100,
}
function isGreaterThan(window: number, bp: number): boolean {
  return window <= bp
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
    if (isGreaterThan(width, breakpoints.xl)) {
      setCurrBp('xl')
    } else if (isGreaterThan(width, breakpoints.lg)) {
      setCurrBp('lg')
    } else if (isGreaterThan(width, breakpoints.md)) {
      setCurrBp('md')
    } else if (isGreaterThan(width, breakpoints.sm)) {
      setCurrBp('sm')
    } else if (isGreaterThan(width, breakpoints.xs)) {
      setCurrBp('xs')
    } else {
      setCurrBp('xxlarge')
    }
  }, [width])

  return { currBp }

};

export default useViewport;