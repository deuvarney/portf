import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import './styles.scss';
import Link from 'next/link';
import { Email, GitHub, Launch, LinkedIn, Phone } from '@mui/icons-material';


// TODO, consoldiate contain information
const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
  { name: 'Call',
    icon: (
        <Link target="_blank" rel="noopener noreferrer" href={"tel:11234567890"}>
            <Phone/>
        </Link>
    )
    },
    { name: 'Email',
    icon: (
        <Link target="_blank" rel="noopener noreferrer" href={"mailto:deuvarney1@aol.com"}>
            <Email/>
        </Link>
    )
    },
    { name: 'LinkedIn',
    icon: (
        <Link target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/deuvarney"}>
            <LinkedIn/>
        </Link>
    )
    },
    { name: 'Github',
    icon: (
        <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/deuvarney"}>
            <GitHub />
        </Link>
    )
    },
];

export default function CustomSpeedDial() {
  return (
    <>
        {/* <div style={{
            flexBasis: '100%',
            height: 0,
        }}></div> */}

        <Box className={"speedDialBtn"} sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial  
                // open={true} 
                // openIcon={<Launch/>}       
                ariaLabel="SpeedDial for Contact Links"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<Launch />}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
                ))}
            </SpeedDial>
        </Box>
    </>
  );
}