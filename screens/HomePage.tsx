import styled from "@emotion/styled";
import { Row } from "../components/Flex";
import SizedBox from "../components/SizedBox";
import Button from "../components/Button";
import Link from "next/link";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  //min-height: 100vh;
  padding: 120px 16px 24px 16px;
  box-sizing: border-box;
  max-width: 1160px;
  width: 100%;
  .button-group {
    margin-top: 32px;
  }
  .mobilePicture {
    display: block;
    margin-top: 30px;
    max-width: 100%;
    width: 100%;
  }
  .desktopPicture {
    display: none;
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 768px) {
    align-items: center;
    padding: 200px 24px 40px 24px;
    .button-group {
      margin-top: 40px;
    }
    .mobilePicture {
      display: none;
    }
    .desktopPicture {
      display: block;
      margin-top: 88px;
    }
  }
  @media (min-width: 1440px) {
    padding: 200px 0 40px 0;
    .desktopPicture {
      margin-top: 56px;
    }
  }
`;

const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #363870;
  margin-bottom: 16px;
  max-width: 312px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 64px;
    line-height: 72px;
    max-width: 650px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
    line-height: 88px;
    max-width: 800px;
  }
`;

const Subtitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #8082c5;
  padding-bottom: 8px;
  .dark {
    color: #363870;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
`;

const HomePage = () => {
  return (
    <Root>
      <Title>Decentralized finance of a newer generation</Title>
      <Row mainAxisSize="fit-content">
        <Icon src="/head/liquidityIcon.svg" alt="liquidity" />
        <Subtitle style={{ paddingBottom: 0 }}>
          Make your crypto work and get
          <span className="dark"> up to 150% APY</span>
        </Subtitle>
      </Row>
      <SizedBox height={8} />
      <Row mainAxisSize="fit-content">
        <Icon src="/head/tradeIcon.svg" alt="trade" />
        <Subtitle>Trade tokens in multiple mega pools</Subtitle>
      </Row>
      <Row className="button-group" mainAxisSize="fit-content">
        <Link href="https://app.puzzleswap.org/invest">
          <Button>Invest</Button>
        </Link>
        <SizedBox width={8} />
        <Link href="https://app.puzzleswap.org/trade">
          <Button kind="secondary">Trade</Button>
        </Link>
      </Row>
      <img className="mobilePicture" src="/head/mobilePicture.svg" alt="pic" />
      <img
        className="desktopPicture"
        src="/head/desktopPicture.svg"
        alt="pic"
      />
    </Root>
  );
};

export default HomePage;
