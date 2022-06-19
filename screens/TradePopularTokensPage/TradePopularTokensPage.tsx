import styled from "@emotion/styled";
import { Row } from "../../components/Flex";
import PopularTokenRate from "./PopularTokenRate";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  @media (min-width: 768px) {
    margin-top: 96px;
  }
  @media (min-width: 1440px) {
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #363870;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 56px;
  }
`;

const TokensRow = styled(Row)`
  overflow-x: scroll;
  margin-right: -16px;
  width: calc(100% + 16px);
  @media (min-width: 768px) {
    justify-content: center;
    margin-right: 0;
    width: 100%;
  }
`;

const tokens = [
  {
    assetId: "HEB8Qaw9xrWpWs8tHsiATYGBWDBtP2S7kcPALrMu43AS",
    name: "Puzzle",
    image: "/tokens/puzzle.svg",
  },
  {
    assetId: "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
    name: "Bitcoin",
    image: "/tokens/bitcoin.svg",
  },
  {
    assetId: "474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu",
    name: "Ethereum",
    image: "/tokens/ethereum.svg",
  },
  {
    assetId: "5UYBPpq4WoU5n4MwpFkgJnW3Fq4B1u3ukpK33ik4QerR",
    name: "Binance Coin",
    image: "/tokens/BNB.svg",
  },
];

type TRate = {
  price?: number;
  change?: number;
  chart?: Array<[number, number]>;
};

const TradePopularTokensPage = () => {
  const [rates, setRates] = useState<Record<string, TRate>>({});
  useEffect(() => {
    Promise.all(
      tokens.map(({ assetId }) =>
        axios
          .get(`https://wavescap.com/api/chart/asset/${assetId}-usd-n-1w.json`)
          .then(({ data }) => data)
          .then(({ data }) => ({ data, assetId }))
      )
    ).then((values) => {
      const rates = values.reduce(
        (acc, { data: chart, assetId }) => ({
          ...acc,
          [assetId]: {
            chart,
            price: chart[chart.length - 1][0],
            change: (chart[chart.length - 1][0] / chart[0][0] - 1) * 100,
          },
        }),
        {} as Record<string, TRate>
      );
      setRates(rates);
    });
  }, []);
  return (
    <Layout>
      <Root>
        <Title>Trade popular tokens</Title>
        <TokensRow>
          {tokens.map((t) => {
            const rate = rates[t.assetId] ?? {};
            const params = { ...rate, ...t };
            return <PopularTokenRate {...params} key={t.assetId} />;
          })}
        </TokensRow>
      </Root>
    </Layout>
  );
};

export default TradePopularTokensPage;
