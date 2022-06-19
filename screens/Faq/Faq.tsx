import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { Column } from "../../components/Flex";
import Button from "../../components/Button";
import Accordion from "./Accordion";

const Root = styled(Column)`
  margin-top: 56px;
  width: 100%;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-top: 96px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #363870;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #8082c5;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const TitleContainer = styled(Column)`
  flex: 1;
  width: 100%;
  align-items: center;
  @media (min-width: 1440px) {
    margin-right: 140px;
    box-sizing: border-box;
    align-items: flex-start;
    max-width: 300px;
  }
`;

const items = [
  {
    title: "What is Waves Protocol?",
    value:
      "Waves Tech is a global open-source platform for decentralized applications. Based on proof-of-stake consensus, Waves aspires to make the most of blockchain, with minimal carbon footprint.",
  },

  {
    title: "How can I use the PUZZLE token?",
    value:
      "- staking (15% APY in USDN)\n" +
      "- to buy artefacts\n" +
      "- to provide liquidity to Сustom Pools\n" +
      "- to buy & sell NFTs on Puzzle NFT Market (puzzlemarket.org)",
  },
  {
    title: "How to create a wallet?",
    value:
      "To create a wallet, you need to go on Bitcoin Exchange | Cryptocurrency Exchange | Trading Platform | Waves and to register an account using email, seed, Ledger or Keeper Wallet.",
  },
  {
    title: "What if I found a bug?",
    value:
      "If you encounter errors while using Puzzle Swap, you can always report a bug through this form or share them in our telegram chat by attaching a screenshot of the error.",
  },
  {
    title: "How do ultra staking members get their rewards?",
    value:
      "The commissions collected by the aggregator (protocol fees) are converted into USDN and distributed among ultra staking participants — those who blocked PUZZLE tokens and one of the NFT artefacts in a smart contract.",
  },
];

const Faq = () => {
  return (
    <Layout>
      <Root>
        <TitleContainer>
          <Title>FAQ</Title>
          <SubTitle>Get answers on the most asked questions</SubTitle>
        </TitleContainer>
        <Column crossAxisSize="max" style={{ flex: 2 }}>
          {items.map((item, i) => (
            <Accordion {...item} key={i} />
          ))}
        </Column>
      </Root>
    </Layout>
  );
};
export default Faq;
