"use client";
import { ShowMoreProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";
const ShowMore = ({ pageNumber, isText }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigate = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isText && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleNavigate}
        />
      )}
    </div>
  );
};
export default ShowMore;
