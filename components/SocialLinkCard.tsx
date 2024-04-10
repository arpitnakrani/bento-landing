import { SocialCardProps } from "@/types/SocialCardProps";
import Image, { StaticImageData } from "next/image";

const SocialLinkCard: React.FC<SocialCardProps> = ({ platformName, handle, followers, images, link, logo, buttonBgColor, buttonLabel, cardBgColor, pattern, customLayout, website }) => {

    const renderDefaultLayout = () => (
        <div className={`p-6 rounded-3xl shadow-md ${cardBgColor ?? "bg-white"} border border-solid border-gray-300 h-full`}>
            <div className="grid grid-row-3">
                <div className="row-span-1">
                    <div className="flex items-center justify-between mb-2">
                        {(platformName === "TikTok") ?
                            <div className='border rounded-lg w-fit shadow-md'>
                                <Image src={logo ?? ""} height={39} width={40} alt="Logo" />
                            </div>
                            : <Image src={logo ?? ""} height={39} width={40} alt="Logo" />
                        }
                        <button className={`px-4 py-2 rounded text-white ${buttonBgColor} text-xs font-bold`}>
                            {buttonLabel} {followers}
                        </button>
                    </div>
                </div>
                <div className="row-span-1">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="block mb-4">
                        <p className="text-gray-700 text-sm mt-2">{handle}</p>
                        <p className="text-gray-400 text-xs mt-1">{website}</p>
                    </a>
                </div>
                <div className="row-span-1">
                    {images.length === 0 ?
                        <div className="relative flex justify-between mt-10">
                            <div className=" w-5/12 h-48 bg-white border border-solid rounded-lg">
                            </div>
                            <div className="absolute w-5/12 h-56 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white border border-solid">
                            </div>
                            <div className=" w-5/12 h-48 rounded-lg bg-white border border-solid">
                            </div>
                        </div>
                        :
                        <div className="grid grid-cols-3 gap-2 mt-14">
                            {images.map((image, index) => (
                                <Image width={128} height={128} key={index} src={image} alt={`${platformName} content`} className="w-full h-auto rounded-md" />
                            ))}
                        </div>
                    }
                </div>
            </div>



        </div >
    );

    // Custom card layout
    const renderCustomLayout = () => (
        <div className={`p-6 rounded-3xl shadow-md ${cardBgColor ?? "bg-white"} border border-solid border-gray-300 h-full`}>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-between w-fit">
                    <div>
                        {(platformName === "Youkid" || platformName === "Email") ?
                            <div className='p-2 border rounded-lg w-fit shadow-md'>
                                <Image src={logo ?? ""} height={24} width={24} alt="Logo" />
                            </div>
                            : <Image src={logo ?? ""} height={39} width={40} alt="Logo" />
                        }

                        <div className="my-2">
                            <p className="text-gray-700 text-sm mt-2">{handle}</p>
                            <p className=" text-gray-400 text-xs mt-1">{website}</p>
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

    const renderImageOnlyCard = () => (
        <div >
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`${platformName} content`}
                    width={411}
                    height={368}
                    className={`rounded-3xl w-fit aspect-[3/3] object-cover`}
                />
            ))}
        </div>
    );

    // Conditional rendering based on the customLayout prop
    return customLayout === 'imageOnly' ? renderImageOnlyCard() : (customLayout === 'custom' ? renderCustomLayout() : renderDefaultLayout());
};

export default SocialLinkCard;