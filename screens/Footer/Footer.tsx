import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import { Column } from "../../components/Flex";
import LinkGroup from "./LinkGroup";
import SizedBox from "../../components/SizedBox";

const Root = styled.footer`
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  //align-items: center;
  background: #f1f2fe;
  border-radius: 24px;
  padding: 40px 16px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 40px;
    margin: 40px 0;
  }
  @media (min-width: 1440px) {
    padding: 96px 48px;
    flex-direction: row-reverse;
  }
`;

const LinksWrapper = styled(Column)`
  & > * {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    & > * {
      flex: 1;
      width: 100%;
      margin-bottom: 40px;
    }
  }
  //& > :last-of-type {
  //  margin-bottom: 0;
  //}
  @media (min-width: 1440px) {
    flex: 3;
    & > * {
      margin-bottom: 0;
    }
  }
`;

const linkGroups = [
  {
    title: "Products",
    links: [
      { label: "Trade", href: "https://app.puzzleswap.org/trade" },
      { label: "Invest", href: "https://app.puzzleswap.org/invest" },
      { label: "Staking", href: "https://app.puzzleswap.org/stake" },
      { label: "NFT Staking", href: "https://app.puzzleswap.org/ultrastake" },
      { label: "Puzzle Market", href: "https://puzzlemarket.org/" },
    ],
  },
  {
    title: "Watch on",
    links: [
      { label: "Defi Llama", href: "https://defillama.com/" },
      { label: "Wavescap", href: "https://wavescap.com/" },
      { label: "Waves Exchange", href: "https://waves.exchange/" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Telegram", href: "https://t.me/puzzleswap" },
      { label: "Twitter", href: "https://twitter.com/puzzle_swap" },
      { label: "Medium", href: "https://medium.com/@puzzleswap" },
    ],
  },
];

const Logo = styled.div`
  background-image: url("/head/logo.svg");
  background-repeat: no-repeat;
  height: 36px;
  width: 100%;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8082c5;
`;

const LogoWrapper = styled(Column)`
  @media (min-width: 1440px) {
    flex: 1;
  }
`;

const TradeDirectlyPage = () => {
  return (
    <Layout>
      <Root>
        <LinksWrapper>
          {linkGroups.map((group, i) => (
            <LinkGroup {...group} key={i} />
          ))}
        </LinksWrapper>
        <LogoWrapper crossAxisSize="max">
          <Logo />
          <SizedBox height={16} />
          <Text>Decentralized finance of a newer generation</Text>
          <SizedBox height={16} />
          <Text>® 2022 Puzzle Swap</Text>
        </LogoWrapper>
      </Root>
    </Layout>
  );
};
export default TradeDirectlyPage;
