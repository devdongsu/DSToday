import React from "react";

type mainProps = {
  text?: string;
};

const main: React.FC<mainProps> = ({ text = "" }) => {
  return <div>main</div>;
};

export default main;
