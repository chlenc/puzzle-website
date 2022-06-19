import styled from "@emotion/styled";
import SmoothCollapse from "react-smooth-collapse";
import React, { useState } from "react";

interface IProps {
  title: string;
  value: string;
}

const Root = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f8f8ff;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 8px;
  &:hover {
    div:after {
      transform: rotate(${({ expanded }) => (expanded ? -180 : -90)}deg);
    }
  }
  div:after {
    transform: rotate(${({ expanded }) => (expanded ? -180 : 0)}deg);
  }
`;

const Title = styled.div<{ expanded: boolean }>`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #363870;
  padding-right: 40px;
  position: relative;
  transition: 0.4s;
  margin-bottom: ${({ expanded }) => (expanded ? 24 : 0)}px;
  :after {
    transition: 0.4s;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;

    width: 24px;
    background-image: url("/icons/down.svg");
    background-repeat: no-repeat;
    background-position: center;

    background-size: 24px;
  }
`;

const Body = styled(SmoothCollapse)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #363870;
`;

const Accordion: React.FC<IProps> = ({ title, value }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Root expanded={expanded} onClick={() => setExpanded(!expanded)}>
      <Title expanded={expanded}>{title}</Title>
      <Body expanded={expanded}>{value}</Body>
    </Root>
  );
};
export default Accordion;
