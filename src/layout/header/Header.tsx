import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialList} from "../../components/social-list/SocialList.tsx";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
      <SocialList/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    background-color: #68d15d;
`
