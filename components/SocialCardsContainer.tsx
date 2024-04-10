import React from 'react';
import SocialLinkCard from './SocialLinkCard';
import { SocialCardProps, } from '@/types/SocialCardProps';

interface SocialCardsContainerProps {
    socialCards: SocialCardProps[];
}

const SocialCardsContainer: React.FC<SocialCardsContainerProps> = ({ socialCards }) => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 p-4">
                {socialCards.map((card, index) => (
                    <div key={index} className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <SocialLinkCard {...card} />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default SocialCardsContainer;