import React from "react";

type HeaderProps = {
  text?: string;
};

const Header: React.FC<HeaderProps> = ({ text = "" }) => {
  return <div>Header</div>;
};

export default Header;
