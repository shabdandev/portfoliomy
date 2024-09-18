import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerButton.module.scss";

const BurgerButton = () => {
  const { isOpen, setIsOpen } = useHeaderStore();
  console.log("🚀 ~ BurgerButton ~ isOpen:", isOpen);

  return (
    <div className={scss.BurgerButton} onClick={() => setIsOpen(!isOpen)}>
      <div className={scss.content}>
        toggle
        {/* <div
     className={
      isOpen
       ? `${scss.menu} ${scss.cross} ${scss.menu__2} ${scss.active}`
       : `${scss.menu} ${scss.cross} ${scss.menu__2}`
     }
    />
    <label>
     <input
      type="checkbox"
      checked={isOpen}
      onChange={() => setIsOpen(!isOpen)}
     />
     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" />
      <path className={scss.line__1} d="M0 70l28-28c2-2 2-2 7-2h64" />
      <path className={scss.line__2} d="M0 50h99" />
      <path className={scss.line__3} d="M0 30l28 28c2 2 2 2 7 2h64" />
     </svg>
    </label> */}
      </div>
    </div>
  );
};

export default BurgerButton;
