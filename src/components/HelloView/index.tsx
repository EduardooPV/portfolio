import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import welcome from "../../lotties/welcome.json";
import robot from "../../lotties/robot.json";

import { Container, Robot, Welcome } from "./styles";

export function HelloView() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("showAnimation")) {
      setShowAnimation(false);
    }

    return sessionStorage.setItem("showAnimation", false);
  }, []);

  const welcomeProps = {
    autoplay: true,
    animationData: welcome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const robotProps = {
    autoplay: true,
    animationData: robot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return showAnimation ? (
    <Container>
      <Robot>
        <Lottie options={robotProps} />
      </Robot>
      <Welcome>
        <Lottie options={welcomeProps} />
      </Welcome>
    </Container>
  ) : null;
}
