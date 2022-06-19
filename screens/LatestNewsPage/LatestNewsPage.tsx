import styled from "@emotion/styled";
import NewsItem from "./NewsItem";
import Layout from "../../components/Layout";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Row } from "../../components/Flex";
import SizedBox from "../../components/SizedBox";
import React, { HTMLAttributes, useContext, useEffect, useState } from "react";
import axios from "axios";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  .react-horizontal-scrolling-menu--wrapper {
    margin-right: -16px;
    width: calc(100% + 16px);
  }
  .react-horizontal-scrolling-menu--item {
    margin-right: 24px;
  }
  @media (min-width: 768px) {
    margin-top: 96px;
    .react-horizontal-scrolling-menu--wrapper {
      margin-right: 0;
      width: 100%;
    }
  }
  @media (min-width: 1440px) {
    .react-horizontal-scrolling-menu--item {
      margin-right: 40px;
    }
  }
`;

const TitleWrapper = styled(Row)`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #363870;
  //margin-bottom: 16px;
  @media (min-width: 768px) {
    //margin-bottom: 40px;
    font-size: 48px;
    line-height: 56px;
  }
`;

interface IArrowProps extends HTMLAttributes<HTMLDivElement> {}

const ArrowLeft: React.FC<IArrowProps> = (props) => (
  <Row
    {...props}
    alignItems="center"
    justifyContent="center"
    style={{
      width: 40,
      height: 40,
      border: "1px solid #F1F2FE",
      borderRadius: 10,
      cursor: "pointer",
      ...props.style,
    }}
  >
    <img src="/icons/arrowLeft.svg" alt="arrrow" />
  </Row>
);

type TNewsItem = {
  title: string;
  subtitle: string;
  picSrc: string;
  link: string;
};

// const news = [
//   {
//     title:
//       "Prospect of puzzle price growth correlated to total liquidity present…",
//     subtitle: "May 19 • 5 min read",
//     picSrc: "/images/news1.svg",
//   },
//   {
//     title: "Introducing Puzzle Users Motivation System",
//     subtitle: "May 12 • 3 min read",
//     picSrc: "/images/news2.svg",
//   },
//   {
//     title: "Puzzle Market is LIVE",
//     subtitle: "May 5 • 3 min read",
//     picSrc: "/images/news3.svg",
//   },
//   {
//     title: "Puzzle Alert Bot: How it works",
//     subtitle: "May 5 • 3 min read",
//     picSrc: "/images/news4.svg",
//   },
// ];

const mediumReq =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@puzzleswap";

const LatestNewsPage = () => {
  const [news, setNews] = useState<Array<TNewsItem>>([]);

  useEffect(() => {
    axios.get(mediumReq).then(({ data }) =>
      setNews(
        data.items.map(
          ({ title, pubDate: subtitle, thumbnail: picSrc, link }: any) => ({
            title,
            subtitle,
            picSrc,
            link,
          })
        )
      )
    );
  }, []);

  const apiRef = React.useRef({} as any);
  const scrollNext = () => {
    apiRef.current.scrollNext();
  };

  const scrollPrev = () => {
    apiRef.current.scrollPrev();
  };

  return (
    <Layout>
      <Root>
        <TitleWrapper justifyContent="space-between" alignItems="center">
          <Title>Latest news</Title>
          <Row mainAxisSize="fit-content">
            <ArrowLeft onClick={scrollPrev} />
            <SizedBox width={8} />
            <ArrowLeft
              onClick={scrollNext}
              style={{ transform: "rotate(180deg)" }}
            />
          </Row>
        </TitleWrapper>
        <ScrollMenu apiRef={apiRef}>
          {news?.map((item, i) => (
            <NewsItem {...item} key={i} itemId={i} />
          ))}
        </ScrollMenu>
      </Root>
    </Layout>
  );
};

export default LatestNewsPage;
