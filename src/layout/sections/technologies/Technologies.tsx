import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle.tsx";

export const Technologies = () => {
  return (
    <StyledTechnologies>
      <SectionsTitle>Technologies</SectionsTitle>
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.section`
    min-height: 100vh;
    background-color: #daffd4;
`

