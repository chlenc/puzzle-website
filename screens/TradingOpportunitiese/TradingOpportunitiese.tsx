import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import BackgroundImage from "./BackgroundImage";

const Root = styled.div`
  background: #363870;
  border-radius: 24px;
  margin-top: 56px;
  padding: 56px 16px 0 16px;
  width: 100%;
  height: 680px;
  position: relative;
  overflow: hidden;
  @media (min-width: 600px) {
    //background-size: cover;
  }
  @media (min-width: 768px) {
    margin-top: 96px;
    padding: 96px 40px 0 40px;
    border-radius: 32px;
    height: 840px;
  }
`;

const Title = styled.div`
  z-index: 1;
  position: relative;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 56px;
  }
  @media (min-width: 1440px) {
  }
`;

const Subtitle = styled.div`
  z-index: 1;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #c6c9f4;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (min-width: 1440px) {
  }
`;

const TradingOpportunitiese = () => {
  return (
    <Layout>
      <Root>
        <BackgroundImage />
        <Title>
          Make the most of
          <br /> all trading opportunitiese
        </Title>
        <Subtitle>
          Puzzle Swap aggregates all the offers from various trading platforms:
          <br />
          Puzzle Swap, Swop.fi, and Waves.Exchange liquidity pools
        </Subtitle>
      </Root>
    </Layout>
  );
};

export default TradingOpportunitiese;
