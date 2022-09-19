import React, { useState, useEffect } from "react";

import { Container, Bar } from "./styles";

export function ReadingProgressiveBar() {
  const [ , setScrollPosition] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const documentHeight = window.document.body.offsetHeight;

    const progress = (position * 100) / (documentHeight - window.innerHeight);

    setScrollPosition(position);
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Bar width={progress} />
    </Container>
  );
}
