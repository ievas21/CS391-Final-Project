import styled from "styled-components";
import {useContext} from "react";
import { ThemeContext } from "./Theme.jsx";

const StyledDiv = styled.div`
    width: 400px;
    height: 400px;
    margin: 7em auto;
    border-radius: 1.5em;
    box-shadow: 0 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.divBackground};
`;

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

const StyledForm = styled.form`
    padding-top: 10px;
    padding-bottom: 18px;
`;

const StyledButton = styled.button`
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    font-family: "Monaco", "Courier New", serif;
    font-weight: bold;
    background: ${(props) => props.theme.buttonBackground};
    border: 0;
    padding: 10px 40px;
    margin-left: 35%;
    font-size: 15px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`;


export default function Login() {

    const { theme } = useContext(ThemeContext);

    function handleSubmit() {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === password) {
            console.log("They match! Still implementing the logic here...");
        }
    }

    return(
        <>
            <StyledDiv theme={ theme }>
                <StyledP>Sign-In</StyledP>
                <StyledForm>
                    <StyledInput name="username" type="text" placeholder="Username"/>

                    <StyledInput name="password" type="password" placeholder="Password"/>
                </StyledForm>

                <StyledButton onClick={handleSubmit}>Login</StyledButton>
            </StyledDiv>
        </>
    )
}