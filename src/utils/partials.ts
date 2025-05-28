export const options = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window" as const,
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 120,
      enable: true,
      opacity: 0.1, // linha quase transparente
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: "out" as const, // note o plural aqui
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 30, // menos partículas, menos agitação
    },
    opacity: {
      value: 0.15, // partículas bem transparentes
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2, // partículas menores
    },
  },
  detectRetina: true,
};
