import styled from "styled-components";
import {Theme} from "../../../../components/styles/Theme.ts";

type ExperienceItemPropsType = {
  year: string
  description: string
}

type DataPropsType = {
  items: Array<ExperienceItemPropsType>;
}

export const ExperienceItem = (props: DataPropsType) => {
  return (
    <TimeLineContainer>

      {props.items.map((item, index) => (
        <Item key={index}>
          <Year>{item.year}</Year>
          <Description>
            {item.description}
          </Description>
        </Item>
      ))}


    </TimeLineContainer>
  );
};

const TimeLineContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 47px;
        left: 12%;
        right: 12%;
        height: 8px;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
        border-radius: 83px;
        z-index: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 50px;

        &::before {
            top: 15px;
            left: 8px;
            width: 8px;
            height: 97%;
            background: linear-gradient(180deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
        }
`
const Item = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 38px;
        left: 44%;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: #fff;
    }
    
    @media ${Theme.media.tablet} {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 0;
        position: relative;
        padding-left: 60px;
        
        &::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 0;
            width: 25px;
            height: 25px;
            border-radius: 100%;
            background-color: #fff;
        }
    }
`
const Year = styled.span`
    font-weight: 600;
    font-size: 26px;

`


const Description = styled.p`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
`