import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

type IconPropsType = {
  id: string
  width?: string
  height?: string
  viewbox?: string
}

type IconsListPropsType = {
  iconsItems: Array<IconPropsType>
}

 export const IconsList = (props: IconsListPropsType) => {
  return (
    <StyledSocialList>
      {props.iconsItems.map((item, index) => (
        <SocialListItem key={index}>
          <SocialListLink>
            <Icon iconId={item.id} height={item.height} width={item.width} viewBox={item.viewbox}/>
          </SocialListLink>
        </SocialListItem>
      ))}


    </StyledSocialList>
  );
};

 const StyledSocialList = styled.ul`
     display: flex;
     background-color: #7eb3dd;
 `

const SocialListItem = styled.li``

const SocialListLink = styled.a`
  
`

