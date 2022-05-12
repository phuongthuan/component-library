import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{ background: 'gold', padding: 8 }}>{props.label}</button>;
};

export default Button;
