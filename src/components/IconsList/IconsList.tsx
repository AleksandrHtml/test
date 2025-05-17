import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

type IconPropsType = {
  id: string
  width?: string
  height?: string
  viewbox?: string
}

type IconsListPropsType = {
  iconSize: string;
  iconsItems: Array<IconPropsType>
  gap: string
  mobileGap?: string
  margin?: string
  width?: string
  justify?: string
}

type StyledProps = {
  gap: string
  mobileGap?: string
  margin?: string
  width?: string
  justify?: string
}


export const IconsList = (props: IconsListPropsType) => {
  return (
    <StyledSocialList gap={props.gap} margin={props.margin} mobileGap={props.mobileGap} width={props.width}
                      justify={props.justify}>
      {props.iconsItems.map((item, index) => (
        <SocialListItem key={index}>
          <SocialListLink href='#' iconSize={props.iconSize}>
            <Icon iconId={item.id} height={item.height} width={item.width} viewBox={item.viewbox}/>
          </SocialListLink>
        </SocialListItem>
      ))}


    </StyledSocialList>
  );
};

const StyledSocialList = styled.ul<StyledProps>`
    display: flex;
    justify-content: ${props => props.justify};
    min-width: ${props => props.width};
    column-gap: ${props => props.gap};


    @media ${Theme.media.tablet} {
        column-gap: ${props => props.mobileGap};
        margin: ${props => props.margin};
        justify-content: center;
    }

`

const SocialListItem = styled.li``

const SocialListLink = styled.a<{ iconSize: string }>`
    cursor: pointer;
    display: inline-block; 
    transition: transform 0.3s ease, opacity 0.3s ease; 


    svg {
        width: ${(props) => {
            switch (props.iconSize) {
                case "small":
                    return '32px';
                case "medium":
                    return '35px';
                case "large":
                    return '100px';
                default:
                    return '32px';
            }
        }
        };

        height: ${(props) => {
            switch (props.iconSize) {
                case "small":
                    return '32px';
                case "medium":
                    return '35px';
                case "large":
                    return '100px';
                default:
                    return '32px';
            }
        }};

        @media ${Theme.media.tablet} {
            width: ${(props) => {
                switch (props.iconSize) {
                    case "small":
                        return '32px';
                    case "medium":
                        return '25px';
                    case "large":
                        return '60px';
                    default:
                        return '32px';
                }
            }
            };

            height: ${(props) => {
                switch (props.iconSize) {
                    case "small":
                        return '32px';
                    case "medium":
                        return '25px';
                    case "large":
                        return '60px';
                    default:
                        return '32px';
                }
            }
            };
        }
    }

    

    &:hover {
        transform: scale(1.1);
        opacity: 0.8; 
    }

    &:focus-visible {
        outline: 2px solid blue;
    }

    &:active {
        transform: scale(0.95);
    }
    
`

