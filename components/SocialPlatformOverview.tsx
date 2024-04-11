import Image from "next/image"

export const SocialPlatformOverview = ({ logo, platformName, userName }: { logo: string, platformName: string, userName: string }) => {
    // Function to determine if the logo should have a border
    const shouldHaveBorder = (platformName: string) => {
        return ['TikTok', 'Youkid | יוקיד - עולם מופלא לילדים', 'My Email'].includes(platformName);
    };

    // Conditional class assignment
    const logoClass = shouldHaveBorder(platformName) ? 'p-2 border rounded-lg w-fit shadow-md' : '';

    return (
        <div className='flex flex-col gap-1'>
            <div className={`${logoClass} p-1`}>
                <Image src={logo || ''} width={40} height={25} alt={platformName} />
            </div>
            <p className='text-sm'>{platformName}</p>
            <p className='text-xs'>{userName}</p>
        </div>
    );
}