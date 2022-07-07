import styled from "@emotion/styled";
import { Column, Row } from "../../components/Flex";
import React, { HTMLAttributes } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  subtitle: string;
  button: JSX.Element;
  picSrc: string;
  textColor: string;
  bgColor: string;
}

const Root = styled(Column)`
  position: relative;
  width: 100%;
  padding: 40px 16px 0 16px;
  background: #363870;
  border-radius: 24px;
  margin-bottom: 16px;
  overflow: hidden;
  height: 400px;
  @media (min-width: 768px) {
    border-radius: 32px;
    margin-bottom: 40px;
    flex-direction: row;
    padding: 0;
    height: 320px;
    //padding: 40px 0 0 40px;
  }
  @media (min-width: 1440px) {
    //padding: 48px 0 0 48px;
    height: 360px;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 40px;
  }
`;

const SubTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 44px;
  }
`;

const Pic = styled.img`
  max-width: 100%;
  flex: 1;
`;

const PicWrapper = styled(Row)`
  justify-content: center;
  flex: 1;
  height: 400px;
  @media (min-width: 768px) {
    height: 320px;
    align-items: center;
    justify-content: flex-end;
    max-width: 50%;
  }
  @media (min-width: 1440px) {
    height: 360px;
  }
`;

const Body = styled(Column)`
  flex: 1;
  @media (min-width: 768px) {
    padding: 40px 0 40px 40px;
    max-width: 50%;
  }
  @media (min-width: 1440px) {
    padding: 48px 0 48px 48px;
    flex: 2;
  }
`;

const SmallBtnWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const BtnWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    bottom: 40px;
    left: 40px;
  }
  @media (min-width: 1440px) {
    bottom: 48px;
    left: 48px;
  }
`;

const EcosystemItem: React.FC<IProps> = ({
  bgColor,
  textColor,
  button,
  title,
  subtitle,
  style,
  picSrc,
  ...rest
}) => {
  return (
    <Root style={{ background: bgColor, ...style }} {...rest}>
      <Body>
        <Title style={{ color: textColor }}>{title}</Title>
        <SubTitle style={{ color: textColor }}>{subtitle}</SubTitle>
        <SmallBtnWrapper> {button}</SmallBtnWrapper>
      </Body>
      <PicWrapper>
        <Pic src={picSrc} />
      </PicWrapper>
      <BtnWrapper> {button}</BtnWrapper>
    </Root>
  );
};
export default EcosystemItem;
