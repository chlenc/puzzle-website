import styled from "@emotion/styled";
import { Column } from "../../components/Flex";
import SizedBox from "../../components/SizedBox";
import Chart from "./RateChart";
import React from "react";

interface IProps {
  assetId: string;
  name: string;
  image: string;
  price?: number;
  change?: number;
  chart?: Array<[number, number]>;
}

const Root = styled.div`
  width: 161px;
  height: 240px;
  background: #ffffff;
  border: 1px solid #f1f2fe;
  border-radius: 16px;
  margin-right: 8px;

  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-right: 24px;
    flex: 1;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media (min-width: 1440px) {
    //width: 260px;
    height: 320px;
    margin-right: 40px;
  }
`;

const Body = styled(Column)`
  box-sizing: border-box;
  padding: 16px;
  @media (min-width: 1440px) {
    padding: 24px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #363870;
`;

const Subtitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #363870;
`;

const PopularTokenRate: React.FC<IProps> = ({
  chart,
  change,
  price,
  image,
  name,
}) => {
  const color = change && change > 0 ? "#35A15A" : "#ED827E";
  return (
    <Root>
      <Body>
        <img style={{ borderRadius: "50%" }} src={image} alt="puzzle" />
        <SizedBox height={16} />
        <Title>{name}</Title>
        {price && (
          <Subtitle>
            ${price.toFixed(2)}{" "}
            <Subtitle style={{ color }}>{change?.toFixed(2)}%</Subtitle>
          </Subtitle>
        )}
      </Body>
      <Chart data={chart} color={color} />
    </Root>
  );
};

export default PopularTokenRate;
