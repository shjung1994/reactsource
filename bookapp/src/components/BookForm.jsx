import React, { useState } from "react";
import { genres } from "./../util";
import { useNavigate } from "react-router-dom";

const BookForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col gap-2.5 mt-6" method="post" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={formData.title}
        type="text"
        name="title"
        placeholder="Title"
        required
        className="border-2 border-stone-300 p-2 rounded-xs"
      />
      <input
        onChange={handleChange}
        value={formData.author}
        type="text"
        name="author"
        placeholder="Author"
        required
        className="border-2 border-stone-300 p-2 rounded-xs"
      />
      <select
        onChange={handleChange}
        value={formData.gid}
        name="gid"
        className="border-2 border-stone-300 p-2 rounded-xs"
      >
        <option value="">Select Genre</option>
        {genres.map((genre, idx) => (
          <option key={idx} value={idx + 1}>
            {genre}
          </option>
        ))}
      </select>
      <input
        onChange={handleChange}
        value={formData.publishedDate}
        type="date"
        name="publishedDate"
        placeholder="Published Date"
        required
        className="border-2 border-stone-300 p-2 rounded-xs"
      />
      <label>
        <input
          onChange={handleChange}
          checked={!!formData?.available}
          type="checkbox"
          required={!!formData?.available}
          name="available"
          className="border-2 border-stone-300 p-2 rounded-xs mr-1.5"
        />
        Available
      </label>
      <div className="text-center p-2">
        <button
          onClick={() => navigate("/")}
          type="submit"
          className="mx-1 my-6 px-4.5 text-[1.2em] bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700"
        >
          {formData.id ? "Updated" : "Add"}
        </button>
        <button
          onClick={() => navigate("/")}
          type="submit"
          className="mx-1 my-6 px-4.5 text-[1.2em] bg-red-500 text-white rounded-[3px] text-center hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookForm;
