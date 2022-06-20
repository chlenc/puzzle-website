import styled from "@emotion/styled";
import React from "react";
import { Row } from "../components/Flex";
import SizedBox from "../components/SizedBox";
import Text from "../components/Text";
import Header from "./Header";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
const Img = styled.img`
  max-width: 240px;
  height: auto;
  padding-bottom: 44px;
`;
const paths = [
  { title: "Go home", link: "/" },
  { title: "Trade", link: "https://app.puzzleswap.org/trade" },
  { title: "Invest", link: "https://app.puzzleswap.org/invest" },
  { title: "Stake", link: "https://app.puzzleswap.org/stake" },
];
const Path = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #7075e9;

  margin-left: 32px;

  &:first-of-type {
    margin-left: 0;
  }
`;
const NotFound: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
      <Img src="/images/404.svg" alt="noPage" />
      <Text fitContent size="large">
        There is no such page
      </Text>
      <Text fitContent type="secondary" size="medium">
        But there are many other useful pages
      </Text>
      <SizedBox height={32} />
      <Row justifyContent="center" className="nav-links">
        {paths.map((i, index) => (
          <Path href={i.link} key={index}>
            {i.title}
          </Path>
        ))}
      </Row>
    </Root>
  );
};
export default NotFound;
