"use client";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const CustomButton = (props: CustomButtonProps) => {
  const {
    title,
    containerStyles,
    handleClick,
    btnType,
    textStyles,
    rightIcon,
    isDisable,
  } = props;
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyles} custom-btn`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
