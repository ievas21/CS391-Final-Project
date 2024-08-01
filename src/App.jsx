import Login from "./components/Login.jsx";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        box-sizing: border-box;
        background-color: #F3EBF6;
        font-family: 'Ubuntu', sans-serif;
    }
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
