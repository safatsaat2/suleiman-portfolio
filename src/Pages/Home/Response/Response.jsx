
const Response = () => {
  return (
    <div className="carousel w-full py-20">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full lg:flex items-center justify-around">
            <img
          src="https://i.ibb.co/vdwvqmm/strategy-1-1.png"
          className="mx-10 h-80 rounded-lg"
        />
        <div className="flex items-center justify-around flex-col">
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-[#b5a7e7] ">Business Plan</h1>
        <p className="text-center text-base w-80 mx-auto  pt-5">I work on top-level execution through strategic planning aligned with your business goals and objectives. This includes conducting market research, analyzing industry trends, and identifying growth opportunities.</p>
        </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full lg:flex items-center justify-around">
            <img
          src="https://i.ibb.co/PDMX2Xz/replicate-prediction-rpjtmprbfsdc4doqgokvjc6ige.jpg"
          className="mx-10 h-80 rounded-lg"
        />
        <div className="flex items-center justify-around flex-col">
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-[#b5a7e7] pt-5">Client Response</h1>
        <p className="text-center text-base w-80 mx-auto  pt-5">I look after my clients by responding correctly! Responding effectively to clients is a critical skill in building and maintaining successful relationships. By providing prompt and appropriate responses, I demonstrate professionalism, attentiveness, and a commitment to meeting the needs of my clients.</p>
        </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full lg:flex items-center justify-around">
            <img
          src="https://i.ibb.co/2SR059S/replicate-prediction-4ub7dzzbotlmroeffizrf2bzue-2.jpg"
          className="mx-10 h-80 rounded-lg"
        />
        <div className="flex items-center justify-around flex-col">
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-[#b5a7e7] pt-5">Successful Work</h1>
        <p className="text-center text-base w-80 mx-auto  pt-5">Spending time and working successfully can lead to personal fulfillment and achievement. If you have any specific questions or anything you`d like to discuss about business management, productivity, or work-related topics, feel free to let me know!</p>
        </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Response;
