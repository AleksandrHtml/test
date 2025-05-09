import styled from "styled-components";
import {Theme} from "../../../../components/styles/Theme.ts";
import {MainButton} from "../../../../components/main-button/MainButton.tsx";


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
      <MainButton href={''} text={'Look It Up'} width={'200'}/>
    </StyledProject>);
};

const StyledProject = styled.div`
    max-width: 550px;
    width: 100%;
    padding: 25px 25px 40px;
    border: 1px solid #a39d9d;
    border-radius: 50px 0;
    background-color: ${Theme.colors.primaryBg};
    
    @media ${Theme.media.mobile} {
        a {
            width: 295px;
        }
    }
    
`
const ProjectTitle = styled.h3`
    position: relative;
    padding: 40px 0 23px;
    font-weight: 600;
    font-size: 30px;
    line-height: 0.885;
    text-align: center;
    
    @media ${Theme.media.tablet} {
        font-size: 24px;
    }
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 20%;
        background: ${Theme.colors.accent};
        border-radius: 83px;
        width: 300px;
        height: 4px;
        
        @media ${Theme.media.tablet} {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`
const ProjectText = styled.p`
    padding: 40px 0 50px;
    
`
const Photo = styled.img`
    border-radius: 24px 8px 8px 8px;
    max-width: 500px;
    max-height: 280px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media ${Theme.media.mobile} {
        max-width: 295px;
        max-height: 220px;
    }
`

