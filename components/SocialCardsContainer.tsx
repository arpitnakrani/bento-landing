import React from 'react';
import SocialLinkCard from './SocialLinkCard';
import { SocialCardProps } from '@/types/SocialCardProps';
import { SocialMedialCard } from './SocialMedialCard';

interface SocialCardsContainerProps {
    socialCards: SocialCardProps[];
}

const SocialCardsContainer: React.FC<SocialCardsContainerProps> = ({ socialCards }) => {
    return (
        <div className="max-w-screen-lg mx-auto  py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 grid-rows-10">
                {/* {socialCards.map((card, index) => (
                    <SocialMedialCard colSpan={1} rowSpan={2} key={index}/>
                ))} */}
                <SocialMedialCard colSpan={2} rowSpan={1} platformData={{ ...socialCards[0] }} />
                <SocialMedialCard colSpan={2} rowSpan={1} platformData={{ ...socialCards[0] }} />
                <SocialMedialCard colSpan={1} rowSpan={1} platformData={{ ...socialCards[0] }} />
                <SocialMedialCard colSpan={2} rowSpan={2} platformData={{ ...socialCards[0] }} />
            </div>
        </div>
    );
};

export default SocialCardsContainer;