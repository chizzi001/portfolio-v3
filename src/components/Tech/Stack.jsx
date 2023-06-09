import React from "react";

const Stack = (props) => {
  return (
    <div className="flex w-24 sm:w-36 m-auto flex-row p-5 sm:m-2">
      <img
        src={props.src}
        alt={props.alt}
        className="w-24 h-24 flex flex-wrap shrink dark:grayscale-[40%] dark:invert"
      />
    </div>
  );
};

export default Stack;
