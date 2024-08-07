{/* Component: Riya Shukla */}
{/* Import statements for the hook and the styled components */}

import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { ThemeContext } from "./Theme.jsx";

const StyledDiv = styled.div`
    width: 25%;
    background-color: ${(props) => props.theme.apiBackground};;
    padding: 1%;
    border: black 5px solid;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
`;

{/* Styling to make the text with font, padding/margins, etc */}
const PageWrapper = styled.div`
    width: 80vw;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;


{/* Function for the useEffect hook to fetch the data in an API call */}
export default function APICall() {

    {/* Allows us to access the theme values from ThemeContext (light/dark mode) */}
    const { theme } = useContext(ThemeContext);

    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetcher() {
            const rawData = await fetch("https://api.geckoterminal.com/api/v2/networks");
            const {data} = await rawData.json();
            setData(data);
        }

        fetcher();

    },[data.length]);


    {/* Return statement to return the data and the styled components*/}
    return (
        <>
            <PageWrapper theme={ theme }>
                {
                    data.map((char) =>
                        (
                            <StyledDiv key={char.id}>
                                <h1>{char.type}</h1>
                                <h1>{char.attributes.name}</h1>
                            </StyledDiv>
                        )
                    )
                }
            </PageWrapper>
        </>
    )
}



