import React, { useState, useEffect } from "react";
// import ImageSearch from "./ImageSearch";
import ImageCard from "./ImageCard";
import Modal from "./Modal";
import ImageSearchForm from "./ImageSearchForm";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [queryData, setQueryData] = useState({
    term: "",
    image_type: "all",
    orientation: "all",
    category: "",
    min_width: 0,
    min_height: 0,
    colors: "",
    editors_choice: false,
    order: "popular",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tell the backend you're sending JSON
      },
      body: JSON.stringify(queryData), // Convert the object to a JSON string
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [queryData]);

  return (
    <>
      <div className="container mx-auto pt-4">
        <Header />
        <ImageSearchForm submitForm={(data) => setQueryData(data)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                openModal={openModal}
                setSelectedImageUrl={setSelectedImageUrl}
              />
            ))}
          </div>
        )}
        <div className="mb-3"></div>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <img
            src={
              selectedImageUrl
                ? selectedImageUrl
                : "https://via.placeholder.com/400"
            }
            alt="Sample"
            className="rounded-lg max-h-[90vh]"
          />
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default App;
