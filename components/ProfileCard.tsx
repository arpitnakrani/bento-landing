import Image from 'next/image'
import React from 'react'
import portfolioImg from "../public/assets/images/portfolioImg.jpeg"

const ProfileCard = () => {
    return (
        <div>
            <div className="col-span-1">
                <div className="flex-col">
                    <Image className="rounded-full object-cover h-[181px]" width={181} height={181} src={portfolioImg} alt="img" />
                    <div className="ml-2 w-[calc(100%-8px)] max-w-[min(500px,100%-8px)] xl:max-w-[min(500px,calc(100vw_-_1000px))] mt-8">
                        <h1 className="text-4xl font-bold mt-3">Mia W.</h1>
                        <p className="text-xl mt-3">Mia W, a persona of elegance and mystery, wanders through the realms of creativity and innovation. Her essence, a tapestry of dreams and reality, weaves stories that dance on the edge of imagination. In the land of ideas, where thoughts crystallize into tangible creations, Mia M </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard