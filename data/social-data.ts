import youtubeImg1 from "../public/assets/images/socialLinkImages/youtubeImg1.jpeg";
import youtubeImg2 from "../public/assets/images/socialLinkImages/youtubeImg2.jpeg";
import youtubeImg3 from "../public/assets/images/socialLinkImages/youtubeImg3.jpeg";
import youtubeImg4 from "../public/assets/images/socialLinkImages/youtubeImg4.jpeg";
import instagramImg1 from "../public/assets/images/socialLinkImages/instagramImg1.jpeg";
import instagramImg2 from "../public/assets/images/socialLinkImages/instagramImg2.jpeg";
import instagramImg3 from "../public/assets/images/socialLinkImages/instagramImg3.jpeg";
import instagramImg4 from "../public/assets/images/socialLinkImages/instagramImg4.jpeg";
import instagramImg5 from "../public/assets/images/socialLinkImages/instagramImg5.jpeg";
import instagramImg6 from "../public/assets/images/socialLinkImages/instagramImg6.jpeg";
import youKidLogo from "../public/assets/images/socialLinkImages/youKidLogo.png";
import youtubeLogo from "../public/assets/images/socialLinkImages/youtubelogo.svg";
import instagramLogo from "../public/assets/images/socialLinkImages/instagramLogo.svg";
import tiktokLogo from "../public/assets/images/socialLinkImages/tiktokLogo.svg";
import youkidImg from "../public/assets/images/socialLinkImages/abc.jpeg";
import facebookLogo from "../public/assets/images/socialLinkImages/facebookLogo.svg";
import emailLogo from "../public/assets/images/socialLinkImages/emailLogo.svg";
import cardImg from "../public/assets/images//socialLinkImages/abc.jpeg";
import { SocialCardProps } from "@/types/SocialCardProps";

export const socialData: SocialCardProps[] = [
  {
    logo: youtubeLogo,
    platformName: "YouTube",
    handle: "Mia W.",
    images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4],
    link: "https://www.youtube.com/@Meitale",
    followers: "10K",
    buttonLabel: "Subscribe",
    buttonBgColor: "bg-customRed", // Tailwind CSS class for background color
    cardBgColor: "bg-red-100",
    customLayout: "custom",
    bgColor: "red-50",
    rowSpan: 1,
    colSpan: 2,
    type: "INFO_FEED",
  },
  {
    logo: tiktokLogo,
    platformName: "TikTok",
    handle: "@meital_official",
    images: [],
    link: "https://www.tiktok.com/@meital_official",
    followers: "14K",
    buttonLabel: "Follow",
    buttonBgColor: "bg-customRed", // Tailwind CSS class for background color
    cardBgColor: "bg-red-100",
    customLayout: "custom",
    bgColor: "red-50",
    rowSpan: 2,
    colSpan: 2,
    type: "INFO_FEED",
  },
  {
    logo: youKidLogo,
    platformName: "Youkid | יוקיד - עולם מופלא לילדים",
    handle: "youkid.co.il",
    images: [youkidImg],
    link: "https://www.youkid.co.il/",
    followers: "",
    buttonLabel: "",
    buttonBgColor: "", // Tailwind CSS class for background color
    cardBgColor: "bg-red-100",
    customLayout: "custom",
    bgColor: "red-50",
    rowSpan: 1,
    colSpan: 2,
    type: "INFO_FEED",
  },
  {
    platformName: "",
    images: [cardImg],
    rowSpan: 2,
    colSpan: 2,
    type:'IMAGE_FEED'

  },
  {
    logo: instagramLogo,
    platformName: "",
    handle: "Mia W.",
    images: [
      instagramImg1,
      instagramImg2,
      instagramImg3,
      instagramImg4,
      instagramImg5,
      instagramImg6,
    ],
    link: "https://www.instagram.com/meital_official/?igsh=MXB1a3p2ZW55YWU0bg%3D%3D&utm_source=qr",
    followers: "4.7K",
    buttonLabel: "Follow",
    buttonBgColor: "bg-customRed", // Tailwind CSS class for background color
    cardBgColor: "bg-red-100",
    customLayout: "custom",
    bgColor: "red-50",
    rowSpan: 2,
    colSpan: 2,
    type: "INFO_FEED",
  },
  {
    logo: facebookLogo,
    platformName: "My facebook",
    handle: "facebook.com",
    images: [youkidImg],
    link: "https://www.facebook.com/meitalofficial?mibextid=LQQJ4d&rdid=UYphxH4YUaOTIOj0",
    followers: "",
    buttonLabel: "",
    buttonBgColor: "", // Tailwind CSS class for background color
    cardBgColor: "",
    customLayout: "custom",
    bgColor: "red-50",
    rowSpan: 1,
    colSpan: 2,
    type: "INFO_FEED",
  },
  {
    logo: emailLogo,
    platformName: "My Email",
    handle: "gmail.com",
    images: [youkidImg],
    link: "https://mail.google.com/mail/u/0/",
    followers: "10K",
    buttonLabel: "",
    buttonBgColor: "", // Tailwind CSS class for background color
    cardBgColor: "bg-red-100",
    customLayout: "",
    bgColor: "red-50",
    rowSpan: 1,
    colSpan: 2,
    type: "INFO_FEED",
  },
];
