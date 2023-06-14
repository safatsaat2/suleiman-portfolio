
const MyService = () => {
    return (
        <div className="py-20 lg:py-12 bg-slate-900">
            <h1 className="text-3xl lg:text-7xl text-[#b5a7e7] text-center font-bold">My Services</h1>
            <div className="grid lg:grid-cols-3 gap-10 mt-16 mx-2">
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">Keyword research</h1>
                    <p>Identifying relevant keywords and phrases that users search for in search engines</p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">On-page optimization</h1>
                    <p>Optimizing website elements such as meta tags, headings, content, and URLs to make them more search engine-friendly.
                    </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">Off-page optimization</h1>
                    <p>Building high-quality backlinks from other websites to improve the website`s authority and credibility.</p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">Technical SEO</h1>
                    <p>Ensuring that the website has proper site architecture, is mobile-friendly, has a fast page loading times, and is accessible to search engine crawlers.
                    </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">Content creation and optimization</h1>
                    <p>Developing high-quality, keyword-rich content that is valuable to users and aligns with search engine algorithms.
                    </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">Local SEO</h1>
                    <p>Optimizing a website for local search queries, including optimizing Google My Business listings and managing online reviews.
                    </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">SEO audits</h1>
                    <p>Conduct comprehensive audits of websites to identify areas for improvement and develop an SEO strategy.

                    </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl text-center shadow-md hover:-translate-y-3 duration-500">
                    <h1 className="text-lg font-semibold text-[#b5a7e7]">Monitoring and reporting</h1>
                    <p>Tracking website performance, keyword rankings, and organic traffic, and providing regular reports on progress and recommendations for further optimization.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyService;