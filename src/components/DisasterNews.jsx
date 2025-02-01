import React, { useEffect, useState } from 'react';

const DisasterNews = () => {
  const [news, setNews] = useState([]);
  const selectedCategory = "natural disaster";

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_KEY;
    const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${apiKey}`;
    
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => setNews(data.articles.slice(0, 6)))
    //   .catch(error => console.error('Error fetching news:', error));
  }, []);

  const noImg = "https://via.placeholder.com/150";

  return (
    <div className="w-full h-[50%] bg-[#111214] rounded-lg grid grid-cols-3 grid-rows-2 gap-2 p-4">
      {news.map((article, index) => (
        <div key={index} className="cursor-pointer" onClick={() => window.open(article.url, '_blank')}>
          <img src={article.image || noImg} alt="news" className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2 flex justify-between items-center text-white">
            {article.title}
            <i className="fa-regular fa-bookmark text-white" onClick={(e) => e.stopPropagation()}></i>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DisasterNews;
