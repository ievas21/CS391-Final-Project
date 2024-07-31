import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;

`;

const StyledInput = styled.input`
    padding: 3px;
    margin: 0 auto;

`;

const StyledLabel = styled.label`
    display: block;

`;

export default function Login() {

    function handleSubmit() {

    }

    return(
        <>
            <StyledDiv>
                <StyledLabel>
                    Username: <StyledInput name="username" type="text"/>
                </StyledLabel>

                <br/><br/>

                <StyledLabel>
                    Password: <StyledInput name="password" type="password"/>
                </StyledLabel>

                <br/><br/><br/>

                <button onClick={handleSubmit}>Login</button>
            </StyledDiv>
        </>
    )
}