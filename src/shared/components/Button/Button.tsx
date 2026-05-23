import "./_button.scss";

interface Props {
  text: string;
  className?: string;
}

export const Button = ({ text, className }: Props) => {
  return <button className={`button ${className}`}>{text}</button>;
};
