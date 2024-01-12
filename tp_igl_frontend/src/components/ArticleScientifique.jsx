import React from 'react';
import favoritIcon from '../assets/favoritIcon.svg'
import favoritAddedIcon from '../assets/favoritAddedIcon.svg'
import { useState , useContext } from 'react';
import heartIcon from '../assets/heartIcon.svg'
import { ReadMorePage } from '../pages/ReadMorePage';
import { ArticleContext } from '../ArticleContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';




export const ArticleScientifique = ({ articleCh, onAddToFavorites, isFavoritesPage }) => {
  const [isFavorite, setIsFavorite] = useState(isFavoritesPage);
  const navigate = useNavigate();
  const { setArticleCh } = useAuth();

  const handleAddToFavorites = () => {
    onAddToFavorites();
    setIsFavorite(!isFavorite);
  };

  const handlereadMore = () => {
    setArticleCh({
      articleCh
    });
    navigate('../readMoreeLink');
  };


  const { titre: title, resume: content, readMoreLink, url_pdf: pdfLink } = articleCh;

  const resumeWords = content.split(' ');
  const omittedResume = resumeWords.slice(1).join(' ');

  return (
    <div className="lg:max-w-[450px]  md:max-w-[300px] md:mx-auto mx-[45px] bg-white p-4 shadow-md rounded-md mb-4">
      {/* Title */}
      <div className='flex h-20'>
        <h2 className="text-xl font-bold text-[#002366] mb-2 font-roboto">{title}</h2>
        {isFavoritesPage && <img src={heartIcon} alt="" className="w-6 ml-2 h-6 " />}
      </div>

      {/* Content */}
      <p className="text-gray-700 overflow-hidden md:max-h-36 max-h-70  mb-2 font-roboto">
        {omittedResume}
      </p>

       {/* Gray Lines */}
       <div className="border-t border-b border-gray-300 my-2"></div>


    <div className="flex justify-between items-center">
    {/* Read More Button */}
    <a onClick={handlereadMore} target="_blank" rel="noopener noreferrer" className="text-[#3692FA] font-montserrat hover:underline">
      Read More
    </a>

    {/* PDF and Add to Favorites Buttons */}
    <div className="flex items-center">
        {/* PDF Button */}
        <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="text-[#3692FA] font-montserrat hover:underline">
        PDF
      </a>

        {/* Add to Favorites Button */}
        <button onClick={handleAddToFavorites} className="ml-2 bg-transparent text-[#3692FA] font-montserrat px-4 py-2 rounded-md">
        <img src={isFavorite ? favoritAddedIcon : favoritIcon} alt="" className="w-full h-auto" />
      </button>
    </div>
    </div>
    </div>
  );
};
