import styled from "@emotion/styled";
import { Row } from "../components/Flex";
import Button from "../components/Button";
import TextLink from "../components/TextLink";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";
const Root = styled.div`
  height: 64px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 8px 56px rgba(54, 56, 112, 0.16);
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .logo {
    height: 32px;
    width: auto;
  }
  & .burger {
    cursor: pointer;
  }
  & .btn {
    display: none;
  }
  & .link {
    display: none;
  }
  @media (min-width: 768px) {
    height: 80px;
    padding: 22px 24px;
    & .logo {
      height: 36px;
      margin-right: 16px;
    }
    & .burger {
      display: none;
    }
    & .btn {
      display: flex;
    }
    & .link {
      display: flex;
    }
  }
  @media (min-width: 1440px) {
    height: 80px;
    padding: 22px 40px;
    & .logo {
      margin-right: 32px;
  }
`;

const links = [
  { href: "https://app.puzzleswap.org/explore", label: "Explore" },
  { href: "https://app.puzzleswap.org/trade", label: "Trade" },
  { href: "https://app.puzzleswap.org/invest", label: "Invest" },
  { href: "https://medium.com/@puzzleswap", label: "Blog" },
  { href: "https://puzzlemarket.org/", label: "NFT" },
];

const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMenu = (state: boolean) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.toggle("noscroll", state);
    setMobileMenuOpened(state);
  };
  return (
    <Root>
      <Row
        alignItems="center"
        justifyContent="space-between"
        style={{ maxWidth: 1160 }}
      >
        <Row alignItems="center">
          <img src="/head/logo.svg" alt="logo" className="logo" />
          {links.map(({ href, label }, i) => (
            <TextLink
              className="link"
              key={i}
              href={href}
              style={{ color: "#8082c5", marginLeft: 24 }}
            >
              {label}
            </TextLink>
          ))}
        </Row>
        <img
          onClick={() => toggleMenu(!mobileMenuOpened)}
          className="burger"
          src="/head/burgerIcon.svg"
          alt="burger"
        />
        <Link href="https://app.puzzleswap.org">
          <Button className="btn" size="medium">
            Launch app
          </Button>
        </Link>
      </Row>
      <MobileMenu
        opened={mobileMenuOpened}
        onClose={() => toggleMenu(false)}
        links={links}
      />
    </Root>
  );
};

export default Header;
