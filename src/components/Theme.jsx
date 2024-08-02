import {createContext, useState} from "react";
import PropTypes from "prop-types";
import styled, {ThemeProvider} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const lightTheme = {
    mainBackground: '#F3EBF6',
    divBackground: '#FFFFFF',
    pText: 'rgb(104, 119, 244)',
    buttonBackground: 'linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%)',
    inputBackground: '#FFFFFF',
    border: '2px solid #808080',
}

const darkTheme = {
    mainBackground: '#2b2b28',
    divBackground: '#4a4a48',
    pText: 'rgb(225, 107, 140)',
    buttonBackground: 'linear-gradient(109.1deg, rgb(181, 73, 91) 7.1%, rgb(225, 107, 140) 86.4%)',
    inputBackground: '#FCB1C3',
    textColor: '#000000',
    border: '2px solid #878586',
};

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
`;

export const ThemeContext = createContext();

export default function ThemeContextProvider( {children} ) {
    const [theme, setTheme] = useState(lightTheme);


    function toggle() {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    }


    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            <ThemeProvider theme={theme}>
                <StyledButton onClick={toggle}>
                    <FontAwesomeIcon icon={theme === lightTheme ? faMoon : faSun} />
                </StyledButton>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};