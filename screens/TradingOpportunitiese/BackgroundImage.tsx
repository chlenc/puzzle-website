import { useParallax } from "react-scroll-parallax";
import styled from "@emotion/styled";

const Root = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 249px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  @media (min-width: 768px) {
    top: 280px;
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Sphere = styled.div`
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const DotSpinner = styled(Sphere)`
  width: 140px;
  height: 140px;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  border: 4px solid rgba(255, 255, 255, 0.24);

  .dot {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    bottom: -6px;
  }
`;

const TokensSpinner = styled(Sphere)`
  width: 306px;
  height: 306px;
  @media (min-width: 768px) {
    width: 440px;
    height: 440px;
  }
  border: 4px solid rgba(255, 255, 255, 0.12);

  .token1,
  .token2,
  .token3 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .token1 {
    top: -20px;
  }
  .token2 {
    right: 20px;
    bottom: 20px;
  }
  .token3 {
    left: 20px;
    bottom: 20px;
  }
  @media (min-width: 768px) {
    .token2,
    .token3 {
      bottom: 60px;
    }
  }
`;

const SphereInside = styled(Sphere)`
  width: 473px;
  height: 473px;
  @media (min-width: 768px) {
    width: 680px;
    height: 680px;
  }
  border: 4px solid rgba(255, 255, 255, 0.06);
`;
const SphereOutside = styled(Sphere)`
  width: 640px;
  height: 640px;
  @media (min-width: 768px) {
    width: 920px;
    height: 920px;
  }
  border: 4px solid rgba(255, 255, 255, 0.03);
`;

const BTCSellPic = styled.img`
  width: 240px;
  @media (min-width: 768px) {
    width: 360px;
  }
`;

const BackgroundImage = () => {
  const tokensParallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  const dotParallax = useParallax<HTMLDivElement>({
    rotate: [360, 0],
  });
  return (
    <Root>
      <SpinnerWrapper>
        <TokensSpinner ref={tokensParallax.ref}>
          <img className="token1" src="/tokens/SWOP.svg" />
          <img className="token2" src="/tokens/WX.svg" />
          <img className="token3" src="/tokens/puzzle.svg" />
        </TokensSpinner>
      </SpinnerWrapper>
      <SpinnerWrapper>
        <DotSpinner ref={dotParallax.ref}>
          <div className="dot" />
        </DotSpinner>
      </SpinnerWrapper>
      <SpinnerWrapper>
        <SphereInside />
      </SpinnerWrapper>
      <SpinnerWrapper>
        <SphereOutside />
      </SpinnerWrapper>
      <SpinnerWrapper>
        <BTCSellPic src="/images/btcSell.png" />
      </SpinnerWrapper>
    </Root>
  );
};

export default BackgroundImage;
