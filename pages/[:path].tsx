import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NotFound from "../screens/NotFound";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`https://app.puzzleswap.org${window.location.pathname}`);
  });
  return <NotFound />;
};
export default RedirectPage;
