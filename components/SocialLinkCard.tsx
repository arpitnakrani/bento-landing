import { SocialCardProps } from "@/types/SocialCardProps";
import Image, { StaticImageData } from "next/image";
import { IconType } from 'react-icons';

const SocialLinkCard: React.FC<SocialCardProps> = ({ platformName, handle, followers, images, link, logo, buttonBgColor, buttonLabel, cardBgColor, pattern, customLayout, website }) => {
    const renderDefaultLayout = () => (
        <div className={`p-6 rounded-3xl shadow-md ${cardBgColor ?? "bg-white"} border border-solid border-gray-300`}>
            <div className="flex items-center justify-between mb-2">
                {(platformName === "TikTok") ?
                    <div className='border rounded-lg w-fit shadow-md'>
                        <Image src={logo} height={39} width={40} alt="Logo" />
                    </div>
                    : <Image src={logo} height={39} width={40} alt="Logo" />
                }
                <button className={`px-4 py-2 rounded text-white ${buttonBgColor} text-xs font-bold`}>
                    {buttonLabel} {followers}
                </button>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="block mb-4">
                <p className="text-gray-700 text-sm">{handle}</p>
                <p className="text-gray-400 text-xs">{website}</p>
            </a>
            {images.length === 0 ?
                <div className="relative flex justify-between">
                    <div className=" w-5/12 h-52 bg-white border border-solid rounded-lg">
                    </div>
                    <div className="absolute w-5/12 h-56 left-28 -top-9 rounded-lg bg-white border border-solid">
                    </div>
                    <div className=" w-5/12 h-52 rounded-lg bg-white border border-solid">
                    </div>
                </div>
                :
                <div className="grid grid-cols-3 gap-2">
                    {images.map((image, index) => (
                        <Image width={128} height={128} key={index} src={image} alt={`${platformName} content`} className="w-full h-auto rounded-md" />
                    ))}
                </div>
            }
        </div >
    );

    // Custom card layout
    const renderCustomLayout = () => (
        <div className={`p-6 rounded-3xl shadow-md ${cardBgColor ?? "bg-white"} border border-solid border-gray-300`}>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-between w-fit">
                    <div>
                        {(platformName === "Youkid") ?
                            <div className='p-2 border rounded-lg w-fit shadow-md'>
                                <Image src={logo} height={24} width={24} alt="Logo" />
                            </div>
                            : <Image src={logo} height={39} width={40} alt="Logo" />
                        }

                        <div className="my-2">
                            <p className="text-gray-700 text-sm">{handle}</p>
                            <p className=" text-gray-400 text-xs">{website}</p>
                        </div>
                    </div>
                    {buttonLabel &&
                        <button className={`px-4 py-2 rounded-full text-white ${buttonBgColor} text-xs font-bold mt-3`}>
                            {buttonLabel} {followers}
                        </button>
                    }

                </div>
                <div className={`grid ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${platformName} content`}
                            width={173}
                            height={127}
                            className={`rounded-lg w-fit ${images.length === 1 ? 'col-span-2' : ''} aspect-[4/3]`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    // Conditional rendering based on the customLayout prop
    return customLayout === 'custom' ? renderCustomLayout() : renderDefaultLayout();
};

export default SocialLinkCard;