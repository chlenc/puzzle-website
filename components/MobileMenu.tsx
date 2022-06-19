import styled from "@emotion/styled";
import SizedBox from "./SizedBox";
import LinkGroup, { TLink } from "../screens/Footer/LinkGroup";
import { Column } from "./Flex";
import Button from "./Button";
import SmoothCollapse from "react-smooth-collapse";
import React from "react";
import Link from "next/link";

interface IProps {
  links: Array<TLink>;
  onClose: () => void;
  opened: boolean;
}

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f2fe;
`;

const Root = styled(SmoothCollapse)`
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s;
  overflow: hidden;

  .menu-body {
    display: flex;
    flex-direction: column;
    background: #fff;
  }
`;
//
// const Root = styled.div<{ opened: boolean }>`
//   z-index: 100;
//   background: rgba(0, 0, 0, 0.4);
//   position: fixed;
//   top: 64px;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   transition: 0.2s;
//   overflow: hidden;
//
//   ${({ opened }) => (!opened ? `height: 0px;` : "")}
//   .menu-body {
//     display: flex;
//     flex-direction: column;
//     background: #fff;
//   }
// `;

const WalletWrapper = styled.div`
  padding: 16px;
  box-sizing: border-box;
  border-top: 1px solid #f1f2fe;
`;

const Body = styled(Column)`
  height: 50vh;
  padding: 16px;
  box-sizing: border-box;
`;

const MobileMenu: React.FC<IProps> = ({ links, opened }) => {
  return (
    <Root expanded={opened}>
      <div className="menu-body">
        <Divider />
        <Body crossAxisSize="max">
          <SizedBox height={24} width={1} />
          <LinkGroup title="" links={links} />
          <SizedBox height={24} width={1} />
        </Body>
        <WalletWrapper>
          <Link href="https://puzzleswap.org">
            <Button fixed>Connect wallet</Button>
          </Link>
        </WalletWrapper>
      </div>
    </Root>
  );
};
export default MobileMenu;
