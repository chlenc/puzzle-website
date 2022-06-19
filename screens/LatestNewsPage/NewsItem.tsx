import styled from "@emotion/styled";
import { Column } from "../../components/Flex";
import SizedBox from "../../components/SizedBox";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Link from "next/link";

interface IProps {
  itemId: string | number;
  title: string;
  subtitle: string;
  picSrc: string;
  link: string;
}

const Root = styled(Column)`
  width: 224px;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    width: 260px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #363870;
`;

const Subtitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8082c5;
`;

const Pic = styled.img`
  border: 1px solid #f1f2fe;
  border-radius: 8px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  @media (min-width: 1440px) {
    height: 160px;
  }
`;

const NewsItem: React.FC<IProps> = ({ title, subtitle, picSrc, link }) => {
  return (
    <Link href={link} target="_blank">
      <Root>
        <Pic src={picSrc} />
        <SizedBox height={16} />
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </Root>
    </Link>
  );
};

export default NewsItem;
