import styled from "styled-components";
import {Contact} from "../../components/contacts/Contact.tsx";
import {IconsList} from "../../components/IconsList/IconsList.tsx";

const icons = [
  {id: 'git-social'},
  {id: 'linkedin-social' },
  {id: 'telegram-social'}
]

export const Footer = () => {
  return (
    <StyledFooter>
      <Contact title={'Call me:'} contactInfo={'123-456-789'} href={'tel:+123456789'}/>
      <Contact title={'Email'} contactInfo={'xxx@xyz.com'} href={'mailto:m.bluth@example.com'}/>
      <IconsList iconsItems={icons}/>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    background-color: #6a4b66;
`

