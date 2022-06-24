export const Button = ({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className: string;
}) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
