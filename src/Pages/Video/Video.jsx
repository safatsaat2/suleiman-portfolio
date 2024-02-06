import ReactPlayer from "react-player";


const Video = () => {
    const videoStyle = {
        display: 'flex',
        alignItems: 'center',
        
      };
    return (
        <div className="py-20 lg:py-20">

<h1 className="text-3xl lg:text-7xl text-center font-bold text-[#b5a7e7]">Client Review</h1>
            <div className="flex-col lg:flex-row flex justify-around gap-10  items-center mt-10">
            <ReactPlayer url='first_review.mp4' controls={true} width={"300px"}/>
           <ReactPlayer url='sec_review.mp4' controls={true} width={"300px"} />
           <ReactPlayer url='third_review.mp4' controls={true} width={"300px"} style={videoStyle} />
            </div>
                </div>
                );
};

                export default Video;