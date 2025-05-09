import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {Link} from "react-scroll"

export const Menu = (props: {menuItems: Array<{ title: string; href: string }>}) => {
  return (
    <StyledMenu>
      <ul>

        {props.menuItems.map((item, index) => {
          return <li key={index}>
            <ListLink to={item.href} smooth={true}>{item.title}</ListLink>
          </li>;
        })}

      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
      display: flex;
      gap: 80px;
     
      @media ${Theme.media.tablet} {
          flex-direction: column;
          gap: 20px;
          align-items: center;
          
      }
  }
    
 
`

const ListLink = styled(Link)`
    font-weight: 500;
    font-size: 16px;
    color: ${Theme.colors.font};

    &:hover {
        color: ${Theme.colors.accentHover};
    }

    &:focus {
        outline: 2px solid ${Theme.colors.accentHover};
        outline-offset: 4px;
    }
`
