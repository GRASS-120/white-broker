import React from "react";
import { mainPageData } from "../../../context/mainPageData";

const Skills = () => {
    return (
        <div className="bg-[#5B41FF]">
            <div className="max-w-[1440px]  justify-center text-white flex flex-wrap m-auto container">
                <div className="flex  my-7 mx-6 lg:mx-[70px] items-center max-w-xs">
                    <img className="p-5" src="like.png" alt="" />
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
                    <img className="p-5" src="dab.png" alt="" />
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
                    <img className="p-5" src="clock.png" alt="" />
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
                    <img className="p-5" src="Shield.png" alt="" />
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
                    <img className="p-5" src="handshake.png" alt="" />
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
                    <img className="p-5" src="circle-question.png" alt="" />
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

export default Skills