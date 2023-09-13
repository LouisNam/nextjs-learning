import { LayoutMain } from "@/components/layout";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <LayoutMain>
      <div className="flex items-center justify-center">
        <SignUp />
      </div>
    </LayoutMain>
  );
}
