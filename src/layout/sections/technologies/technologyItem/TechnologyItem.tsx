import styled from "styled-components";
import {Theme} from "../../../../components/styles/Theme.ts";

type TechnologyItemPropsType = {
  itemName: string
  progress: number
}

export const TechnologyItem = (props: TechnologyItemPropsType) => {
  return (
    <StyledItem>
      <ItemName>{props.itemName}</ItemName>
      <ItemBarBox>
        <ItemProgres progress={props.progress}></ItemProgres>
      </ItemBarBox>
    </StyledItem>
  );
};

const StyledItem = styled.div`
    width: 900px;
`
const ItemName = styled.span`
    font-weight: 600;
    font-size: 24px;
    
    @media ${Theme.media.tablet} {
        font-size: 22px;
    }
`
const ItemBarBox = styled.div`
    width: 100%;
    height: 18px;
    background: #162950;
    border-radius: 83px;
`
const ItemProgres = styled.div<{ progress: number }>`
    border-radius: 83px;
    width: ${props => (props.progress !== undefined ? `${props.progress}%` : "100%")};
    height: 18px;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
`

