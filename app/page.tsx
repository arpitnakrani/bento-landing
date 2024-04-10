import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
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
import SocialCardsContainer from "@/components/SocialCardsContainer";
import bentoBtnImg from "../public/assets/images/socialLinkImages/bentoBtnImg.svg"
import youKidLogo from "../public/assets/images/socialLinkImages/youKidLogo.png"
import youtubeLogo from "../public/assets/images/socialLinkImages/youtubelogo.svg"
import instagramLogo from "../public/assets/images/socialLinkImages/instagramLogo.svg"
import tiktokLogo from "../public/assets/images/socialLinkImages/tiktokLogo.svg"
import youkidImg from "../public/assets/images/socialLinkImages/abc.jpeg"

export default function Home() {
  const socialCards = [
    {
      logo: youtubeLogo,
      platformName: 'YouTube',
      handle: 'Mia W.',
      followers: '10K',
      images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4],
      link: 'https://youtube.com/user/miaw',
      buttonLabel: 'Subscribe',
      buttonBgColor: 'bg-customRed', // Tailwind CSS class for background color
      cardBgColor: 'bg-red-100',
      customLayout: 'custom'
    },
    {
      logo: tiktokLogo,
      platformName: 'TikTok',
      handle: 'TikTok',
      followers: '4.7K', // Ensure followers is a string
      images: [],
      link: 'https://www.tiktok.com/@meital_official',
      buttonLabel: 'Follow',
      buttonBgColor: 'bg-red-600', // Tailwind CSS class for background color
      website: "@meital_official"
    },
    {
      logo: youKidLogo,
      platformName: 'Youkid',
      handle: "Youkid | יוקיד - עולם מופלא לילדים",
      followers: '', // Add an empty string or a suitable value
      website: 'youkid.co.il',
      images: [youkidImg],
      link: 'https://www.youkid.co.il/',
      customLayout: 'custom'
    },
    {
      logo: instagramLogo,
      platformName: 'Instagram',
      handle: '',
      website: "@mia_w.",
      followers: '4.7K',
      images: [
        instagramImg1, instagramImg2, instagramImg3,
        instagramImg4, instagramImg5, instagramImg6
      ],// Replace with actual image paths
      link: 'https://www.instagram.com/meital_official/?igsh=MXB1a3p2ZW55YWU0bg%3D%3D&utm_source=qr',
      buttonLabel: 'Follow',
      buttonBgColor: 'bg-customBlue', // Tailwind CSS class for background color
      pattern: true
    },
    {
      logo: youKidLogo,
      platformName: 'My facebook',
      handle: "My facebook",
      followers: '', // Add an empty string or a suitable value
      website: 'facebook.com',
      images: [youkidImg],
      link: 'https://www.youkid.co.il/',
      customLayout: 'custom'
    },
    {
      logo: youKidLogo,
      platformName: 'Youkid',
      handle: "My Email",
      followers: '', // Add an empty string or a suitable value
      website: 'gmail.com',
      images: [youkidImg],
      link: 'https://www.youkid.co.il/',
      customLayout: 'custom'
    },
  ];


  return (
    <main className="min-h-screen flex-col p-24">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProfileCard />
          <SocialCardsContainer socialCards={socialCards} />
        </div>
        <div className='flex'>
          <button className='py-3 px-3.5 flex items-center text-white bg-customBlue font-semibold text-xs rounded-lg'><Image className='mr-2' width={18} height={18} src={bentoBtnImg} alt='btnImg' /> Create Your Bento</button>
          <button className='py-3 px-3.5 flex items-center text-slate-600 font-semibold text-xs '>Login</button>
        </div>
      </div>
    </main>
  );
}
