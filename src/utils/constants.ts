import { Routes } from "./Routes";

// https://www.pexels.com/api/new/
export const PEXELS_API_KEY =
  "NgfguSRyjLQ4YuBBs4wDQD20NAgVm8LJvoTVqGAzHs87rfcdzE9FtLyt";

export const navItemsList = [
  {
    id: 1,
    name: "phone_call",
    title: "Phone Waves",
    lightImage: require("../assets/phone_call_light.png"),
    darkImage: require("../assets/phone_call_dark.png"),
    route: Routes.PHONE_RING,
  },
  {
    id: 2,
    name: "pin_code",
    title: "Pin Code",
    lightImage: require("../assets/dial_pad_light.png"),
    darkImage: require("../assets/dial_pad_dark.png"),
    route: Routes.PIN_CODE,
  },
  {
    id: 3,
    name: "scroll_to_index",
    title: "Scroll to Index",
    lightImage: require("../assets/scroll_lr_light.png"),
    darkImage: require("../assets/scroll_lr_dark.png"),
    route: Routes.SCROLL_TO_INDEX,
  },
  {
    id: 4,
    name: "glow_loader",
    title: "Glow Loader",
    lightImage: require("../assets/loading_light.png"),
    darkImage: require("../assets/loading_dark.png"),
    route: Routes.GLOW_LOADER,
  },
  {
    id: 5,
    name: "nature_gallery",
    title: "Nature Gallery",
    lightImage: require("../assets/gallery_light.png"),
    darkImage: require("../assets/gallery_dark.png"),
    route: Routes.NATURE_GALLERY,
  },
];
