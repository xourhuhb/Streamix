import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "Cricket",
    "Football",
    "Hockey",
    "Tennis",
    "Wrestling",
    "Boxing",
    "Badminton",
  ];
  return (
    <div className="flex ">
      {buttonList.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
