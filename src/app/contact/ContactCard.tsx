'use client'

import Link from "next/link";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

// import styles from './styles.module.scss';
import { CardBody, CardContainer, CardItem, Rotation_Strength } from '@/components/ui/3d-card-efffect';


type ContactCardProps = {
    text: string;
    icon: JSX.Element;
    value: string;
    openText?: string;
    copyValue?: string;
};

function saveToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}

export function ContactCard(props: ContactCardProps) {
    const { text, icon, value, openText = 'Open', copyValue = value } = props;
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card sx={{ maxWidth: 240, maxHeight: 345, margin: 'auto' }}>
                <CardActionArea>
                    <Link target="_blank" rel="noopener noreferrer" href={value}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            {icon}
                        </CardContent>
                        <CardContent sx={{ textAlign: '' }}>
                            <Typography variant="body2" color="text.secondary">
                                {text}
                            </Typography>
                        </CardContent>
                    </Link>
                    <CardActions>
                        <Link target="_blank" rel="noopener noreferrer" href={value}>
                            <Button size="small" color="primary">
                                {openText}
                            </Button>
                        </Link>
                        <Button onClick={() => saveToClipboard(copyValue)} size="small" color="primary">
                            Copy
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
export function ContactCardV2(props: ContactCardProps) {
    const { text, icon, value, openText = 'Open', copyValue = value } = props;
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <CardContainer className="inter-var" rotationStrength={Rotation_Strength.HIGH}>
                <CardBody className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-sm p-6 border max-w-[240px] max-h-[345px]`}>
                    <Card sx={{ maxWidth: 240, maxHeight: 345, margin: 'auto', overflow: 'visible' }}>
                        <CardActionArea>
                            <Link target="_blank" rel="noopener noreferrer" href={value}>
                                <CardContent sx={{ textAlign: 'center', margin: 'auto' }}>
                                    {icon}
                                </CardContent>
                                <CardContent sx={{ textAlign: '' }}>

                                    <Typography variant="body2" color="text.secondary">
                                        {text}
                                    </Typography>
                                </CardContent>
                            </Link>
                            <CardActions>
                                <Link target="_blank" rel="noopener noreferrer" href={value}>
                                    <Button size="small" color="primary">
                                        {openText}
                                    </Button>
                                </Link>

                                <Button onClickCapture={()=> {console.log('Dezz')}} onClick={() => saveToClipboard(copyValue)} size="small" color="primary">
                                    Copy
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </CardBody>
            </CardContainer>
        </Grid>
    );
}

// TODO: Implement full 3d effect
// function ThreeDContactCard() {
//     return (
//         <CardContainer className="inter-var">
//             <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//                 <CardItem
//                     translateZ="50"
//                     className="text-xl font-bold text-neutral-600 dark:text-white"
//                 >
//                     <PhoneIcon sx={{ fontSize: 128 }} className={`${styles.phone} ${styles.contactCard}`} />
//                 </CardItem>
//                 <CardItem
//                     as="p"
//                     translateZ="60"
//                     className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                 >
//                     +1 (123) 456-7890
//                 </CardItem>
//                 {/* <CardItem translateZ="100" className="w-full mt-4">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem> */}
//                 {/* <div className="flex justify-between items-center mt-20"> */}
//                 <CardItem
//                     translateZ={20}
//                     as="div"
//                     // href="https://twitter.com/mannupaaji"
//                     // target="__blank"
//                     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                 >
//                     <Link target="_blank" rel="noopener noreferrer" href={"tel:11234567890"}>
//                         <Button size="small" color="primary">
//                             Call
//                         </Button>
//                     </Link>
//                     <Button onClick={() => saveToClipboard("+1 (123) 456-7890")} size="small" color="primary">
//                         Copy
//                     </Button>
//                 </CardItem>
//                 {/* <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem> */}
//                 {/* </div> */}
//             </CardBody>
//         </CardContainer>
//     )
// }