import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

import styles from './styles.module.scss';
// import { Business } from '@mui/icons-material';
import BusinessIcon from '@mui/icons-material/Business';
import { BusinessCenter, Work } from '@mui/icons-material';
import HeaderTypography from '../HeaderTypography';


function LargeBackgroundWithLogo(props) {
    const {name, location, duration,
        largeLogo,
        degree,
        company,
        role,
        backgroundPositionFocus = '75', 
        largeBackgroundImg, // = "/st_johns_large_background_image.jpeg",
    } = props
    return (
        <Box
            className={styles.locationBackgroundImg}
            sx={{
                backgroundImage:`url(${largeBackgroundImg})`,
                backgroundPositionX: `${backgroundPositionFocus}%`,
                }}
            >
                
                {
                    !!largeLogo && (
                        <div className={styles.locationLogoContainer}>
                            <img className={styles.locationLogo} src={`${largeLogo}`}></img>
                        </div>
                    )
                }
                <Box 
                    className={styles.locationBackgroundImgContent}
                >  
                    {/* <h1>{name}</h1> */}
                    <HeaderTypography variant='h1' 
                        // className={styles.backgroundImgMainHeader}
                        sizeLevel={2}
                        >{name}</HeaderTypography>
                    <Divider/>

                    {/* TODO: Update this to accept an Icon as a prop */}
                    { !!degree && (
                        <p className={styles.centerIconWithText}><SchoolIcon/> 
                                <span>{degree}</span>
                                
                        </p>
                    )}

                    { !!company && (
                        <p className={styles.centerIconWithText}><BusinessIcon/> 
                                <span>{company}</span>
                        </p>
                    )}

                    { !!role && (
                        <p className={styles.centerIconWithText}><BusinessCenter/> 
                                <span>{role}</span>
                        </p>
                    )}
                    
                    
                    <p className={styles.centerIconWithText}><LocationOnIcon/> {location}</p>
                    <p className={styles.centerIconWithText}><CalendarMonthOutlinedIcon/>{duration}</p>
                </Box>
            
        </Box>
    );
}

export default LargeBackgroundWithLogo;