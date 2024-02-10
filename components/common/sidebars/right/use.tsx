import { usePathname } from "next/navigation";
import homeIcon from "../../../../public/icons/home.svg";

const links = [
  {
    title: "خانه",
    href: "/",
    icon: homeIcon,
  },
  {
    title: "گزارش لحظه ای بازار",
    href: "/reports",
    icon: homeIcon,
  },
];

const useRightSidebar = () => {
  const pathname = usePathname();
  return { links, pathname };
};
export default useRightSidebar;
