import React from "react";

type FooterProps = {
  text?: string;
};

const Footer: React.FC<FooterProps> = ({ text = "" }) => {
  return <div>Footer</div>;
};

export default Footer;
