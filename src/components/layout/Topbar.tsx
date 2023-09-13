import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icons";
import { defaultAvatar } from "@/constants/global";

const Topbar = () => {
  return (
    <div className="bg-grayFC h-[70px] py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User defaultAvatar={defaultAvatar} />
    </div>
  );
};

function Logo({}) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image width={175} height={40} src="/logo-full.png" alt="Yariga" />
    </Link>
  );
}

function Search({}) {
  return (
    <div className="rounded-lg bg-grayF4 flex items-center gap-2 flex-[0_1_405px] h-[38px] px-[10px]">
      <IconSearch></IconSearch>
      <input
        type="text"
        placeholder="Search Property, Customer etc"
        className="w-full text-xs bg-transparent outline-none placeholder:text-gray80"
      />
    </div>
  );
}

function User({ defaultAvatar }: { defaultAvatar: string }) {
  return (
    <div className="flex items-center flex-shrink-0 gap-5">
      <span className="flex-shrink-0">
        <IconNotification></IconNotification>
      </span>
      <div className="flex items-center flex-shrink-0 gap-[10px]">
        <Image
          src={defaultAvatar}
          alt="avatar"
          width={40}
          height={40}
          className="object-cover w-10 h-10 rounded-full"
        ></Image>
        <div className="flex flex-col">
          <h4 className="font-semibold">Hawkins Maru</h4>
          <span className="text-gray80">Company Manager</span>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
