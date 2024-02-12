import Link from "next/link";
import Socials from "../socials";

const Links = () => {
  const links = [
    { name: "بلاگ", href: "/" },
    { name: "قوانین", href: "/" },
    { name: "راهنما", href: "/" },
    { name: "آموزش", href: "/" },
  ];
  return (
    <>
      <div className="flex justify-start items-start flex-col w-[35%]">
        <div className="w-full flex justify-between items-center">
          {links.map(({ href, name }) => (
            <Link className="" key={name} href={href}>
              {name}
            </Link>
          ))}
        </div>
        <span className="mt-[40px] w-full text-center">
          © تمام حقوق برای شاخص محفوظ است.
        </span>
      </div>
    </>
  );
};
export default Links;
