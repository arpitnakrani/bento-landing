import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface SocialCardProps {
  logo?: string;
  platformName: string;
  handle?: string;
  followers?: string;
  images: StaticImageData[]; // Array of image URLs
  link?: string;
  buttonLabel?: string;
  bgColor?: string;
  buttonBgColor?: string; // Tailwind CSS class for background color
  cardBgColor?: string; // Optional background color for the card
  pattern?: boolean; // Optional prop to indicate if the pattern should be shown
  customLayout?: string;
  website?: string;
  rowSpan?: number;
  colSpan: number
}
