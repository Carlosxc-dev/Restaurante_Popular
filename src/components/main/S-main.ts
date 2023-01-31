import styled from "styled-components";
import { Conteiner } from "../conteiner";

export const Main = styled.main`
    min-height: 100vh;
    max-width: 80%;
    margin: auto;
    background-color: #6666;

    display: grid;
    grid-template-columns: repeat(3, minmax(200, 1fr));
    grid-gap: 1.5rem;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-items: center;

    .title{
        grid-column-start: 1;
        grid-column-end: 4;
    }
`