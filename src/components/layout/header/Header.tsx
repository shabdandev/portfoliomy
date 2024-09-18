"use client";
import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
// import IconLogo from "@/assets/icons/icon-logo";
import { links } from "@/constants/links";
import { useHeaderStore } from "@/stores/useHeaderStore";
import BurgerButton from "@/components/ui/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu";
import img from "../../../assets/images/5429187083232206665.jpg";
import Image from "next/image";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { fixScroll } = useHeaderStore();

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => {
      window.removeEventListener("resize", changeIsMobile);
    };
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <ScrollLink
                onClick={fixScroll}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                {/* <IconLogo /> */}
                <div className={scss.lego}>
                  <Image src={img} alt="shaba" />
                  <h3>Arslanbekov Shabdan</h3>
                </div>
              </ScrollLink>
            </div>
          </div>
          <div className={scss.right}>
            {!isMobile ? (
              <>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((item, index) => (
                      <li key={index}>
                        <ScrollLink
                          className={scss.link}
                          onClick={fixScroll}
                          activeClass={scss.active}
                          to={item.to}
                          spy={item.spy}
                          smooth={item.smooth}
                          offset={item.offset}
                          duration={item.duration}
                        >
                          {item.icon} {item.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className={scss.resume}>
                  <button>resume</button>
                </div>
              </>
            ) : (
              <>
                <BurgerButton />
                <BurgerMenu />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
