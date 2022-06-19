import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import { Column } from "../../components/Flex";
import EcosystemItem from "./EcosystemItem";
import Button from "../../components/Button";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";

const Root = styled(Column)`
  margin-top: 56px;
  width: 100%;
  align-items: center;
  margin-bottom: -600px;
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
  margin-bottom: 156px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 190px;
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
    button: (
      <Link href="https://puzzlemarket.org/">
        <Button>Go to market</Button>
      </Link>
    ),
    picSrc: "/images/puzzleMarket.svg",
    textColor: "#fff",
    bgColor: "#363870",
  },
  {
    title: "Puzzle World",
    subtitle:
      "A virtual metaverse where users can build, own, and monetize their pieces of land",
    button: <WorldButton>Comming soon</WorldButton>,
    picSrc: "/images/puzzleWorld.svg",
    textColor: "#363870",
    bgColor: "#F1F2FE",
  },
  {
    title: "Puzzle Analytics",
    subtitle: "A dashboard for tracking your portfolio across Waves services",
    button: <AnalyticsButton>Comming soon</AnalyticsButton>,
    picSrc: "/images/puzzleAnalytics.svg",
    textColor: "#fff",
    bgColor: "#7075E9",
  },
];

const Ecosystem = () => {
  const parallax0 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [0, -50],
  });
  const parallax1 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [0, -150],
  });
  const parallax2 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [-50, -250],
  });
  return (
    <Layout>
      <Root>
        <Title>Ecosystem</Title>
        <SubTitle>Learn more about our other services</SubTitle>
        <div ref={parallax0.ref}>
          <EcosystemItem {...items[0]} />
        </div>
        <div ref={parallax1.ref}>
          <EcosystemItem {...items[1]} />
        </div>
        <div ref={parallax2.ref}>
          <EcosystemItem {...items[2]} />
        </div>
      </Root>
    </Layout>
  );
};
export default Ecosystem;
