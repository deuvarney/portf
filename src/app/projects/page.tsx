import HeaderTypography from "@/components/HeaderTypography";
import { Metadata } from "next/types";

import styles from './styles.module.scss';
import SectionContainer, { ContainerWithBetterName } from "@/components/SectionContainer";
import { FadeInImage } from "@/components/FadeInImg";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescAndResponsibilites from '@/components/DescAndResponsibilities';
import ProjectInfo from "../history/[company]/role/[role]/ProjectInfo";
import { GitHub, OpenInNew } from "@mui/icons-material";


type PersonalProjectType = {
	name: string;
	imageLink: string;
	description: string;
	fullSummary: string;
	tools: string[];
	upcommingChanges?: string[];
	githubLink: string;
	externalLink?: string;
}[];

const personalProjectsData: PersonalProjectType = [
	{
		name: 'Portfolio Website',
		imageLink: '/personalProjectImages/coding_background.svg',
		description: 'The very website you\'re browsing right now - meta, right?',
		fullSummary: 'A modern, responsive portfolio website built with Next.js 14 and the app router for optimal performance and SEO. Leverages TypeScript for type safety, TailwindCSS for utility-first styling, and Material UI components for consistent design patterns. Features server-side rendering, dynamic routing, optimized images with Next.js Image component, and responsive design that adapts seamlessly across devices. The architecture emphasizes component reusability and maintainable code structure.',
		tools: ['TypeScript', 'Next.js 14', 'TailwindCSS', 'Material UI', 'Vercel', 'ESLint', 'Prettier'],
		upcommingChanges: ['Updated Contact Page with Form Validation', 'Internationalization (i18n)', 'NextJS Modal Implementation', 'Dark Mode Toggle', 'Blog Section with MDX', 'Analytics Integration'],
		githubLink: 'https://github.com/deuvarney/portf',
		externalLink: 'https://deuvarneyportfolio.vercel.app/home',
	},
	{
		name: 'Yet Another TV Website',
		imageLink: '/personalProjectImages/tv_website_bg.svg',
		description: 'Because the world definitely needed another TV show website (but this one\'s actually pretty good!).',
		fullSummary: 'A responsive single-page application built with Create React App that consumes multiple external APIs (TMDB, YouTube) to aggregate trending and popular TV shows. Implements React hooks for state management, custom hooks for API calls, and React Router for client-side navigation. Features include debounced search functionality, infinite scrolling with intersection observer API, lazy loading of images, and YouTube trailer integration. The application uses functional components throughout and follows modern React patterns with proper error boundaries and loading states.',
		tools: ['TypeScript', 'React 18', 'Create React App', 'TailwindCSS', 'React Router', 'Axios', 'React Query', 'GitHub Pages'],
		upcommingChanges: ['Internationalization Support', 'Framer Motion Page Animations', 'Advanced Filter Panel', 'Better YouTube Player Controls', 'Intersection Observer Animations', 'Scroll to Top Button', 'Auto-load Based on Active Filters', 'Interactive Rating Stars', 'Show Overview YouTube Videos', 'PWA Support'],
		githubLink: 'https://github.com/deuvarney/yet-another-tv-website',
		externalLink: 'https://deuvarney.github.io/yet-another-tv-website'
	},
	{
		name: 'Yet Another TV Website Fullstack',
		imageLink: '/personalProjectImages/tv_server_bg.svg',
		description: 'The TV website\'s bigger, stronger sibling with microservices and a database that actually remembers things.',
		fullSummary: 'A complete architectural overhaul using modern full-stack technologies and microservices design patterns. Built with a Next.js frontend, NestJS backend APIs, Redis for caching and session management, and PostgreSQL for persistent data storage. The project uses TurboRepo for monorepo management, enabling shared TypeScript types and utilities across services. Features include JWT authentication, rate limiting, API versioning, database migrations with TypeORM, and comprehensive logging. The microservices communicate via REST APIs with proper error handling, validation middleware, and automated testing suites.',
		tools: ['TypeScript', 'Next.js 14', 'NestJS', 'Redis', 'PostgreSQL', 'TailwindCSS', 'TurboRepo', 'TypeORM', 'JWT', 'Docker', 'Jest'],
		upcommingChanges: ['User Authentication & Profiles', 'Favorites & Watchlists', 'Real-time Episode Release Notifications', 'Show Homepage Previews', 'Recommendation Engine', 'Social Features & Reviews', 'API Rate Limiting Dashboard', 'Elasticsearch Integration'],
		githubLink: 'https://github.com/deuvarney/yatw-microservices',
		// externalLink: 'https://deuvarney.github.io/yet-another-tv-website'
	},
		{
		name: 'Asteroids',
		imageLink: '/personalProjectImages/asteroid_field_bg.svg',
		description: 'Pew pew! Classic space rocks meet modern Python in this retro arcade revival.',
		fullSummary: 'A faithful recreation of the 1979 Atari classic built with Python and Pygame. Implements vector-based graphics rendering, realistic physics with momentum and rotation, and collision detection using pygame.mask for pixel-perfect accuracy. Features include procedural asteroid generation with fractal-like breaking patterns, particle systems for explosions, wrapped screen boundaries, and progressive difficulty scaling. The game uses object-oriented design with separate classes for game entities, event handling, and state management. Sound effects are managed through pygame.mixer with spatial audio positioning.',
		tools: ['Python 3.9+', 'Pygame', 'NumPy', 'Math', 'Random', 'GitHub Pages'],
		upcommingChanges: ['Persistent Local Scoreboard', 'Gamepad/Joystick Support', 'Multi-stage Asteroid Breaking', 'Power-up System', 'Enhanced Weapon Types', 'Shield Mechanics', 'Particle Trail Effects', 'Background Starfield Animation'],
		githubLink: 'https://github.com/deuvarney/Asteroids_Python',
		externalLink: 'https://deuvarney.github.io/Asteroids_Python'
	},
		{
		name: 'Blackjack',
		imageLink: '/personalProjectImages/blackjack_bg.svg',
		description: 'Hit me! A digital casino experience where the house edge is just good programming.',
		fullSummary: 'A comprehensive digital implementation of Blackjack featuring authentic casino rules and intelligent dealer AI. Built with Python and Pygame for rich graphics and smooth animations. Implements a complete card deck system with Fisher-Yates shuffling algorithm, hand evaluation logic for soft/hard aces, and split/double-down mechanics. The game features object-oriented design with separate classes for Card, Deck, Hand, Player, and Dealer entities. Includes betting systems with chip animations, game state persistence, and statistical tracking of wins/losses. The dealer AI follows standard casino rules (hit on soft 17, etc.).',
		tools: ['Python 3.9+', 'Pygame', 'JSON', 'Random', 'GitHub Pages'],
		upcommingChanges: ['Enhanced GUI with Card Animations', 'Multiple Deck Support (4-8 decks)', 'Advanced Betting System', 'Statistics & Analytics Dashboard', 'Sound Effects & Music', 'Tournament Mode', 'AI Difficulty Levels', 'Save/Load Game State'],
		githubLink: 'https://github.com/deuvarney/Blackjack_Python',
		externalLink: 'https://deuvarney.github.io/Blackjack_Python'
	},
		{
		name: 'Snake',
		imageLink: '/personalProjectImages/snake_game_bg.svg',
		description: 'The OG mobile game before smartphones existed - now with 100% more Python!',
		fullSummary: 'A modern interpretation of the classic Snake game built with Python and Pygame, featuring smooth 60fps gameplay and responsive controls. Implements efficient collision detection using coordinate-based algorithms, dynamic snake growth with linked-list-like body segments, and intelligent food spawning that avoids current snake positions. The game features customizable grid systems, color-coded difficulty levels, and smooth directional transitions. Uses pygame\'s event system for precise input handling and implements game loop architecture with fixed timesteps for consistent gameplay across different hardware.',
		tools: ['Python 3.9+', 'Pygame', 'Collections', 'Random', 'Time'],
		upcommingChanges: ['Enhanced Graphics & Themes', 'Gamepad/Joystick Support', 'High Score Persistence', 'Multiple Game Modes', 'Speed Progression System', 'Power-ups & Special Foods', 'Background Music & SFX'],
		githubLink: 'https://github.com/deuvarney/snake_game_python',
		// externalLink: 'https://deuvarney.github.io/yet-another-tv-website'
	},
	{
		name: 'Very Simple Image Converter',
		imageLink: '/personalProjectImages/image_conversion_bg.svg',
		description: 'Turn your JPEGs into PNGs faster than you can say "file format compatibility issues"!',
		fullSummary: 'A client-side image conversion tool built with React that processes images entirely in the browser using Canvas API and File API. Implements drag-and-drop functionality with visual feedback, supports multiple image formats (JPEG, PNG, WebP, GIF, BMP), and uses HTML5 Canvas for image manipulation and format conversion. Features include real-time image preview, quality adjustment sliders, batch processing capabilities, and automatic download management. The application uses React hooks for state management, custom hooks for file handling, and Ant Design components for a polished user interface. All processing happens locally - no server uploads required.',
		tools: ['React 18', 'Ant Design', 'Canvas API', 'File API', 'JavaScript', 'CSS3', 'GitHub Pages'],
		upcommingChanges: ['Batch Conversion Queue', 'Image Compression Controls', 'Resize & Crop Functionality', 'Format Preview Comparison', 'EXIF Data Preservation', 'Watermark Addition', 'Image Filters & Effects', 'Progressive Web App Features'],
		githubLink: 'https://github.com/deuvarney/Very_Simple_Image_Converter',
		externalLink: 'https://deuvarney.github.io/Very_Simple_Image_Converter/'
	},
];

