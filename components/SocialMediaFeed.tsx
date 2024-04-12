'use client'
import React, { useEffect, useState } from 'react';
import { SocialMedialCard } from './SocialMedialCard';
import { socialData } from '@/data/social-data';


const SocialMediaFeed: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="max-w-screen-lg mx-auto">
            <div className={'grid  grid-cols-2 md:grid-cols-4 lg:gap-6 md:gap-4 gap-3 grid-rows'}>
                {socialData.map((card, index) => {

                    const colSpan = (card.rowSpan === 2 && isMobile && card.type === 'INFO_FEED') ? 1 : card.colSpan;   //here we are changing the layout of the info feed which has 2 colspan to  1 colspan. the reason is because reference site also done the same
                    const rowSpan = (card.rowSpan === 2 && card.colSpan === 2 && isMobile && card.type === 'INFO_FEED') ? 1 : card.rowSpan  ////here we are changing the layout of the info feed which has 2 colspan and 2 rowspan to  1 colspan
                    return <SocialMedialCard
                        colSpan={colSpan}
                        rowSpan={rowSpan}
                        platformData={card}
                        key={index}
                    />
                }
                )}
            </div>
        </div>
    );
};

export default SocialMediaFeed;
