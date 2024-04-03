import Typography from "@mui/material/Typography";

import styles from './styles.module.scss';

/**
 * @typedef HeaderTypographyProps
 * @property {('h1'|'h2'|'h3'|'h4'|'h5'|'h6')} [variant='h1'] - The header variant
 * @property {string} [className] - Additional class name
 * @property {boolean} [centerText=false] - Center the text
 * @property {React.ReactNode} children - The text for the header
 * @property {1|2|3|4|5|6} [sizeLevel] - Adjust the font size of the header
 * @property {boolean} [addBottomMargin=false] - Add bottom margin to the header
 */
type HeaderTypographyProps = {
    variant?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'; // TODO: Move this to a shared types file
    className?: string;
    centerText?: boolean;
    children: React.ReactNode;
    sizeLevel?: 1|2|3|4|5|6|7|8; // TODO: Move this to a shared types file
    addBottomMargin?: boolean;
};

function HeaderTypography({
    variant = 'h1',
    className: additionalClassName = '',
    centerText = false,
    children,
    sizeLevel,
    addBottomMargin = false,
    ...rest
  }: HeaderTypographyProps) {

    const variantClass = styles[variant] || '';
    const sizeLevelClass = sizeLevel && styles[`sizeLevel${sizeLevel}`] || '';
    const addBottomMarginClass = addBottomMargin && styles.addBottomMargin || '';
    const centerTextClass = centerText && styles.centerText || '';
    
    const fullClassName = `${variantClass} ${sizeLevelClass} ${addBottomMarginClass} ${centerTextClass} ${additionalClassName}`;

    return (
        <Typography 
            variant={variant}
            className={fullClassName}
            {...rest}
        >
            {children}
        </Typography>
    );
}

export default HeaderTypography;