import { createMedia } from "@artsy/fresnel";

const MediaScreen = createMedia({
  breakpoints: {
    sm: 0,
    lg: 768,
  },
});

export const mediaStyle = MediaScreen.createMediaStyle();
export const { Media, MediaContextProvider } = MediaScreen;
