import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, IconName } from '../UI/Icon/Icon';
import styles from './button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  icon?: IconName;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  icon,
  loading = false,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const classList = [
    styles.button,
    styles[variant],
    loading && styles[`loading-${variant}`],
    isDisabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classList}
      disabled={isDisabled}
      aria-busy={loading}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      {...props}
    >
      {loading ? (
        <Icon name='loading' size={24} className={styles.icon} />
      ) : (
        <>
          {icon && <Icon name={icon} size={24} className={styles.icon} />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
