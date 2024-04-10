import React from 'react';
import { SocialCardProps } from '@/types/SocialCardProps';
import { SocialMedialCard } from './SocialMedialCard';

interface SocialMediaFeedProps {
    socialCards: SocialCardProps[];
}

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({ socialCards }) => {
    return (
        <div className="max-w-screen-lg mx-auto  p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 grid-rows">
                {socialCards.map((card, index) => (
                    <SocialMedialCard colSpan={card.colSpan} rowSpan={card.rowSPan} platformData={card} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SocialMediaFeed;