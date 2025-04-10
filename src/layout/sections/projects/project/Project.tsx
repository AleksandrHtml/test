import styled from "styled-components";


type ProjectPropsType = {
  title: string
  description: string
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Photo src={props.src} alt=""/>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectText>{props.description}</ProjectText>
      <a href="">Look It Up</a>
    </StyledProject>);
};

const StyledProject = styled.div`
    width: 550px;
`
const ProjectTitle = styled.h3`
    color: red;
    text-align: center;
`
const ProjectText = styled.p`

`
const Photo = styled.img`
    width: 500px;
    height: 280px;
`

