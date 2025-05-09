import styled from "styled-components";
import {Theme} from "../../../../components/styles/Theme.ts";

export const TechSkills = () => {
  return (
    <Skills>
      <SkillsTitle>Additional technologies and skills</SkillsTitle>

    </Skills>
  );
};

const Skills = styled.div`
  margin: 120px 0 70px;
`
const SkillsTitle = styled.h3`
    font-weight: 600;
    font-size: 44px;
    
    @media ${Theme.media.tablet} {
        font-size: 27px;
    }
`