// TODO: Look into utilizing details/summary instead
function ProjectExtraDetails({ fullSummary, tools = [], upcommingChanges = [] }: { fullSummary: string, tools?: string[], upcommingChanges?: string[] }) {

	return (
		<Accordion>
			<AccordionSummary
				style={{ alignItems: 'center' }}
				expandIcon={<ExpandMoreIcon />}
			>
				<Typography sx={{ flexShrink: 0 }}>
					Learn more about this project!
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Divider className={styles.roleDetailsDivider} />
				<Typography>
					<p className={styles.fullSummary}>{fullSummary}</p>
				</Typography>

				<Grid container spacing={0} gap={2} className={styles.roleDetailsGrid}>
					{
						!!tools.length && (
							<Grid item xs={12} md={6}>
								<DescAndResponsibilites
									listHeader={'Tools & Technologies'}
									resumeTasks={tools}
								/>
							</Grid>
						)
					}

					{
						!!upcommingChanges.length && (
							<Grid item xs={12} md={6}>
								<DescAndResponsibilites
									listHeader={'Upcoming Changes'}
									resumeTasks={upcommingChanges}
								/>
							</Grid>
						)
					}
				</Grid>

			</AccordionDetails>
		</Accordion>
	)
}


// background-color: $section-background-color-dark2;
export default function Page() {
	return (
		<main className={styles.mainContainer}>
			<HeaderTypography variant='h1' className={styles.mainHeading} centerText={true} sizeLevel={2}>Personal Projects</HeaderTypography>

			<SectionContainer>
				{
					personalProjectsData.map((project, key) => (
						<ContainerWithBetterName key={key} className={styles.projectContentContainer}>
							<ProjectInfo name={project.name} summary={project.description} tileImgSrc={project.imageLink}>
								<div className={styles.projectButtonsContainer}>

									{
										project.externalLink ? (
											<Link target="_blank" rel="noopener noreferrer" href={project.externalLink}>
												<Button className={styles.projectButton} size="medium" variant="contained" color="primary" startIcon={<OpenInNew />} >
													Try It Out!
												</Button>
											</Link>
										) : (
											<Button disabled className={styles.projectButton} size="medium" variant="contained" color="primary" startIcon={<OpenInNew />} >
												Coming Soon!
											</Button>
										)
									}


									<Link target="_blank" rel="noopener noreferrer" href={project.githubLink}>
										<Button className={styles.projectButton} size="medium" variant="outlined" color="primary" startIcon={<GitHub />}>
											Check out the code!
										</Button>
									</Link>
								</div>
							</ProjectInfo>
							<ProjectExtraDetails fullSummary={project.fullSummary} tools={project.tools} upcommingChanges={project.upcommingChanges} />
						</ContainerWithBetterName>
					))
				}
			</SectionContainer>
		</main>
	)
}

export function generateMetadata({ params }): Metadata {
	return {
		title: 'Personal Projects',
		description: 'Cool projects by Deuvarney',
	};
}