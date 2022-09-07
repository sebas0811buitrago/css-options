import css from '../../../utilities/css';
import { SizeButton } from '../../_types/size';
import { VariantButton } from '../../_types/variant';

import ButtonUnstyled from '@mui/base/ButtonUnstyled';

interface ButtonProps {
  variant: VariantButton;
  size: SizeButton;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
const cssSolidButton = 'text-buttonTextPrimary hover:bg-opacity-70';

const cssVariant = {
  primary: `bg-primary  ${cssSolidButton}`,
  secondary: `bg-secondary ${cssSolidButton}`,
  invertedPrimary:
    'bg-white border border-primary border-solid text-primary font-light hover:bg-primary hover:text-buttonTextPrimary',
  invertedSecondary:
    'bg-white border border-secondary border-solid text-secondary font-light hover:bg-secondary hover:text-buttonTextPrimary'
};

const cssSize = {
  sm: 'p-1 text-sm',
  md: 'py-2 px-5 text-base',
  lg: 'p-2  px-5 text-lg'
};

const Button = (props: ButtonProps) => {
  const { variant, size, onClick, children, className } = props;

  return (
    <ButtonUnstyled
      onClick={onClick}
      className={css('rounded', cssVariant[variant], cssSize[size], className)}
    >
      {children}
    </ButtonUnstyled>
  );
};

Button.defaultProps = {
  variant: VariantButton.primary,
  size: SizeButton.md
};

export default Button;
