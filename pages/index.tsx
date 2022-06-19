import type { NextPage } from "next";
import Head from "next/head";
import Header from "../screens/Header";
import HomePage from "../screens/HomePage";
import styled from "@emotion/styled";
import TrustedLiquidityPage from "../screens/TrustedLiquidityPage";
import TradePopularTokensPage from "../screens/TradePopularTokensPage";
import TradingOpportunitiese from "../screens/TradingOpportunitiese";
import Features from "../screens/Features/Features";
import TradeDirectlyPage from "../screens/TradeDirectlyPage";
import Ecosystem from "../screens/Ecosystem";
import LatestNewsPage from "../screens/LatestNewsPage";
import Partners from "../screens/Partners";
import Community from "../screens/Community";
import Faq from "../screens/Faq";
import StartTradingPage from "../screens/StartTradingPage";
import Footer from "../screens/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <ParallaxProvider>
      <div>
        <Head>
          <title>Puzzle Swap</title>
          <meta
            name="description"
            content="Decentralized exchange of a newer generation"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Main>
          <HomePage />
          <TrustedLiquidityPage />
          <TradePopularTokensPage />
          <TradingOpportunitiese />
          <Features />
          <TradeDirectlyPage />
          <Ecosystem />
          <LatestNewsPage />
          <Partners />
          <Community />
          <Faq />
          <StartTradingPage />
          <Footer />
        </Main>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
