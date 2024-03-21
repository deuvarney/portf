import Typography from "@mui/material/Typography";

import styles from './styles.module.scss';

function HeaderTypography(props) {
    
    const {variant = 'h1', className = '', centerText, children, sizeLevel, rest} = props;

    let fullClassName = `${className} ${styles.HeaderTypography} ${!!centerText ? styles.centerText : ''}`;
    
    // switch(variant){
    //     case 'h1':
    //         fullClassName = `${fullClassName} ${styles.h1}`
    //         break;
    //     case 'h4':
    //         fullClassName = `${fullClassName} ${styles.h4}`
    //         break;
    //     // default:
    //     //     break;
    // }

    if(variant) {
        fullClassName = `${fullClassName} ${styles[variant]}`
    }


    if(sizeLevel) {
        fullClassName = `${fullClassName} ${styles[`sizeLevel${sizeLevel}`]}`
    }
    // switch(sizeLevel){
    //     case 2:
    //         fullClassName = `${fullClassName} ${styles.sizeLevel2}`
    //         break;
    //     // default:
    //     //     break;
    // }

     fullClassName = `${fullClassName} ${className}`;


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