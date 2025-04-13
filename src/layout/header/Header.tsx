import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {IconsList} from "../../components/IconsList/IconsList.tsx";

const items = ['Projects', 'Technologies', 'About me'];
const social = [
  {id: 'git-social', width: '32' , height: '32', viewbox: '0 0 32 32'},
  {id: 'linkedin-social', width: '32' , height: '32', viewbox: '0 0 32 32' },
  {id: 'telegram-social', width: '32' , height: '32', viewbox: '0 0 32 32'}
]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu menuItems={items}/>
      <IconsList iconsItems={social}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    background-color: #68d15d;
`
