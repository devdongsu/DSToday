import React from "react";
import Header from "./Header";

type indexProps = {
  text?: string;
};

const index: React.FC<indexProps> = ({ text = "" }) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default index;
