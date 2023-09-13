import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants/general.const";
import { TSidebarLink } from "@/types/general.types";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="px-4 py-6 bg-grayFC">
      {sidebarLinks.map((link) => (
        <SidebarLinks
          key={link.title}
          link={link}
          isActive={pathname === link.path}
        ></SidebarLinks>
      ))}
    </div>
  );
};

interface ISidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}

function SidebarLinks({ link, isActive }: ISidebarLinkProps) {
  return (
    <Link
      href={link.path}
      className={`flex items-center px-6 py-4 text-base font-bold gap-c10 text-gray80 rounded-xl ${
        isActive ? "bg-primary text-grayFC" : "hover:text-primary"
      }`}
    >
      {link.icon}
      {link.title}
    </Link>
  );
}

export default Sidebar;
