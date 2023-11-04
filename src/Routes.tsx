import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

type RoutesProps = {
  text?: string;
};

const Routes: React.FC<RoutesProps> = ({ text = "" }) => {
  return <div>Routes</div>;
};

export default Routes;
