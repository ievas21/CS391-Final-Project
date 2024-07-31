import Login from "./components/Login.jsx";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        box-sizing: border-box; }
`;

function App() {

  return (
    <>
        <GlobalStyle/>
        <Login/>
    </>
  )
}

export default App
