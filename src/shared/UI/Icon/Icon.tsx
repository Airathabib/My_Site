import * as Icons from './Icons/index';

export type IconName =
  | 'tags'
  | 'react'
  | 'arrowUp'
  | 'git'
  | 'mail'
  | 'telegram'
  | 'cardLink'
  | 'loading'
  | 'moon'
  | 'sun';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  color?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  color = 'currentColor',
  size = 24,
  className,
  ...props
}) => {
  const IconComponent =
    Icons[
      `${
        name.charAt(0).toUpperCase() + name.slice(1)
      }Icon` as keyof typeof Icons
    ];
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      fill={color}
      width={size}
      height={size}
      className={className}
      style={{ display: 'block', ...props.style }}
      {...props}
    />
  );
};
