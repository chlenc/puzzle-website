import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { Column } from "../../components/Flex";
import Button from "../../components/Button";
import Link from "next/link";

const Root = styled(Column)`
  margin-top: 56px;
  width: 100%;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 96px;
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
`;

const WorldButton = styled(Button)`
  background: white;
  color: #8082c5;
  border: 1px solid white;
  &:hover {
    background: white;
    color: #8082c5;
    border: 1px solid white;
  }
`;

const AnalyticsButton = styled(Button)`
  background: rgba(255, 255, 255, 0.24);
  color: #fff;
  border: none;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
    color: #fff;
    border: none;
  }
`;

const items = [
  {
    title: "Puzzle Market",
    subtitle:
      "A community-owned marketplace for trading, and creating NFT artworks, and game items",
    button: <Button>Go to market</Button>,
    picSrc: "/images/puzzleMarket.svg",
    textColor: "#fff",
    bgColor: "#363870",
  },
  {
    title: "Puzzle World",
    subtitle:
      "A virtual metaverse where users can build, own, and monetize their pieces of land",
    button: <WorldButton>Coming soon</WorldButton>,
    picSrc: "/images/puzzleWorld.svg",
    textColor: "#363870",
    bgColor: "#F1F2FE",
  },
  {
    title: "Puzzle Analytics",
    subtitle: "A dashboard for tracking your portfolio across Waves services",
    button: <AnalyticsButton>Coming soon</AnalyticsButton>,
    picSrc: "/images/puzzleAnalytics.svg",
    textColor: "#fff",
    bgColor: "#7075E9",
  },
];

const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 8px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 16px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Pic = styled.img`
  width: 160px;
  height: 104px;
  background: #ffffff;
  cursor: pointer;
`;

const Partners = () => {
  return (
    <Layout>
      <Root>
        <Title>Partners</Title>
        <SubTitle>Explore partners and integrations that help grow</SubTitle>
        <PartnersContainer>
          <Link href="https://vires.finance/">
            <Pic src="/partners/vires.svg" />
          </Link>
          <Link href="https://waves.exchange/">
            <Pic src="/partners/exchangr.svg" />
          </Link>
          <Link href="https://swop.fi/">
            <Pic src="/partners/swopfi.svg" />
          </Link>
          <Link href="https://waves.tech/">
            <Pic src="/partners/waves.svg" />
          </Link>
          <Link href="https://wavesducks.com/">
            <Pic src="/partners/ducks.svg" />
          </Link>
          <Link href="https://wavesassociation.org/">
            <Pic src="/partners/association.svg" />
          </Link>
        </PartnersContainer>
      </Root>
    </Layout>
  );
};
export default Partners;
