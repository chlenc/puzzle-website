import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1160px;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
  }
  width: 100%;
`;
export default Layout;
