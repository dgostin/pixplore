import React, { useState } from "react";
const defaultVals = {
  term: "",
  image_type: "all",
  orientation: "all",
  category: "",
  min_width: 0,
  min_height: 0,
  colors: "",
  editors_choice: false,
  order: "popular",
};
const ImageSearchForm = ({ submitForm }) => {
  const [formData, setFormData] = useState(defaultVals);

  const width = "";

  const categories = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  const colors = [
    "grayscale",
    "transparent",
    "red",
    "orange",
    "yellow",
    "green",
    "turquoise",
    "blue",
    "lilac",
    "pink",
    "white",
    "gray",
    "black",
    "brown",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    submitForm(formData);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(defaultVals);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto px-4 py-3 bg-gray-300 border-2 border-slate-700 rounded-lg text-sm mb-5"
    >
      <div className="flex flex-wrap gap-5 mb-4">
        {/* Search Term */}
        <div>
          <label className="block text-gray-700 font-bold">Search Term</label>
          <input
            type="text"
            name="term"
            value={formData.term}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
          />
        </div>

        {/* Image Type */}
        <div>
          <label className="block text-gray-700 font-bold">Image Type</label>
          <select
            name="image_type"
            value={formData.image_type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="photo">Photo</option>
            <option value="illustration">Illustration</option>
            <option value="vector">Vector</option>
          </select>
        </div>

        {/* Orientation */}
        <div>
          <label className="block text-gray-700 font-bold">Orientation</label>
          <select
            name="orientation"
            value={formData.orientation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>

        {/* Category (as select) */}
        <div>
          <label className="block text-gray-700 font-bold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Min Width */}
        <div className="w-28">
          <label className="block text-gray-700 font-bold">Min Width</label>
          <input
            type="number"
            name="min_width"
            value={formData.min_width}
            step={100}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Min Height */}
        <div className="w-28">
          <label className="block text-gray-700 font-bold">Min Height</label>
          <input
            type="number"
            name="min_height"
            value={formData.min_height}
            step={100}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block text-gray-700 font-bold">Color</label>
          <select
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Editor's Choice */}
        <div className={"flex items-center w-" + width}>
          <input
            type="checkbox"
            name="editors_choice"
            checked={formData.editors_choice}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700 font-bold">Editor's Choice</label>
        </div>

        {/* Order */}
        <div className={"w-" + width}>
          <label className="block text-gray-700 font-bold">Order</label>
          <select
            name="order"
            value={formData.order}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="popular">Popular</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        <div>
          <input type="submit" className="hidden" />{" "}
          {/* This needs to be here so that hitting "Enter" submits the form */}
          <button
            className="w-20 bg-stone-700 text-white hover:text-black rounded-md hover:bg-yellow-500 text-lg font-semibold py-2 mt-5 ml-3"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <input
          type="submit"
          className="w-1/3 p-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 text-lg font-semibold"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default ImageSearchForm;
