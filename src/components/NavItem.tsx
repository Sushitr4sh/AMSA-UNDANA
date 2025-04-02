import Link from "next/link";

const NavItem = ({ text }: { text: string }) => {
  return (
    <Link href={"#"} className="font-extralight text-lg text-white lowercase">
      <q>{text}</q>
    </Link>
  );
};

export default NavItem;
