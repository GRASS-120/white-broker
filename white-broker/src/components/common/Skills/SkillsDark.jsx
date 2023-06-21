import React from "react";
import { mainPageData } from "../../../context/mainPageData";

const SkillsDark = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1440px]  justify-center text-[#5B41FF] flex flex-wrap m-auto container">
                <div className="flex  my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="like_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="dab_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>
                <div className="flex my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="clock_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="Shield_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="handshake_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>

                <div className="flex my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="circle-question_p.png" alt="" />
                    <div>
                        <div className=" text-xl font-bold ">
                            {mainPageData.description.like.title}
                        </div>
                        <div>
                        {mainPageData.description.like.subtitle}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsDark;