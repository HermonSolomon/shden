import React, { useState } from "react";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export const Size = ({ setFormData }: Props) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const sizes = ["sm", "md", "xl", "2xl", "3xl", "4xl"];

  const handleSelectSize = (size: string) => {
    setSelectedSizes((prevSelectedSize) => {
      if (prevSelectedSize.includes(size)) {
        return prevSelectedSize.filter((item) => item !== size);
      } else {
        return [...prevSelectedSize, size];
      }
    });
  };

  const handleSubmit = () => {
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      size: selectedSizes.join(","),
    }));
  };
  return (
    <div>
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5 
                ${
                  selectedSizes.includes(size) ? "bg-gray-500 text-white" : ""
                }`}
          onClick={() => handleSelectSize(size)}
        >
          {size}
        </button>
      ))}
      <button onClick={handleSubmit}>Add Sizes</button>
    </div>
  );
};
