import React from "react";

const PurpleBlocks = () => {
    return (
        <div className=" my-9 mx-3">
            <div className="max-w-[1440px] m-auto flex flex-wrap md:justify-between justify-center">
                <div className="bg-[#5B41FF]  w-[305px] my-3 mx-3 p-4 rounded-md text-white">от <span className=" text-3xl font-bold">7.5%</span> годовых процентная ставка</div>
                <div className="bg-[#5B41FF]  w-[305px] my-3 mx-3 p-4 rounded-md text-white"><span className=" text-3xl font-bold">15</span> минут предварительное решение</div>
                <div className="bg-[#5B41FF]  w-[305px] my-3 mx-3 p-4 rounded-md text-white"><span className=" text-3xl font-bold">95% </span><p>одобрение</p></div>
                <div className="bg-[#5B41FF]  w-[305px] my-3 mx-3 p-4 rounded-md text-white">до <span className=" text-3xl font-bold">5</span> лет <p>срок кредитования</p></div>
            </div>
        </div>
        
    )
}

export default PurpleBlocks