import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { links } from "@/constants/links";

const BurgerMenu = () => {
  const { isOpen } = useHeaderStore();

  return (
    <div
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
