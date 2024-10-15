type variant = "primary" | "secondary" | "warning";
type buttonType = "submit" | "button";

type Props = {
  children: React.ReactNode;
  variant?: variant;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: buttonType;
};

function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
