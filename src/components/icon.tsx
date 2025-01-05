export type IconName =
  | "moon"
  | "sun"
  | "computer"
  | "search"
  | "portfeil"
  | "profile";

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  return (
    <svg {...props}>
      <use href={`/icons/base.svg#${name}`} />
    </svg>
  );
};

export default Icon;
