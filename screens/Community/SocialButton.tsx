import styled from "@emotion/styled";
import { Column, Row } from "../../components/Flex";
import React, { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  icon: string;
}

const Root = styled(Row)`
  cursor: pointer;
  padding: 16px;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  align-items: center;
  max-width: 269px;
  @media (min-width: 768px) {
    max-width: 308px;
  }
`;

const IconWrapper = styled(Row)`
  width: 48px;
  height: 48px;
  background: #f1f2fe;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #363870;
`;
const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8082c5;
`;

const SocialButton: React.FC<IProps> = ({ title, subtitle, icon, ...rest }) => (
  <Root {...rest}>
    <IconWrapper>
      <img src={icon} alt="social" />
    </IconWrapper>
    <Column justifyContent="space-between">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Column>
  </Root>
);

export default SocialButton;
