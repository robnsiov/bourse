import { usePathname } from "next/navigation";

const views = [
  {
    title: "در یک نگاه",
    href: "/general-information",
  },
  {
    title: "تولید و فروش",
    href: "/productions-sales",
  },
  {
    title: "سود و زیان",
    href: "/cost-benefit",
  },
  {
    title: "ترازنامه",
    href: "/balance-sheet",
  },
  {
    title: "نسبت های مالی",
    href: "/financial-ratio",
  },
  {
    title: "سهامداران عمده",
    href: "/major-share-holders",
  },
  {
    title: "تحلیل تکنیکال",
    href: "/technical-analysis-chart",
  },
  {
    title: "تاریخچه قیمت",
    href: "/price-history",
  },
];

const useLeftSidebar = () => {
  const pathname = usePathname();
  const startViewIndex = pathname.lastIndexOf("/");
  const pathnameWithoutView = pathname.slice(0, startViewIndex);
  const activeView = pathname.slice(startViewIndex);
  // report/symbol/1466325/general-information => report/symbol/1466325
  return { views, pathnameWithoutView, activeView };
};
export default useLeftSidebar;
