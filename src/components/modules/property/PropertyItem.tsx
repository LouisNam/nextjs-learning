import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IPropertyItemType } from "@/types/property.types";
import { IconBeds, IconCross, IconLocation } from "@/components/icons";
import { Skeleton } from "@/components/loading";

interface PropertyItemProps {
  item: IPropertyItemType;
}

const PropertyItem = ({ item }: PropertyItemProps) => {
  if (!item) return null;
  return (
    <Link
      href={{ pathname: "/property/[id]", query: { id: item.id } }}
      className="flex gap-2"
    >
      <Image
        src={
          item.image && item.image.length > 0
            ? item.image[0]
            : "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
        }
        alt="setup"
        width={200}
        height={150}
        className="object-cover rounded-xl"
        priority
      ></Image>
      <div className="flex flex-col justify-center flex-1">
        <span className="inline-block text-xs font-semibold text-primary py-2 px-[10px] rounded-[5px] bg-secondary mb-2">
          ${item.price}
        </span>
        <h3 className="mb-1 text-base font-semibold text-primaryText">
          {item.title}
        </h3>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation></IconLocation>
          <span>{item.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBeds></IconBeds>
            <span className="text-xs font-medium">
              {item.facility?.beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <span className="text-xs font-medium">{item.facility?.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export const PropertyItemLoading = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="w-[200px] h-[150px] rounded-xl"></Skeleton>
      <div className="flex-1">
        <Skeleton className="w-[50px] h-[30px] mb-2"></Skeleton>
        <Skeleton className="w-full h-3 mb-3"></Skeleton>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation></IconLocation>
          <Skeleton className="w-20 h-3"></Skeleton>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBeds></IconBeds>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
