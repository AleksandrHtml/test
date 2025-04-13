import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle.tsx";
import {ExperienceItem} from "./experienceItem/ExperienceItem.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

const timelineData = [
  { year: "2019", description: "Started learning html" },
  { year: "2020", description: "Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin" },
  { year: "2022", description: "Graduated" },
  { year: "2025", description: "First job" },
];

export const Experience = () => {
  return (
    <StyledExperience>
      <SectionsTitle>Experience</SectionsTitle>
      <FlexWrapper>
        <ExperienceItem items={timelineData}/>

      </FlexWrapper>

    </StyledExperience>
  );
};

const StyledExperience = styled.section`
    height: 100vh;
    background-color: #9bcdef;
`

