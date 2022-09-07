// https://mui.com/material-ui/guides/interoperability/ css modules and tailwind

import { css, styled } from '@mui/material/styles';
import { SizeButton } from '../../_types/size';
import { VariantButton } from '../../_types/variant';

import { Theme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface PaletteOptions {
    buttonTextPrimary: PaletteOptions['primary'];
  }
}

interface ButtonProps {
  variant: VariantButton;
  size: SizeButton;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const ButtonUnStyled = (props: ButtonProps) => {
  const { onClick, children, className } = props;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// const variantStyle = (props: ButtonProps & { theme: Theme }) => {
//   const { palette } = props.theme;
//   const { variant, size } = props;
//   return css`
//     cursor: pointer;
//     color: ${palette.buttonTextPrimary.main};
//   `;
// };

// const sizeStyle = (props: ButtonProps & { theme: Theme }) => {
//   const { palette } = props.theme;
//   const { variant, size } = props;
// if(varian === solid)
//   return css`
//     cursor: pointer;
//     color: ${palette.color};
//   `;
// };

// const ButtonOtherOption1 = styled(ButtonUnStyled)`
//   ${variantStyle};
//   ${sizeStyle}
// `;

// const ButtonOtherOption2 = styled(ButtonUnStyled)((props) => {
//   const { palette } = props.theme;
//   const { variant, size } = props;
//   console.log(props);

//   return '';

// if (variant === 'primary') return ``;
// return `
//   border-radius: 0.25rem;

// `;
// });

// const ButtonOtheOption = styled(ButtonUnStyled)((props) => {
//   const { palette } = props.theme;
//   const { variant, size } = props;
//   console.log(props);

//   if (variant === 'primary') return ``;
//   return `
//     border-radius: 0.25rem;

//   `;
// });

const Button = styled(ButtonUnStyled)`
  cursor: pointer;
  border-radius: 0.25rem;
  color: ${(props) => {
    const { palette } = props.theme;
    const { variant } = props;

    if (variant === 'primary') return 'rgb(var(--button-text-primary))';
    if (variant === 'secondary') return palette.buttonTextPrimary.main;
    if (variant === 'invertedPrimary') return palette.primary.main;
    if (variant === 'invertedSecondary') return palette.secondary.main;
  }};
  background-color: ${(props) => {
    const { palette } = props.theme;
    const { variant } = props;
    if (variant === 'primary') return 'rgb(var(--primary))';
    if (variant === 'secondary') return palette.secondary.main;

    return '#fff';
  }};

  padding: ${(props) => {
    const { size } = props;
    if (size === 'sm') return '0.25rem';
    if (size === 'md') return '0.5rem 1.25rem';
    if (size === 'lg') return '0.5rem 1.25rem';
  }};

  border: ${(props) => {
    const { variant } = props;
    const { palette } = props.theme;
    if (variant === 'invertedPrimary')
      return `1px solid ${palette.primary.main}`;
    if (variant === 'invertedSecondary')
      return `1px solid ${palette.secondary.main}`;
  }};

  font-weight: ${(props) => {
    const { size, variant } = props;
    if (
      size === 'sm' &&
      (variant === 'invertedPrimary' || variant === 'invertedSecondary')
    )
      return '300';
  }};

  font-size: ${(props) => {
    const { size } = props;
    if (size === 'sm') return '0.875rem';
    if (size === 'md') return '1rem';
    if (size === 'lg') return '1.125rem';
  }};

  line-height: ${(props) => {
    const { size } = props;
    if (size === 'sm') return '1.25';
    if (size === 'md') return '1.5rem';
    if (size === 'lg') return '1.75rem';
  }};

  &:hover {
    opacity: ${(props) => {
      const { variant } = props;
      if (variant === 'primary' || variant === 'secondary') return '0.7';
    }};

    background-color: ${(props) => {
      const { variant } = props;
      const { palette } = props.theme;

      if (variant === 'invertedPrimary') return palette.primary.main;
      if (variant === 'invertedSecondary') return palette.secondary.main;
    }};

    color: ${(props) => {
      const { variant } = props;

      if (variant === 'invertedPrimary') return 'white';
      if (variant === 'invertedSecondary') return 'white';
    }};
  }
`;

ButtonUnStyled.defaultProps = {
  variant: VariantButton.primary,
  size: SizeButton.md
};

export default Button;
