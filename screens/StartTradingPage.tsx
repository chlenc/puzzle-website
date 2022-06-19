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
  background: #363870;
  border-radius: 24px;
  overflow: hidden;
  padding: 56px 16px;
  width: 100%;
  margin-top: 48px;
  @media (min-width: 768px) {
    margin-top: 88px;
    padding: 48px 0;
  }
  @media (min-width: 1440px) {
    padding: 80px 0;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 16px;
  max-width: 460px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
  }
`;

const SubTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #c6c9f4;
  width: fit-content;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    max-width: 350px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  padding: 0;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 24px;
    width: fit-content;
  }
`;
const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: white;
  border: 1px solid #7075e9;
  &:hover {
    background: transparent;
    color: white;
    border: 1px solid #7075e9;
  }
`;

const StartTradingPage = () => {
  return (
    <Layout>
      <Root>
        <Title>Start trading on Puzzle Swap now!</Title>
        <SubTitle>
          Launch the web application or create a Waves wallet if you don’t own
          one
        </SubTitle>
        <SizedBox height={32} />
        <Row justifyContent="center">
          <Link href="https://puzzleswap.org/">
            <PrimaryButton>Launch app</PrimaryButton>
          </Link>
          <SizedBox width={12} />
          <Link href="https://waves.exchange/sign-up/">
            <SecondaryButton>Create a wallet</SecondaryButton>
          </Link>
        </Row>
      </Root>
    </Layout>
  );
};
export default StartTradingPage;
