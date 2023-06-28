const PurpleBlocks = () => {
   return (
      <div className=" mx-3 my-9">
         <div className="m-auto flex max-w-[1440px] flex-wrap lg:flex-nowrap justify-center">
            <div className="mx-3  my-3  w-[310px] rounded-md bg-[#5B41FF] p-4 text-white">
               от <span className=" lg:text-3xl font-bold">7.5%</span> годовых
               процентная ставка
            </div>
            <div className="mx-3  my-3  w-[310px] rounded-md bg-[#5B41FF] p-4 text-white">
               <span className=" lg:text-3xl font-bold">15</span> минут
               предварительное решение
            </div>
            <div className="mx-3  my-3 w-[310px] rounded-md bg-[#5B41FF] p-4 text-white">
               <span className=" lg:text-3xl font-bold">95% </span>
               <p>одобрение</p>
            </div>
            <div className="mx-3  my-3  w-[310px] rounded-md bg-[#5B41FF] p-4 text-white">
               до <span className=" lg:text-3xl font-bold">5</span> лет{' '}
               <p>срок кредитования</p>
            </div>
         </div>
      </div>
   );
};

export default PurpleBlocks;
