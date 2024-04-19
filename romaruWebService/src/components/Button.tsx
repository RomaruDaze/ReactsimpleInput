import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-danger" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
