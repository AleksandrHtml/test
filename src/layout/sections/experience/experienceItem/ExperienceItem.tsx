import styled from "styled-components";

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
          <Circle/>
          <Description>
            {item.description}
          </Description>
        </Item>
      ))}


    </TimeLineContainer>
  );
};

const TimeLineContainer = styled.div`
    width: 1140px;
    background-color: #c9e49c;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 132px;
        top: 28px;
        width: 880px;
        height: 8px;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
        border-radius: 83px;
        z-index: 0;
    }
`
const Item = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`
const Year = styled.span`

`
const Circle = styled.span`
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #fff;
`

const Description = styled.p``