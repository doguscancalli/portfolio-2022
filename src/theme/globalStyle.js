import { createGlobalStyle } from 'styled-components'
import theme from '../theme'
import './normalize.css'

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 0px;
}

.c-scrollbar_thumb {
  background-color: #ffffff !important;
}


body {
  font-family: ${theme.font.fontFamily};
  background: ${theme.color.black};
  color: ${theme.color.white};
  visibility: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
}

p {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.618;
  opacity: .6;

  @media (max-width: ${theme.breakpoint.mobileL}){
    font-size: 0.875rem;
  }
}

a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
}

ul {
  list-style-type: none;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

img {
  vertical-align: middle;
}
`

export default GlobalStyle
