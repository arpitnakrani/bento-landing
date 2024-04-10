import youtubeImg1 from "../public/assets/images/socialLinkImages/youtubeImg1.jpeg"
import youtubeImg2 from "../public/assets/images/socialLinkImages/youtubeImg2.jpeg"
import youtubeImg3 from "../public/assets/images/socialLinkImages/youtubeImg3.jpeg"
import youtubeImg4 from "../public/assets/images/socialLinkImages/youtubeImg4.jpeg"
import instagramImg1 from "../public/assets/images/socialLinkImages/instagramImg1.jpeg"
import instagramImg2 from "../public/assets/images/socialLinkImages/instagramImg2.jpeg"
import instagramImg3 from "../public/assets/images/socialLinkImages/instagramImg3.jpeg"
import instagramImg4 from "../public/assets/images/socialLinkImages/instagramImg4.jpeg"
import instagramImg5 from "../public/assets/images/socialLinkImages/instagramImg5.jpeg"
import instagramImg6 from "../public/assets/images/socialLinkImages/instagramImg6.jpeg"
import SocialCardsContainer from "@/components/SocialMediaFeed";
import youKidLogo from "../public/assets/images/socialLinkImages/youKidLogo.png"
import youtubeLogo from "../public/assets/images/socialLinkImages/youtubelogo.svg"
import instagramLogo from "../public/assets/images/socialLinkImages/instagramLogo.svg"
import tiktokLogo from "../public/assets/images/socialLinkImages/tiktokLogo.svg"
import youkidImg from "../public/assets/images/socialLinkImages/abc.jpeg"
import facebookLogo from "../public/assets/images/socialLinkImages/facebookLogo.svg"
import emailLogo from "../public/assets/images/socialLinkImages/emailLogo.svg"
import cardImg from "../public/assets/images//socialLinkImages/cardImg.jpeg"
import { SocialCardProps } from "@/types/SocialCardProps";

export const socialData: SocialCardProps[] = [
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 1,
        colSpan: 1
    },
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 1,
        colSpan: 2
    },
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 2,
        colSpan: 1
    },
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4, youtubeImg1, youtubeImg2],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 2,
        colSpan: 2
    },
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4, youtubeImg1, youtubeImg2],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 1,
        colSpan: 1
    },
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4, youtubeImg1, youtubeImg2],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 2,
        colSpan: 1
    },
    {
        logo: youtubeLogo,
        platformName: 'YouTube',
        handle: 'Mia W.',
        images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4, youtubeImg1, youtubeImg2],
        link: 'https://youtube.com/user/miaw',
        followers: '10K',
        buttonLabel: 'Subscribe',
        buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
        cardBgColor: 'bg-red-100',
        customLayout: 'custom',
        bgColor: 'red-50',
        rowSPan: 2,
        colSpan: 2
    },
    // {
    //   logo: tiktokLogo,
    //   platformName: 'TikTok',
    //   handle: 'TikTok',
    //   followers: '4.7K', // Ensure followers is a string
    //   images: [youkidImg],
    //   link: 'https://www.tiktok.com/@meital_official',
    //   buttonLabel: 'Follow',
    //   buttonBgColor: 'bg-red-600', // Tailwind CSS class for background color
    //   website: "@meital_official",
    //   bgColor: 'red-50'

    // },
    // {
    //   logo: youKidLogo,
    //   platformName: 'Youkid',
    //   handle: "Youkid | יוקיד - עולם מופלא לילדים",
    //   followers: '',
    //   website: 'youkid.co.il',
    //   images: [youkidImg],
    //   link: 'https://www.youkid.co.il/',
    //   customLayout: 'custom',
    //   bgColor: 'red-50'

    // },
    // {
    //   platformName: 'imageOnly',
    //   images: [cardImg],// Replace with actual image paths
    //   link: 'https://www.instagram.com/meital_official/?igsh=MXB1a3p2ZW55YWU0bg%3D%3D&utm_source=qr',
    //   customLayout: "imageOnly",
    //   bgColor: 'red-50'

    // },
    // {
    //   logo: instagramLogo,
    //   platformName: 'Instagram',
    //   handle: '@mia_w.',
    //   website: "",
    //   followers: '4.7K',
    //   images: [
    //     instagramImg1, instagramImg2, instagramImg3,
    //     instagramImg4, instagramImg5, instagramImg6
    //   ],// Replace with actual image paths
    //   link: 'https://www.instagram.com/meital_official/?igsh=MXB1a3p2ZW55YWU0bg%3D%3D&utm_source=qr',
    //   buttonLabel: 'Follow',
    //   buttonBgColor: 'bg-customBlue', // Tailwind CSS class for background color
    //   bgColor: 'red-50'

    // },
    // {
    //   logo: facebookLogo,
    //   platformName: 'Facebook',
    //   handle: "My facebook",
    //   followers: '', // Add an empty string or a suitable value
    //   website: 'facebook.com',
    //   images: [youkidImg],
    //   link: 'https://www.youkid.co.il/',
    //   customLayout: 'custom'
    // },
    // {
    //   logo: emailLogo,
    //   platformName: 'Email',
    //   handle: "My Email",
    //   followers: '', // Add an empty string or a suitable value
    //   website: 'gmail.com',
    //   images: [youkidImg],
    //   link: 'https://www.youkid.co.il/',
    //   customLayout: 'custom'
    // },
];