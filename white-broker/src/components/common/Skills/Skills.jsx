import React from "react";
import { mainPageData } from "../../../context/mainPageData";

const Skills = () => {
    return (
        <div className="bg-[#5B41FF]">
            <div className="max-w-[1440px]  justify-center text-white flex flex-wrap m-auto container">
                <div className="flex  my-7 mr-10 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-4 w-[78px] mr-1" src="like.png" alt="" />
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
                    <img className="p-4 w-[78px] mr-1" src="dab.png" alt="" />
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
                    <img className="p-4 w-[78px] mr-1" src="clock.png" alt="" />
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
                    <img className="p-4 w-[78px] mr-1" src="Shield.png" alt="" />
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
                    <img className="p-4 w-[78px] mr-1" src="handshake.png" alt="" />
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
                    <img className="p-4 w-[78px] mr-1" src="circle-question.png" alt="" />
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

export default Skills