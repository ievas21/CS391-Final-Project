{/* ThemeContext Component by Ieva */}

import {createContext, useState} from "react";
import PropTypes from "prop-types";
import styled, {ThemeProvider} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

{/* Theme values for the light theme context*/}
const lightTheme = {
    mainBackground: '#F3EBF6',
    divBackground: '#FFFFFF',
    pText: 'rgb(104, 119, 244)',
    buttonBackground: 'linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%)',
    inputBackground: '#FFFFFF',
    border: '2px solid #808080',
    apiBackground: '#a1dbf0',
    messageBackground: '#000000',
};

{/* Theme values for the dark theme context */}
const darkTheme = {
    mainBackground: '#2b2b28',
    divBackground: '#4a4a48',
    pText: 'rgb(225, 107, 140)',
    buttonBackground: 'linear-gradient(109.1deg, rgb(181, 73, 91) 7.1%, rgb(225, 107, 140) 86.4%)',
    inputBackground: '#FCB1C3',
    textColor: '#000000',
    border: '2px solid #878586',
    apiBackground: 'rgb(225, 107, 140)',
    messageBackground: '#F3EBF6',
};

{/* Creates the light/dark theme toggle button */}
const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
`;

{/* Create the context that will allow us to switch between the light/dark modes */}
export const ThemeContext = createContext();

{/* ThemeContextProvider function that uses the ThemeContext context to change the children */}
export default function ThemeContextProvider( {children} ) {

    {/* useState hook that keeps track of what theme is currently on */}
    const [theme, setTheme] = useState(lightTheme);


    {/* toggle function that sets the useState */}
    function toggle() {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    }


    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {/* ThemeProvider that passes down the theme values to its children */}
            <ThemeProvider theme={theme}>
                {/* Icon Button for light/dark mode toggle */}
                <StyledButton onClick={toggle}>
                    {/* Icon that displays the moon/sun for dark/light mode */}
                    <FontAwesomeIcon icon={theme === lightTheme ? faMoon : faSun} />
                </StyledButton>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}

{/* Establish the propTypes for ThemeContextProvider */}
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};