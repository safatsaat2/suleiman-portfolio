import ReactPlayer from "react-player";


const Video = () => {
    const videoStyle = {
        display: 'flex',
        alignItems: 'center',
        
      };
    return (
        <div>

<h1 className="text-3xl lg:text-7xl text-center font-bold text-[#b5a7e7]">Client Review</h1>
            <div className="flex justify-around gap-x-10 items-center mt-10">
            <ReactPlayer url='first_review.mp4' controls={true} width={"300px"}/>
           <ReactPlayer url='sec_review.mp4' controls={true} width={"300px"} />
           <ReactPlayer url='third_review.mp4' controls={true} width={"300px"} style={videoStyle} />
            </div>
            <div className="flex justify-center gap-x-10 items-center mt-10">
            <ReactPlayer url='third_review.mp4' controls={true} />
            </div>
           
                </div>
                );
};

                export default Video;