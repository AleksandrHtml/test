import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionsTitle} from "../../../components/SectionsTitle.tsx";
import {Project} from "./project/Project.tsx";
import img1 from "../../../assets/images/image 1.png";


export const Projects = () => {
  return (
    <StyledProjects>
      <SectionsTitle>Projects</SectionsTitle>
      <FlexWrapper wrap={'wrap'} justify={'space-around'}>
        <Project src={img1}
                 title={'Project1'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Project src={img1}
                 title={'Project2'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Project src={img1}
                 title={'Project3'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        <Project src={img1}
                 title={'Project4'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
      </FlexWrapper>

    </StyledProjects>
  );
};

const StyledProjects = styled.section`
    background-color: #161d2a;
`

