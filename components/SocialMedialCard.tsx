import { SocialCardProps } from '@/types/SocialCardProps';
import Image from 'next/image';
import React from 'react'
import Button from './Button';

interface ISocialMediaCard {
    rowSpan: number;
    colSpan: number;
    platformData: SocialCardProps;
}
export const SocialMedialCard = ({ colSpan, rowSpan, platformData }: ISocialMediaCard) => {
    function getElementByDimention() {
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
    return getElementByDimention()
}

const Layout1X1 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <div className={`col-span-1 row-span-1 h-full p-3 rounded-2xl shadow-sm border-solid border border-gray-200 bg-${platformData.bgColor}`}>
        <div className='flex justify-between flex-col h-full'>
            <div className='flex flex-col gap-1'>
                <div><Image src={platformData.logo || ''} width={40} height={25} alt={platformData.platformName} /></div>
                <p className='text-sm'>{platformData.platformName}</p>
            </div>
            <div>
                <Button classNames='text-xs bg-red-600 rounded-xl text-white font-bold'>{platformData.buttonLabel} {platformData.followers}</Button>
            </div>
        </div>
    </div>

}
const Layout1X2 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <div className={`col-span-2 row-span-1 p-3  h-full rounded-2xl shadow-sm border-solid border border-gray-200 bg-${platformData.bgColor}`}>
        <div className='flex justify-between gap-4 h-full'>
            <div>
                <div className='flex justify-between flex-col h-full'>
                    <div>
                        <div><Image src={platformData.logo || ''} width={40} height={25} alt={platformData.platformName} /></div>
                        <p>{platformData.platformName}</p>
                    </div>
                    <div>
                        <Button classNames='text-xs bg-red-600 rounded-xl text-white font-bold'>{platformData.buttonLabel} {platformData.followers}</Button>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col gap-4 items-end'>
                    {platformData.images.splice(0, 2).map((image, index) => <Image className={`rounded-md w-36`} src={image} width={100} height={50} alt='image' key={index} />)}
                </div>
            </div>
        </div>
    </div>
}
const Layout2X1 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <div className={`col-span-1 row-span-2 p-3  rounded-2xl shadow-sm border-solid border border-gray-200 bg-${platformData.bgColor}`}>
        <div className='flex justify-between flex-col h-full'>
            <div>
                <div><Image src={platformData.logo || ''} width={40} height={25} alt={platformData.platformName} /></div>
                <p>{platformData.platformName}</p>
            </div>
            <div>
                {
                    <Image src={platformData.images?.[0]} width={100} height={200} alt='' />
                }
            </div>
            <div>
                <button className='text-xs'>{platformData.buttonLabel} {platformData.followers}</button>
            </div>
        </div>
    </div>
}
const Layout2X2 = ({ platformData }: { platformData: SocialCardProps }) => {
    return <div className={`col-span-2 row-span-2 p-3  rounded-2xl shadow-sm border-solid border border-gray-200 bg-${platformData.bgColor}`}>
        <div>

            <div className='flex justify-between  h-full'>
                <div>
                    <div><Image src={platformData.logo || ''} width={40} height={25} alt={platformData.platformName} /></div>
                    <p>{platformData.platformName}</p>
                </div>
                <div>
                    <button className='text-xs'>{platformData.buttonLabel} {platformData.followers}</button>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 grid-rows-2'>
                    {platformData.images.map((image, index) => <Image className={`col-span-1 row-span-1 rounded-md`} src={image} width={100} height={100} alt='image' key={index} />)}
                </div>
            </div>
        </div>
    </div>
}
