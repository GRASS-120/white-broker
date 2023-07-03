import React from "react";
import { mainPageData } from "../../../context/mainPageData";

const SkillsDark = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1440px]  justify-center text-[#5B41FF] flex flex-wrap m-auto container">
                <div className="flex  my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="like_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="dab_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.confidence.title}
                        </div>
                        <div>
                        {mainPageData.description.confidence.subtitle}
                        </div>
                    </div>
                </div>
                <div className="flex my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="clock_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.time.title}
                        </div>
                        <div>
                        {mainPageData.description.time.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="Shield_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.safe.title}
                        </div>
                        <div>
                        {mainPageData.description.safe.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="handshake_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.trust.title}
                        </div>
                        <div>
                        {mainPageData.description.trust.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="circle-question_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.help.title}
                        </div>
                        <div>
                        {mainPageData.description.help.subtitle}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsDark;