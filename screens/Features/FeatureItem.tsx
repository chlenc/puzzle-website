import styled from "@emotion/styled";
import Button from "../../components/Button";
import { Column, Row } from "../../components/Flex";
import { jsx } from "@emotion/react";
import JSX = jsx.JSX;
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

interface IProps {
  title: string | JSX.Element;
  subtitle: string;
  imageSrc: string;
  buttonTitle: string;
  onClick: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 108px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
`;

const ItemImage = styled(ParallaxBanner)`
  background-color: #f1f2fe;
  width: 100%;
  height: 234px;
  border-radius: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    height: 514px;
    margin-bottom: 40px;
    border-radius: 32px;
  }
  @media (min-width: 1440px) {
    flex: 1;
    max-width: 50%;
    height: 560px;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #363870;
  margin-bottom: 8px;
  b {
    font-weight: 500;
    color: #7075e9;
  }
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const SubTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8082c5;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;

const BodyContainer = styled(Row)`
  @media (min-width: 1440px) {
    flex: 1;
    justify-content: center;
  }
`;

const Body = styled(Column)`
  @media (min-width: 1440px) {
    justify-content: center;
    height: 560px;
    & > * {
      max-width: 360px;
    }
  }
`;

const FeatureItem: React.FC<IProps> = (props) => {
  return (
    <Root>
      <ItemImage layers={[{ image: props.imageSrc, speed: -5 }]} />
      <BodyContainer>
        <Body>
          <Title>{props.title}</Title>
          <SubTitle>{props.subtitle}</SubTitle>
          <Button onClick={props.onClick} size="medium">
            {props.buttonTitle}
          </Button>
        </Body>
      </BodyContainer>
    </Root>
  );
};
export default FeatureItem;
