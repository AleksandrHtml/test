import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "../../../assets/images/Rectangle 6.png";
import photoWebP from "../../../assets/images/Rectangle-6.webp";
import photoWebP2x from "../../../assets/images/Rectangle-6-2x.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {MainButton} from "../../../components/main-button/MainButton.tsx";
import {Theme} from "../../../components/styles/Theme.ts";

export const Main = () => {
  return (
    <StyledMain>
        <Container>
          <FlexWrapper justify={'space-between'}>
            <TextWrapper>
              <MainTitle>Lorem ipsum dolor amet</MainTitle>
              <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</MainText>
                <MainButton href={'#'} text={'Let’s Begin'} width={'240'}/>
            </TextWrapper>
            <PhotoWrapper>
              <picture>
                <source srcSet={`${photoWebP2x} 2x, ${photoWebP} 1x`} type={'image/webp'}/>
                <Photo src={photo} alt="Pofile"/>
              </picture>

            </PhotoWrapper>

          </FlexWrapper>
        </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
    display: flex;
  min-height: 700px;
   
    @media ${Theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column-reverse;
        }
    }
    
`

const TextWrapper = styled.div`
  max-width: 673px;
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 54px;
    
    @media ${Theme.media.tablet} {
        font-size: 36px;
        line-height: 1.16667;
    }
`

const MainText = styled.p`
    max-width: 480px;
    margin: 15px 0 60px;
    color: #bcbcbc;
    
   `

const PhotoWrapper = styled.div`
    flex-shrink: 0;
    width: 380px;
    height: 450px;
    padding: 5px; /* border thickness */
    border-radius: 50px 0;
    background: ${Theme.colors.accent};
    display: inline-block;
    
    @media ${Theme.media.tablet} {
        width: 335px;
        height: 400px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
`

const Photo = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px 0;
`

