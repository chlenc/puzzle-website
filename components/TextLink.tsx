import styled from "@emotion/styled";
import React from "react";

const Root = styled.a`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #7075e9;
`;

interface IProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const TextLink: React.FC<IProps> = ({ children, ...rest }) => (
  <Root rel="noopener noreferer" target="_blank" {...rest}>
    {children}
  </Root>
);

export default TextLink;
