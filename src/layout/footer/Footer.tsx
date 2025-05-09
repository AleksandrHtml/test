import styled from "styled-components";
import {Contact} from "../../components/contacts/Contact.tsx";
import {IconsList} from "../../components/IconsList/IconsList.tsx";
import {Theme} from "../../components/styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const icons = [
  {id: 'git-social'},
  {id: 'linkedin-social' },
  {id: 'telegram-social'}
]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify={'space-between'} wrap={'wrap'}>
          <Contact title={'Call me:'} contactInfo={'123-456-789'} href={'tel:+123456789'}/>
          <Contact title={'Email'} contactInfo={'xxx@xyz.com'} href={'mailto:m.bluth@example.com'}/>
          <IconsList iconsItems={icons} gap={'35px'} mobileGap={'29px'} iconSize={'medium'} width={'250px'} justify={'flex-end'} margin={'56px auto 0'}/>
        </FlexWrapper>

      </Container>

    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 42px 0;
`

