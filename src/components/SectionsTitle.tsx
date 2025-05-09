import styled from "styled-components";
import {Theme} from "./styles/Theme.ts";

export const SectionsTitle = styled.h2`
    margin: 100px 0 70px;
    font-weight: 600;
    font-size: 46px;
    
    @media ${Theme.media.tablet} {
        margin: 70px 0 30px;
        font-size: 32px;
    }
`