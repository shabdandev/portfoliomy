import { BiNetworkChart } from "react-icons/bi";
import { FaHome, FaMeetup } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const scrollOptions = {
  spy: true,
  smooth: true,
  offset: -100,
  duration: 300,
};

export const links = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome />,
    to: "home",
    spy: scrollOptions.spy,
    smooth: scrollOptions.smooth,
    offset: scrollOptions.offset,
    duration: scrollOptions.duration,
  },
  {
    name: "About",
    href: "/about",
    icon: <FaMeetup />,
    to: "about",
    spy: scrollOptions.spy,
    smooth: scrollOptions.smooth,
    offset: scrollOptions.offset,
    duration: scrollOptions.duration,
  },
  {
    name: "Work",
    href: "/work",
    icon: <BiNetworkChart />,
    to: "work",
    spy: scrollOptions.spy,
    smooth: scrollOptions.smooth,
    offset: scrollOptions.offset,
    duration: scrollOptions.duration,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <TiContacts />,
    to: "contact",
    spy: scrollOptions.spy,
    smooth: scrollOptions.smooth,
    offset: scrollOptions.offset,
    duration: scrollOptions.duration,
  },
];
