import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

type MainButtonProps = {
  href: string
  text: string
  width: string
}

export const MainButton = (props: MainButtonProps) => {
  return (
    <Styledbutton href={props.href} width={props.width}>{props.text}

    </Styledbutton>
  );
};

const Styledbutton = styled.a<{width: string}>`
    display: block;
    width: ${props => `${props.width}px`};
    padding: 15px 0;
    font-weight: 600;
    font-size: 20px;
    color: ${Theme.colors.font};
    border-radius: 83px;
    text-align: center;
    background: ${Theme.colors.accent};

    &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        outline: 2px solid #fff;
        outline-offset: 4px;
    }

    &:active {
        transform: translateY(0) scale(0.97);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
    
    @media ${Theme.media.tablet} {
        font-size: 18px;
    }
`




