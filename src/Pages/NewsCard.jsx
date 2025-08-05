
const NewsCard = ({ news }) => {



    return (

        <div className="card w-full bg-base-100 shadow-md font-['Roboto']">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={news.author.img}
                        alt={news.author.name}
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{news?.author.name}</h3>
                        <p className="text-xs text-gray-500">{news?.author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <button className="btn btn-ghost btn-circle btn-xs">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2V10a2 2 0 012-2h2m0-4h4m-4 0a4 4 0 00-4 4v0a4 4 0 004 4h4a4 4 0 004-4v0a4 4 0 00-4-4z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="px-4">
                <h2 className="text-lg font-bold mb-2 leading-tight">
                    {news.title}
                </h2>
            </div>
            <figure className="w-full">
                <img src={news.image_url} alt="News" className="w-full h-56 object-cover" />
            </figure>
            <div className="px-4 py-3 text-sm text-gray-600">
                <p className="line-clamp-3">{news.details}</p>
                <p className="text-orange-500 font-semibold mt-1 cursor-pointer">
                    Read More
                </p>
            </div>
            <div className="flex justify-between items-center px-4 py-2 border-t text-sm text-gray-700">
                <div className="flex items-center gap-1 text-orange-500">
                    <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m-6 0H6a2 2 0 01-2-2V9.618a2 2 0 012.447-1.894L9 10m6 4v2a2 2 0 11-4 0v-2m0 0H9"
                        />
                    </svg>
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>

    );
};

export default NewsCard;