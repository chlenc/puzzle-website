import { Column } from "../../components/Flex";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import FeatureItem from "./FeatureItem";
import { useCallback, useMemo } from "react";
import featureItem from "./FeatureItem";

const Root = styled(Column)`
  margin-top: 56px;
  max-width: 100%;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 96px;
  }
`;

const Features = () => {
  const features = [
    {
      title: (
        <>
          Invest in PUZZLE and earn <b>up to 15% APY</b>
        </>
      ),
      subtitle:
        "Buy PUZZLE token for your Tether or Neutrino USD and stake it to get rewards",
      imageSrc: "/images/puzzleTokens.svg",
      buttonTitle: "Buy PUZZLE",
      onClick: () =>
        window.open(
          "https://app.puzzleswap.org/trade?asset0=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&asset1=HEB8Qaw9xrWpWs8tHsiATYGBWDBtP2S7kcPALrMu43AS"
        ),
    },
    {
      title: "Provide your liquidity",
      subtitle:
        "Select a pool and invest your liquidity to it to collect and claim fees from user’s transactions",
      imageSrc: "/images/liquidityTokens.svg",
      buttonTitle: "Invest",
      onClick: () => window.open("https://app.puzzleswap.org/invest"),
    },
    {
      title: "Create your own liquidity pool and collect fees",
      subtitle:
        "Step-by-step process of creating a pool allows you to make it with any name, icon, and domain",
      imageSrc: "/images/createPool.svg",
      buttonTitle: "Create a pool",
      onClick: () => window.open("https://app.puzzleswap.org/pools/create"),
    },
    {
      title: "Stake a special NFT",
      subtitle:
        "Buy a Puzzle NFT and stake it to share the rewards pool from Puzzle aggregator fees",
      imageSrc: "/images/nftStaking.svg",
      buttonTitle: "Go to NFT Staking",
      onClick: () => window.open("https://app.puzzleswap.org/ultrastake"),
    },
  ];

  return (
    <Layout>
      <Root>
        {features.map((feature, i) => (
          <FeatureItem {...feature} key={i} />
        ))}
      </Root>
    </Layout>
  );
};

export default Features;
