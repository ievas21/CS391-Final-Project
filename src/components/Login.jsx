{/* Login Component by Ieva */}

import APICall from "./APICall.jsx";
import styled from "styled-components";
import {useContext, useState} from "react";
import { ThemeContext } from "./Theme.jsx";


{/* CSS-in-JS Styling for Div */}
const StyledDiv = styled.div`
    width: 400px;
    height: 400px;
    margin: 7em auto;
    border-radius: 1.5em;
    box-shadow: 0 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.divBackground};
`;

{/* CSS-in-JS Styling for Sign-In Heading */}
const StyledP = styled.p`
    padding-top: 40px;
    color: ${(props) => props.theme.pText};;
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 18px;
    display: flex;
    justify-content: center;
`;

{/* CSS-in-JS Styling for Username and Password Inputs */}
const StyledInput = styled.input`
    width: 82%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: ${(props) => props.theme.inputBackground};
    padding: 15px 20px;
    border-radius: 20px;
    border: ${(props) => props.theme.border};
    margin: 25px 15px;
    text-align: center;
    display: flex;
    justify-content: center;
`;

{/* CSS-in-JS Styling for the whole input form*/}
const StyledForm = styled.form`
    padding-top: 10px;
    padding-bottom: 8px;
`;

{/* CSS-in-JS Styling for Login button */}
const StyledButton = styled.button`
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    font-family: "Monaco", "Courier New", serif;
    font-weight: bold;
    background: ${(props) => props.theme.buttonBackground};
    border: 0;
    padding: 10px 40px;
    margin-top: 2px;
    margin-left: 35%;
    font-size: 15px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`;

const StyledMessage = styled.p`
    padding-top: 15px;
    margin: 0 auto;
    font: ${(props) => props.theme.messageBackground};
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: "Monaco", "Courier New", serif;
    
`;

{/* Login-in function that renders the sign-in form */}
export default function Login() {

    {/* Allows us to access the theme values from ThemeContext (light/dark mode) */}
    const { theme } = useContext(ThemeContext);

    {/* useState hooks that store and update the username/password fields and error message field */}
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');

    {/* useState hooks that store and update the api call results and the boolean results to see if the user is logged in */}
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    {/* async onClick function for the sign-in button press */}
    async function handleSubmit() {

        {/* If the username and password match, call the APICall function*/}
        if (user === pass) {
            setIsLoggedIn(true);

        } else (
            setMessage('Error, try again!')
        );
    }

    return(
        <>
            {isLoggedIn ? (
                <APICall/>
            ) : (
                <StyledDiv theme={theme}>
                    <StyledP>Sign-In</StyledP>
                    <StyledForm>
                        <StyledInput type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)}/>

                        <StyledInput type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                    </StyledForm>

                    <StyledButton type="submit" onClick={handleSubmit}>Login</StyledButton>
                    <StyledMessage>{message}</StyledMessage>
                </StyledDiv>

            )}
        </>
    );
}