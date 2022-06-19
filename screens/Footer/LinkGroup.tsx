import { Column } from "../../components/Flex";
import styled from "@emotion/styled";
import React from "react";
import TextLink from "../../components/TextLink";

export type TLink = {
  label: string;
  href: string;
};

interface IProps {
  title: string;
  links: Array<TLink>;
}

const Root = styled(Column)``;

const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8082c5;
  margin-bottom: 8px;
`;

const LinksWrapper = styled(Column)`
  & > * {
    margin-bottom: 8px;
  }
  & > :last-of-type {
    margin-bottom: 0;
  }
`;

const LinkGroup: React.FC<IProps> = ({ title, links }) => (
  <Root>
    <Title>{title}</Title>
    <LinksWrapper>
      {links.map(({ label, href }, i) => (
        <TextLink href={href} key={i}>
          {label}
        </TextLink>
      ))}
    </LinksWrapper>
  </Root>
);
export default LinkGroup;
