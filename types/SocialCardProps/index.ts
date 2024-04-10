import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface SocialCardProps {
    logo: StaticImageData;
    platformName: string;
    handle: string;
    followers: string;
    images: StaticImageData[]; // Array of image URLs
    link: string;
    buttonLabel?: string;
    buttonBgColor?: string; // Tailwind CSS class for background color
    cardBgColor?: string; // Optional background color for the card
    pattern?: boolean; // Optional prop to indicate if the pattern should be shown
    customLayout?: string;
    website?: string;
}

