import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle.tsx";
import {ExperienceItem} from "./experienceItem/ExperienceItem.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";

const timelineData = [
  { year: "2019", description: "Started learning html" },
  { year: "2020", description: "Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin" },
  { year: "2022", description: "Graduated" },
  { year: "2025", description: "First job Lorem  dolor sit amet, consectetur adipiscing elit, First job Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin" },
];

export const Experience = () => {
  return (
    <StyledExperience id={'aboutme'}>
      <Container>
        <SectionsTitle>Experience</SectionsTitle>
        <FlexWrapper>
          <ExperienceItem items={timelineData}/>

        </FlexWrapper>
      </Container>
    </StyledExperience>
  );
};

const StyledExperience = styled.section`
    padding-bottom: 140px;
`

