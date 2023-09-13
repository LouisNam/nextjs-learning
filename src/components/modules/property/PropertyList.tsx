import React from "react";
import PropertyItem, { PropertyItemLoading } from "./PropertyItem";
import { useQuery } from "@tanstack/react-query";
import { IPropertyItemType } from "@/types/property.types";
import { getProperties } from "@/store/property.services";

const PropertyList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
    refetchOnWindowFocus: false,
    cacheTime: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
  });
  if (error || data?.length === 0) return null;
  return (
    <div className="p-5 bg-white rounded-2xl">
      <div aria-label="filter"></div>
      <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
        {isLoading &&
          Array(3)
            .fill(0)
            .map((item, index) => (
              <PropertyItemLoading key={index}></PropertyItemLoading>
            ))}
        {!isLoading &&
          data &&
          data.length > 0 &&
          data.map((item: IPropertyItemType) => (
            <PropertyItem item={item} key={item.id}></PropertyItem>
          ))}
      </div>
      <div
        aria-label="pagination"
        className="flex items-center justify-between"
      >
        <p className="text-gray80">Showing 1 to 10 Properties</p>
        <div className="flex items-center gap-[10px]">
          <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
            1
          </button>
          <button className="flex items-center justify-center rounded-lg w-9 text-gray80 h-9">
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
