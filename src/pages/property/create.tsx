import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LayoutMain } from "@/components/layout";
import { addNewProperty, getProperties } from "@/store/property.services";

const PropertyCreatePage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addNewProperty,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      await queryClient.prefetchQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
      });
    },
  });
  const handleCreateNewProperty = () => {
    mutation.mutate();
  };
  return (
    <LayoutMain>
      <button
        onClick={handleCreateNewProperty}
        className="flex items-center justify-center px-5 py-3 text-white bg-primary text-sm font-medium rounded-[10px] leading-normal"
      >
        Add new property
      </button>
    </LayoutMain>
  );
};

export default PropertyCreatePage;
