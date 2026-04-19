import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 m-2 py-1 px-3 rounded-md ">{name}</button>
    </div>
  );
};

export default Button;
