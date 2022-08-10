import { extendTheme } from '@chakra-ui/react'
import "@fontsource/plus-jakarta-sans"
import "@fontsource/khand"
import { createBreakpoints } from '@chakra-ui/theme-tools'


// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '390px',
  md: '700px',
  lg: '920px',
  xl: '1200px',
  '2xl': '1536px',
})

const theme = extendTheme({

  breakpoints,
  fonts: {
    heading: '"Plus Jakarta Sans", sans-serif; ',
    body: '"Plus Jakarta Sans", sans-serif; ',
  
  },
 
})

export default theme