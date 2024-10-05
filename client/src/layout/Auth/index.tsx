import React from "react";
import './style.scss';

const Auth = ({ children }: { children: React.ReactNode }) => {
  return <div className="Auth">{children}</div>;
};

export default Auth;
