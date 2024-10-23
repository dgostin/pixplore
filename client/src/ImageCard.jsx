import React from "react";

const ImageCard = ({ image, openModal, setSelectedImageUrl }) => {
  const tags = image.tags.split(",");

  function handleClick() {
    setSelectedImageUrl(image.largeImageURL);
    openModal();
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-sm overflow-hidden shadow-lg border-2 border-slate-800 rounded-3xl bg-stone-100">
        <a href="#!" onClick={handleClick} className="text-blue-500 underline">
          <img
            src={image.webformatURL}
            alt=""
            className="w-full"
            loading="lazy"
          />
        </a>

        <div className="px-6 py-4">
          <div className="font-bold text-stone-700 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
