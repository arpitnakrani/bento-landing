import React from 'react';
import SocialLinkCard from './SocialLinkCard';
import { SocialCardProps } from '@/types/SocialCardProps';

interface SocialCardsContainerProps {
    socialCards: SocialCardProps[];
}

const SocialCardsContainer: React.FC<SocialCardsContainerProps> = ({ socialCards }) => {
    return (
        <div className="max-w-screen-lg mx-auto  py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:grid-rows-6">
                {socialCards.map((card, index) => (
                    <div key={index} className={`col-span-1 ${card.colSpan ?? ""} ${card.rowSpan ?? ""}`}>
                        <SocialLinkCard {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialCardsContainer;