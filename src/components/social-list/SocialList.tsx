import styled from "styled-components";

export const SocialList = () => {
  return (
    <StyledSocialList>
      <li><a href="">Github</a></li>
      <li><a href="">Linkedin</a></li>
      <li><a href="">Telegram</a></li>
    </StyledSocialList>
  );
};

const StyledSocialList = styled.ul`
  display: flex;
    gap: 20px;
`