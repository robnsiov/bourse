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
      <div className="flex justify-start items-start flex-col">
        {links.map(({ href, name }) => (
          <Link className="mb-4 last:mb-0 text-[18px]" href={href}>
            {name}
          </Link>
        ))}
      </div>
      <div className="text-center flex justify-center items-center flex-col">
        <h2 className="mb-4 text-[21px] font-medium">تماس با ما</h2>
        <Link className="mb-4 last:mb-0" href={"tel:09121111315"}>
          09121111315
        </Link>
        <Link className="mb-4 last:mb-0" href={"tel:09198531741"}>
          09198531741
        </Link>
      </div>
      <div className="flex justify-start items-start flex-col">
        <Socials />
      </div>
    </>
  );
};
export default Links;
