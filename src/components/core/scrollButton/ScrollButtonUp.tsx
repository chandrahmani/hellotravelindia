import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab, styled } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollButton = styled(Fab)({
  position: "fixed",
  bottom: 20,
  right: 20,
});

const ScrollButtonUp = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <ScrollButton color="primary" onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollButtonUp;
