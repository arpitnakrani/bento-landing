import Image from 'next/image'
import React from 'react'
import portfolioImg from "../public/assets/images/portfolioImg.jpeg"
import bentoBtnImg from "../public/assets/images/socialLinkImages/bentoBtnImg.svg"


const ProfileCard = () => {
    return (
        <div className='relative'>
            <div className='lg:sticky top-0'>
                <div className="col-span-1">
                    <div className="flex-col">
                        <div>
                            <Image className="rounded-full object-cover h-[180px]" width={180} height={180} src={portfolioImg} alt="img" />
                            <div className="ml-2 w-[calc(100%-8px)] max-w-[min(500px,100%-8px)] xl:max-w-[min(500px,calc(100vw_-_1000px))] mt-8">
                                <h1 className="text-4xl font-bold mt-3">Mia W.</h1>
                                <p className="text-lg mt-3">Mia W, a persona of elegance and mystery, wanders through the realms of creativity and innovation. Her essence, a tapestry of dreams and reality, weaves stories that dance on the edge of imagination. In the land of ideas, where thoughts crystallize into tangible creations, Mia M </p>
                            </div>
                        </div>
                        <div className='fixed bottom-14 bg-white p-2 hidden lg:block'>
                            <div className='flex gap-4'>
                                <button className='py-3 px-3.5 flex items-center text-white bg-customBlue font-semibold text-xs rounded-lg'><Image className='ml-2' width={18} height={18} src={bentoBtnImg} alt='btnImg' /> Create Your Bento</button>
                                <button className='py-3 px-3.5 flex items-center text-slate-600 font-semibold text-xs rounded-lg hover:bg-gray-50'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfileCard