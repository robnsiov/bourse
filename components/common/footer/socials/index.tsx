import Link from "next/link";
import telegramIcon from "../../../../public/icons/telegram.svg";
import linkedinIcon from "../../../../public/icons/linkedin.svg";
import instaIcon from "../../../../public/icons/instagram.svg";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[25%]">
      <Link href={"/"} className="mb-4">
        <Image width={24} src={telegramIcon} alt="telegramIcon" />
      </Link>
      <Link href={"/"} className="mb-4">
        <Image width={24} src={instaIcon} alt="instaIcon" />
      </Link>
      <Link href={"/"}>
        <Image width={24} src={linkedinIcon} alt="linkedinIcon" />
      </Link>
    </div>
  );
};
export default Socials;
