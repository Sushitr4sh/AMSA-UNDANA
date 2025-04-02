import Image from "next/image";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-transparent fixed w-full z-50 top-0 px-16 py-8 flex justify-between">
      {/* <Image src="/amsa-logo.png" alt="AMSA logo" width={96} height={96} /> */}
      <div />
      <NavItems />
    </header>
  );
};

export default Navbar;
