import styled from "@emotion/styled";
import { Column, Row } from "../components/Flex";
import Layout from "../components/Layout";

const Root = styled.div`
  background: #f1f2fe;
  border-radius: 24px;
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    border-radius: 32px;
    padding: 32px 40px;
  }
  @media (min-width: 1440px) {
    padding: 40px;
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #363870;
  margin-bottom: 16px;
  b {
    font-weight: 500;
    color: #7075e9;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8082c5;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
const Value = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #363870;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Divider = styled.div`
  height: 48px;
  width: 1px;
  margin: 0 16px;
  background: #c6c9f4;
`;

const TrustedLiquidityPage = () => {
  return (
    <Layout>
      <Root>
        <Title>
          Trusted with <br />
          <b>$ 6,000,000</b> of liquidity
        </Title>
        <Row>
          <Column style={{ flex: 1 }}>
            <Label>7d Trade volume</Label>
            <Value>$ 4.2M</Value>
          </Column>
          <Divider />
          <Column style={{ flex: 1 }}>
            <Label>Fees earned</Label>
            <Value>$ 768.4K</Value>
          </Column>
        </Row>
      </Root>
    </Layout>
  );
};

export default TrustedLiquidityPage;
