import Image from "next/image"

export const SocialPlatformOverview = ({ logo, platformName, userName }: { logo: string, platformName: string, userName: string }) => {
    return <div className='flex flex-col gap-1'>
        <div><Image src={logo || ''} width={40} height={25} alt={platformName} /></div>
        <p className='text-sm'>{platformName}</p>
        <p className='text-xs'>{userName}</p>
    </div>
}