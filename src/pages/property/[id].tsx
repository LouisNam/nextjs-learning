import React from "react";
import { LayoutMain } from "@/components/layout";
import PropertyDetails from "@/components/modules/property/PropertyDetails";

const PropertyDetailPage = (props: any) => {
  return (
    <LayoutMain>
      <PropertyDetails></PropertyDetails>
    </LayoutMain>
  );
};
// export async function getServerSideProps(context: any) {
//   if (!context.query.id) return { props: {} };
//   const id = +context.query.id;
//   const posts = await getProperty(id);
//   return {
//     props: {
//       posts: posts || {},
//     },
//   };
// }

export default PropertyDetailPage;
