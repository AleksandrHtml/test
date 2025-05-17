import styled, {css} from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {IconsList} from "../../components/IconsList/IconsList.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../components/styles/Theme.ts";
import * as React from "react";

const items = [
  {
    title: 'Projects',
    href: 'projects',
  },
  {
    title: 'Technologies',
    href: 'technologies',
  },
  {
    title: 'About me',
    href: 'aboutme',
  }];
const social = [
  {id: 'git-social', width: '32', height: '32', viewbox: '0 0 32 32'},
  {id: 'linkedin-social', width: '32', height: '32', viewbox: '0 0 32 32'},
  {id: 'telegram-social', width: '32', height: '32', viewbox: '0 0 32 32'}
]


export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const onBurgerClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'}>
          <Logo/>
          <CloseButton isOpen={menuIsOpen} onClick={onBurgerClick}>
            <span></span>
          </CloseButton>

          <StyledMenuBlock isOpen={menuIsOpen}>
            <Menu menuItems={items}/>
            <IconsList iconsItems={social} gap={'25px'} iconSize={'small'}/>
          </StyledMenuBlock>

        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    padding: 26px 0;
    background-color: ${Theme.colors.primaryBg};
    position: relative;
    z-index: 1000;

`
const StyledMenuBlock = styled.div<{ isOpen: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 772px;

    @media ${Theme.media.tablet} {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 250px;
        background-color: ${Theme.colors.primaryBg};
        opacity: 0.9;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            display: flex;
        `}

    }

`
const CloseButton = styled.button<{ isOpen: boolean }>`
    display: block;
    background: none;
    border: none;
    z-index: 1001;
    position: fixed;
    top: 48px;
    right: 22px;

    @media ${Theme.media.tablet} {
        display: block;

        span {
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                background-color: rgba(255, 255, 255, 0);
            `}
            &::before {
                content: '';
                display: block;
                width: 36px;
                height: 2px;
                background-color: ${Theme.colors.font};
                position: absolute;
                top: -10px;

                ${props => props.isOpen && css<{ isOpen: boolean }>`
                    transform: rotate(-45deg);
                    top: 0;
                `}
            }

            &::after {
                content: '';
                display: block;
                width: 36px;
                height: 2px;
                background-color: ${Theme.colors.font};
                position: absolute;
                top: 10px;

                ${props => props.isOpen && css<{ isOpen: boolean }>`
                    transform: rotate(45deg);
                    top: 0;
                `}
            }
        }

    }

`
