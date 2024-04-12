import { SocialCardProps } from '@/types/SocialCardProps';
import Image from 'next/image';
import React from 'react'
import Button from './Button';
import { SocialPlatformOverview } from './SocialPlatformOverview';
import Link from 'next/link';

interface ISocialMediaCard {
    rowSpan: number | undefined;
    colSpan: number;
    platformData: SocialCardProps;
}
export const SocialMedialCard = ({ colSpan, rowSpan, platformData }: ISocialMediaCard) => {
    function getElementByDimension() {
        if (rowSpan === 1 && colSpan === 1) {
            return <Layout1X1 platformData={platformData} />
        }
        if (rowSpan === 1 && colSpan === 2) {
            return <Layout1X2 platformData={platformData} />
        }
        if (rowSpan === 2 && colSpan === 1) {
            return <Layout2X1 platformData={platformData} />
        }
        if (rowSpan === 2 && colSpan === 2) {
            return <Layout2X2 platformData={platformData} />
        }
    }
    return getElementByDimension()
}

const Layout1X1 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <Link href={platformData.link || ""} target='blank' className={`col-span-1 row-span-1  lg:p-6 md:p-6 p-4 rounded-3xl cursor-pointer hover:bg-gray-50 shadow-custom border-solid border border-gray-200 h-[200px]  order-first`}>
        <div className='flex justify-between flex-col h-full'>
            <SocialPlatformOverview logo={platformData.logo || ''} platformName={platformData.platformName} userName={platformData.handle || ''} />
            <div>
                <Button classNames='text-xs bg-red-600 rounded-xl text-white font-bold'>{platformData.buttonLabel} {platformData.followers}</Button>
            </div>
        </div>
    </Link>
}
const Layout1X2 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <Link href={platformData.link || ""} target='blank' className={`col-span-2 row-span-1 p-6   rounded-3xl cursor-pointer hover:bg-gray-50 shadow-custom border-solid border border-gray-200 h-[200px]`}>
        <div className='flex justify-between gap-8 h-full'>
            <div className='flex justify-between flex-col gap-4 h-full w-5/12'>
                <SocialPlatformOverview logo={platformData.logo || ''} platformName={platformData.platformName} userName={platformData.handle || ''} />
                {platformData.buttonLabel &&
                    <div>
                        <Button classNames='text-xs bg-red-600 rounded-xl text-white font-bold'>{platformData.buttonLabel} {platformData.followers}</Button>
                    </div>
                }
            </div>
            <div className='flex-1 h-full w-7/12'>
                <div className={`grid ${platformData?.images?.length === 1 ? 'grid-cols-1 grid-rows-1' : 'grid-cols-2 grid-rows-2'} gap-2 items-end h-full`}>
                    {platformData.images.map((image, index) => (
                        <Image className='rounded-md w-full h-full' src={image} width={50} height={50} alt='image' key={index} />
                    ))}
                </div>
            </div>
        </div>
    </Link>
}
const Layout2X1 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <Link href={platformData.link || ""} target='blank' className={`col-span-1 row-span-2 p-6  rounded-3xl cursor-pointer hover:bg-gray-50 shadow-custom border-solid border border-gray-200`}>
        <div className='flex justify-between flex-col h-full gap-6'>
            <SocialPlatformOverview logo={platformData.logo || ''} platformName={platformData.platformName} userName={platformData.handle || ''} />
            <div className='flex-1'>
                <Image src={platformData.images?.[0]} className='h-full' width={100} height={200} alt='' />
            </div>
            <div>
                <Button classNames='text-xs bg-red-600 rounded-xl text-white font-bold'>{platformData.buttonLabel} {platformData.followers}</Button>
            </div>
        </div>
    </Link>
}


const Layout2X2 = ({ platformData }: { platformData: SocialCardProps }) => {
    const showOnlyImage = platformData.type === 'IMAGE_FEED';
    return showOnlyImage ? (
        <div className='col-span-2 row-span-2'>
            <Image
                src={platformData.images[0]}
                className={`rounded-3xl cursor-pointer hover:bg-gray-50 w-full h-full max-h-[400px] object-cover  aspect-[1/1]`}
                alt={`${platformData.platformName} content`}
            />
        </div>
    ) : (
        <Link href={platformData.link || ""} target='blank' className={`col-span-2 row-span-2 p-6 rounded-3xl cursor-pointer hover:bg-gray-50 shadow-custom border-solid border border-gray-200`}>
            <div className='flex flex-col justify-between h-full gap-8'>
                <div className='flex justify-between '>
                    <SocialPlatformOverview logo={platformData.logo || ''} platformName={platformData.platformName} userName={platformData.handle || ''} />
                    <div>
                        <Button classNames='text-xs bg-red-600 rounded-xl text-white font-bold'>{platformData.buttonLabel} {platformData.followers}</Button>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='grid grid-cols-3 grid-rows-6 gap-2 items-end h-full'>
                        {platformData.images.map((image, index) => (
                            <div className='col-span-1 row-span-3 h-full w-full' key={index}>
                                <Image
                                    className={`rounded-md w-full h-full`}
                                    src={image}
                                    width={50}
                                    height={50}
                                    alt='image'
                                    key={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
};


