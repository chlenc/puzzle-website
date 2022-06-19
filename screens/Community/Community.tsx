import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import { Column } from "../../components/Flex";
import SocialButton from "./SocialButton";
import { ParallaxBanner } from "react-scroll-parallax";

const Root = styled.div`
  //background: #e5e5e5;
  border-radius: 24px;
  margin-top: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  //background-image: url("/images/community.svg");
  //background-repeat: no-repeat;
  //background-position: center;
  //background-size: cover;
  height: 480px;
  @media (min-width: 768px) {
    margin-top: 96px;
    border-radius: 32px;
    height: 588px;
  }
  @media (min-width: 1440px) {
    margin-top: 96px;
    padding: 96px 40px 0 40px;
    border-radius: 32px;
    height: 636px;
  }
`;

const Title = styled.div`
  z-index: 1;
  position: relative;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #363870;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 64px;
    line-height: 72px;
  }
`;

const Subtitle = styled.div`
  z-index: 1;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #8082c5;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
  }
`;

const ButtonGroup = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > :first-of-type {
    margin-bottom: 16px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    & > :first-of-type {
      margin-bottom: 0;
      margin-right: 24px;
    }
  }
`;

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const Bg = styled(ParallaxBanner)`
  width: 100%;
  height: 100%;
`;

const Community = () => {
  return (
    <Layout>
      <Root>
        <BgWrapper>
          <Bg
            layers={[
              { image: "/images/community.svg", speed: -15, scale: [1, 1.2] },
            ]}
          />
        </BgWrapper>
        <Title>Join our community</Title>
        <Subtitle>
          Learn more about Puzzle, chat with us
          <br /> and have your say in the future of the Puzzle ecosystem
        </Subtitle>
        <ButtonGroup>
          <SocialButton
            title="Telegram"
            subtitle="Chat with the community"
            icon="/icons/telegram.svg"
          />
          <SocialButton
            title="Twitter"
            subtitle="Explore the latest news"
            icon="/icons/twitter.svg"
          />
        </ButtonGroup>
      </Root>
    </Layout>
  );
};

export default Community;
