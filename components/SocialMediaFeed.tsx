'use client'
import React, { useEffect, useState } from 'react';
import { SocialCardProps } from '@/types/SocialCardProps';
import { SocialMedialCard } from './SocialMedialCard';

interface SocialMediaFeedProps {
    socialCards: SocialCardProps[];
}

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({ socialCards }) => {
    const [socialData, setSocialData] = useState<SocialCardProps[]>([]);

    useEffect(() => {
        // Adjust the data whenever the socialCards prop changes
        setSocialData(adjustDataForScreenSize(socialCards));

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [socialCards]);

    // Function to handle window resize
    const handleResize = () => {
        setSocialData(adjustDataForScreenSize(socialCards));
    };

    return (
        <div className="max-w-screen-lg mx-auto lg:p-8 md:p-8 p-4">
            <div className={
                socialData.some(card => card.rowSpan === 2 && card.colSpan === 2 && card.images.length !== 1) ?
                    "grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:gap-6 md:gap-4 gap-3 grid-rows" :
                    "grid  md:grid-cols-2 lg:gap-6 md:gap-4 gap-3 grid-rows"
            }>
                {socialData.map((card, index) => (
                    <SocialMedialCard
                        colSpan={card.colSpan}
                        rowSpan={card.rowSpan}
                        platformData={card}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

const adjustDataForScreenSize = (data: SocialCardProps[]): SocialCardProps[] => {
    const isFullScreen = window.innerWidth > 768;
    return data.map(card => {
        if (card.rowSpan === 2 && card.colSpan === 2 && card.images.length !== 1) {
            return {
                ...card,
                rowSpan: isFullScreen ? 2 : 1,
                colSpan: isFullScreen ? 2 : 1,
            };
        }
        return card;
    });
};

export default SocialMediaFeed;
