import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TechnologyItem} from "./technologyItem/TechnologyItem.tsx";
import {TechSkills} from "./technologyItem/TechSkills.tsx";
import {IconsList} from "../../../components/IconsList/IconsList.tsx";

const list = [
  {id: 'github-skills', width: '100' , height: '100', viewbox: '0 0 100 100'},
  {id: 'git-skills', width: '100' , height: '100', viewbox: '0 0 100 100'},
  {id:'figma-skills', width: '100' , height: '100', viewbox: '0 0 100 100'}
]

export const Technologies = () => {
  return (
    <StyledTechnologies>
      <SectionsTitle>Technologies</SectionsTitle>
      <FlexWrapper wrap={'wrap'} justify={'center'}>
        <TechnologyItem itemName={'Html'} progress={0}/>
        <TechnologyItem itemName={'Css, Sass'} progress={30}/>
        <TechnologyItem itemName={'React'} progress={60}/>
        <TechnologyItem itemName={'Styled components'} progress={10}/>
      </FlexWrapper>
      <TechSkills/>
      <TechnoList>
        <IconsList iconsItems={list}/>
      </TechnoList>
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.section`
    min-height: 100vh;
    background-color: #daffd4;
`
const TechnoList = styled.div``

