'use client';

import { Carousel, CarouselButton, CarouselHandle, SlideData } from "@/components/ui/carousel";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FloatingDock } from "@/components/ui/floating-dock";
import { useRef, useState } from "react";
import { saveToClipboard } from "@/utils/browserUtils";

// TODO: move saveToClipboard() to utils? -DONE
// TODO: Use function to generate Carousel Buttons
// TODO: Generate cleaner way for mapping links to slides, maybe use one object and then generate the slides & links from larger object
// TODO: Move client components to client folder and utilize SSR, especially for page metadata
// TODO: Make floating dock active item bigger
// TODO: Make floating dock active colored
// TODO: Make floating dock hover/focus half colored
// TODO: Screen reader support?
// TODO: Active button in Dock should be disabled
// TODO: Aria disabled support? - DONE
// Also-active on button
// BTN colors/ styles/active/focus/hover/disabled
// Zoom, Fade in on load



export default function ContactPage() {
     const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const slideData: SlideData[] = [
        {
            title: "Email Me",
            buttons: [
                <CarouselButton key={"email"} content={"Send Email"} clickHandler={() => window.open("mailto:deuvarneysanderson@gmail.com")} />,
                <CarouselButton key={"copy"} content={"Copy Email"} clickHandler={() => {saveToClipboard("deuvarneysanderson@gmail.com"); handleClick()}} />,
            ],
            src: "/email_animated_background.svg",
            messages: [
                "Ready to build something amazing together?",
                "Your next great project starts with a simple hello.",
                "I solve problems. What's yours?",
                "My inbox is lonelier than a JavaScript developer without Stack Overflow.",
                "Currently accepting coffee bribes and project proposals.",
                "Warning: I respond to emails faster than I debug code.",
                "Slide into my inbox (professionally).",
                "Got a project that needs some digital magic?",
                "Need someone who speaks fluent code and client?",
                "Building something cool? Let's chat.",
                "Ready to make the internet a little more awesome?",
                "Say hi! I promise I'm more interesting than my commit messages.",
                "Drop me a line - I actually check my email.",
                "Let's grab a virtual coffee and talk shop.",
                "I'm just one email away from your next breakthrough.",
                "My response time is faster than a Redis cache hit.",
                "Ping me - I'm always listening on port 25.",
                "Let's connect() and make something incredible.",
                "Tell me your vision, I'll make it pixel-perfect.",
                "From concept to launch - let's make it happen.",
                "Your ideas + my code = something extraordinary."
            ],
            value: "Deuvarneysanderson@gmail.com",
        },
        {
            title: "Call Me",
            buttons: [
                <CarouselButton key={"call"} content={"Ring Me Up"} clickHandler={() => window.open("tel:11234567890")} />,
                <CarouselButton key={"copy"} content={"Copy Number"} clickHandler={() => {saveToClipboard("+1 (123) 456-7890"); handleClick()}} />,
            ],
            src: "/phone_call_animated_background.svg",
            messages: [

                "Let's discuss your vision over a quick call.",
                "Great ideas deserve great conversations.",
                "Ready to talk business? I'm all ears.",
                "Your breakthrough is just one call away.",
                "I promise I sound better than my code comments.",
                "Let's skip the typing and actually talk like humans.",
                "Warning: I get excited about projects on phone calls.",
                "My voice is less buggy than my first-year code.",
                "Ready to turn screen time into talk time?",
                "Want to hear about your project straight from the source?",
                "Got 15 minutes to change everything?",
                "Prefer talking over typing? Same here.",
                "Let's have a real conversation about your real needs.",
                "Call me old-fashioned, but I love actual conversations.",
                "No video required - just your voice and your vision.",
                "Let's talk shop without the emoji confusion.",
                "Real-time communication > async messaging.",
                "Let's establish a voice connection and sync up.",
                "My bandwidth for phone calls is unlimited.",
                "Voice protocol preferred over text packets.",
                "Hear the passion behind the pixels.",
                "Let's brainstorm in real-time, no lag.",
                "Your ideas sound better when you actually say them.",
                "From hello to handshake in one conversation.",
                "Dial in and let's make magic happen.",
                "Ring me up - I'm ready to listen.",
                "Let's connect the old-school way.",
                "Press call and let's get started."

            ],
            value: "(123) 456-7890",
        },
        {
            title: "Connect on LinkedIn",
            buttons: [
            <CarouselButton key={"linkedin"} content={"Connect with Me"} clickHandler={() => window.open("https://www.linkedin.com/in/deuvarney")} />,
            <CarouselButton key={"copy"} content={"Copy Link"} clickHandler={() => {saveToClipboard("https://www.linkedin.com/in/deuvarney"); handleClick()}} />,
            ],
            src: "/linkedin_animated_background.svg",
            messages: [
                "See my code in action, not just in theory.",
                "My commits speak louder than my resume.",
                "Where ideas become pull requests.",
                "Code talks. Mine's pretty chatty.",
                "My GitHub: where bugs go to become features.",
                "Warning: Repository may contain traces of brilliance and caffeine.",
                "My code is open source, my coffee addiction is not.",
                "Currently pushing code and pulling all-nighters.",
                "Fork me on GitHub (the professional way).",
                "My repos are cleaner than my desk.",
                "Building the future, one commit at a time.",
                "Open source enthusiast, closed-door debugger.",
                "Peek behind the code curtain.",
                "Where my real personality shows through syntax.",
                "My digital workshop - tools included.",
                "Come for the code, stay for the commit messages."
            ],
            value: "Deuvarney @ LinkedIn",
        },
        {
            title: "Check out my Github",
            buttons: [
                 <CarouselButton key={"github"} content={"Debug with Me"} clickHandler={() => window.open("https://github.com/deuvarney")} />,
                 <CarouselButton key={"copy"} content={"Copy Link"} clickHandler={() => {saveToClipboard("https://github.com/deuvarney"); handleClick()}} />,
            ],
            // button: "Explore Component",
            src: "/github_animated_background.svg",
            messages: [
                "Let's connect and create something meaningful.",
                "Building professional relationships, one connection at a time.",
                "Your network is your net worth - let's grow both.",
                "Ready to expand our professional horizons together?",
                "Networking without the awkward small talk.",
                "My LinkedIn: where career magic happens.",
                "Collecting connections like they're Pokémon cards.",
                "Professional networking with actual personality.",
                "Where opportunities meet preparation.",
                "Let's turn LinkedIn likes into real-life collaborations.",
                "Building bridges, not just websites.",
                "Your next career move starts with a simple connect.",
                "Let's make professional networking feel human again.",
                "Connect with me - I promise I'm more than my job title.",
                "Building relationships that go beyond the timeline.",
                "Professional connections with personal touch.",
                "Connecting the dots in the digital landscape.",
                "Where tech meets opportunity.",
                "Building professional networks, not just networks.",
                "Let's debug the professional world together."
            ],
            value: "Deuvarney @ GitHub",
        },
    ];
    const links = [
        {
            title: "Email",
            icon: (
                <EmailIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#email",
        },

        {
            title: "Phone",
            icon: (
                <PhoneIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#phone",
        },
        {
            title: "LinkedIn",
            icon: (
                <LinkedInIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#linkedin",
        },
        {
            title: "Github",
            icon: (
                <GitHubIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#github",
        },
    ];
    
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const carouselRef = useRef<CarouselHandle>(null);

    return (
        // TODO: Figure out why the specificty order is not being followed
        <main className="mt-4">

            <div className="w-[90vw] min-w-sm max-w-4xl h-[75vh] min-h-sm max-h-4xl " style={{ margin: "0 auto", }}>
                <div className="relative overflow-hidden w-full h-full py-20">
                    <Carousel ref={carouselRef} slides={slideData}>
                        <div className="flex items-end justify-center w-full translate-y-[-1rem] absolute bottom-[1rem]">
                            <FloatingDock
                                onItemClick={(index, evt) => {
                                    evt.preventDefault();
                                    carouselRef.current?.goTo(index);
                                }}
                                desktopClassName="items-center"
                                items={links}
                            />
                        </div>
                    </Carousel>
                </div>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Saved to clipboard"
                action={action}
            />
        </main>
    );
}