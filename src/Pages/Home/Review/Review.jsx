
const Review = () => {

    const reviewInfo = [
        {
            name: "Lea Marlene",
            location: "United State",
            review: "Exceptional service that consistently goes above and beyond expectations. The team's unparalleled expertise and attention to detail have significantly contributed to the success of our projects. I wholeheartedly recommend their services for anyone seeking top-notch quality and results.",
            img: "https://i.ibb.co/VmbPfjT/Whats-App-Image-2024-01-27-at-00-34-40-7ddfad15.jpg"
        },
        
        {
            name: "Nolan Granberg",
            location: "United State",
            review: "I'm extremely pleased with the service I received from Md Sulyman. He was efficient, courteous, and attentive to my needs. He made the entire process seamless, and the results were outstanding.",
            img: "https://i.ibb.co/94HCN6L/Whats-App-Image-2024-01-27-at-00-16-34-5f32d35f-1.jpg"
        },
        {
            name: "Gabriela Balazs",
            location: "Romania",
            review: "de când am început să o colaborez cu el canalul meu de YouTube a început să crească din ce în ce mai mult, are servicii foarte bune la un preț extrem de bun 🥰🤎 nu doar că îți poate fi un manager pentru YouTube dar îți poate fi și un prieten",
            img: "https://i.ibb.co/DLN9prQ/Whats-App-Image-2024-01-27-at-00-17-43-0f0f5d5f.jpg"
        },
        
        {
            name: "Alec Martin",
            location: "United State",
            review: "Great guy and great company to work with. He is someone who does what they say they are going to do. Honest respectful business man. I recommend his services to anyone wanting to promote their services through social media. I personally experienced exponential growth on a spiritual YouTube page that I offer free teachings and services.",
            img: "https://i.ibb.co/wrKGGfL/Whats-App-Image-2024-01-27-at-00-14-35-8fc6be2f-1.jpg"
        },
        {
            name: "Seth Nelitz",
            location: "Canada",
            review: "Their commitment to excellence is evident in every aspect of their work. From communication to execution, they maintain professionalism that sets them apart. Working with them has been a game-changer for our business.",
            img: "https://i.ibb.co/m4Yd28C/Whats-App-Image-2024-01-27-at-00-37-09-43ddd894.jpg"
        },
        {
            name: "Daniyel Love",
            location: "United State",
            review: "Consistently impressed by their ability to deliver outstanding results on time and within budget. Their proactive approach to problem-solving and commitment to client satisfaction make them an invaluable partner. Highly recommend for anyone looking for a reliable and skilled team.",
            img: "https://i.ibb.co/74k95Rz/Whats-App-Image-2024-01-27-at-00-41-27-f2c8aab0.jpg"
        },
        {
            name: "Laurie Rolling",
            location: "United State",
            review: '"My experience with MD SULYMAN has been nothing short of exceptional. From the outset, His clear communication and keen understanding of my needs set the tone for a seamless collaboration. MD SULYMAN consistently demonstrated a remarkable level of professionalism, exceeding my expectations at every turn. His proactive approach, attention to detail, and unwavering commitment to delivering results showcase a true dedication to client satisfaction. Without a doubt, MD SULYMAN has proven to be an invaluable partner, and I wholeheartedly recommend his services to anyone seeking top-notch expertise and a truly positive client experience."🥰🥰',
            img: "https://i.ibb.co/VCvb7MQ/Whats-App-Image-2024-01-27-at-00-19-56-ea0683c5.jpg"
        },
    ]

    return (
        <>
        <h1 className="py-20 lg:py-20 text-3xl lg:text-7xl text-center font-bold text-[#b5a7e7]">Client Testimonial</h1>
        <div className='grid lg:grid-cols-3 gap-10 justify-center mx-2'>
            
            
            {
                reviewInfo.map(card => <div key={card?.name} className="card text-center w-full bg-base-100 p-5 shadow-xl">
                    <figure><img className=' rounded-full w-[176px] h-full object-cover' src={card?.img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-[#704ee7] card-title">{card?.name}</h2>
                        <p className='text-slate-700'>{card?.location}</p>
                        <p className='text-slate-900 text-[12px]'>{card?.review}</p>
                        <div className="card-actions justify-end">
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#704ee7]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#704ee7]"  />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#704ee7]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#704ee7]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#704ee7]" checked />
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
        </>
        
    );
};

export default Review;