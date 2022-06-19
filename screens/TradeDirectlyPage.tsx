import styled from "@emotion/styled";
import { Column, Row } from "../components/Flex";
import Layout from "../components/Layout";
import SizedBox from "../components/SizedBox";
import Button from "../components/Button";
import Link from "next/link";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #7075e9;
  border-radius: 24px;
  overflow: hidden;
  padding: 56px 16px 0 16px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 40px 40px 0 40px;
  }
  @media (min-width: 1440px) {
    padding: 0 48px;
    flex-direction: row;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 16px;
  max-width: 460px;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 48px;
    line-height: 56px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const SubTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  position: relative;
  padding-left: 32px;
  width: fit-content;
  :before {
    position: absolute;
    content: "";
    background: url("/icons/check.svg");
    width: 24px;
    height: 24px;
    left: 0;
  }
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const PrimaryButton = styled(Button)`
  padding: 0;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 24px;
    width: fit-content;
  }
  background: white;
  color: #7075e9;
  border: 1px solid white;
  &:hover {
    background: white;
    color: #7075e9;
    border: 1px solid white;
  }
`;
const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: white;
  border: 1px solid white;
  &:hover {
    background: transparent;
    color: white;
    border: 1px solid white;
  }
`;

const Pic = styled.img`
  margin-top: 56px;
  @media (min-width: 768px) {
    max-width: 480px;
  }
`;

const Body = styled(Column)`
  flex: 1;
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

const PicWrapper = styled(Row)`
  flex: 1;
  justify-content: center;
`;

const ButtonGroup = styled(Row)`
  justify-content: center;
  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

const TradeDirectlyPage = () => {
  return (
    <Layout>
      <Root>
        <Body>
          <Title>Trade directly from your Waves wallet</Title>
          <SubTitle>No registration required</SubTitle>
          <SubTitle>Only you have access to your funds</SubTitle>
          <SubTitle>You can use your crypto with any Waves dApp</SubTitle>
          <SizedBox height={32} />
          <ButtonGroup>
            <Link href="https://waves.exchange/sign-up/">
              <PrimaryButton>Create a wallet</PrimaryButton>
            </Link>
            <SizedBox width={12} />
            <Link href="https://puzzleswap.org/trade">
              <SecondaryButton>Start trading</SecondaryButton>
            </Link>
          </ButtonGroup>
        </Body>
        <PicWrapper>
          <Pic src="/images/tradeDirectly.svg" />
        </PicWrapper>
      </Root>
    </Layout>
  );
};
export default TradeDirectlyPage;
