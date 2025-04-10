import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "../../../assets/images/Rectangle 6.png"
import styled from "styled-components";

export const Main = () => {
  return (
    <div>
      <FlexWrapper justify={'space-around'}>
        <div>
          <h1>Lorem ipsum dolor amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
          <a href="">Let’s Begin</a>
        </div>

        <Photo src={photo} alt=""/>
      </FlexWrapper>
    </div>
  );
};

const Photo = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
`

