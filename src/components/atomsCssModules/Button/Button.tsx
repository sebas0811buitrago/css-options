import css from '../../../utilities/css';
import { SizeButton } from '../../_types/size';
import { VariantButton } from '../../_types/variant';
import styles from './Button.module.css';

interface ButtonProps {
  variant: VariantButton;
  size: SizeButton;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { variant, size, onClick, children, className } = props;

  return (
    <button
      onClick={onClick}
      className={css(styles.button, styles[variant], styles[size], className)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: VariantButton.primary,
  size: SizeButton.md
};

export default Button;
