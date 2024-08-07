import Login from "./components/Login.jsx";
import {createGlobalStyle} from "styled-components";
import ThemeContextProvider from "./components/Theme.jsx";


{/* Establish a global style to the page */}
const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.mainBackground};
        font-family: 'Ubuntu', sans-serif;
    }
`;

{/* App function that render the login page using the ThemeContext Provider*/}
function App() {

  return (
    <ThemeContextProvider>
        <GlobalStyle/>
        <Login/>
    </ThemeContextProvider>
  )
}

export default App
