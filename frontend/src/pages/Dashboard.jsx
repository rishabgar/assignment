// import { useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import api from "../api/axios";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [tags, setTags] = useState([]);
//   const [tagInput, setTagInput] = useState("");
//   const [image, setImage] = useState(null);
//   const [errors, setErrors] = useState({});

//   const handleTagInput = (e) => {
//     if (e.key === "Enter" || e.key === ",") {
//       e.preventDefault();
//       const newTag = tagInput.trim();
//       if (newTag && !tags.includes(newTag)) {
//         setTags([...tags, newTag]);
//       }
//       setTagInput("");
//     }
//   };

//   const removeTag = (index) => {
//     setTags(tags.filter((_, i) => i !== index));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setImage(file);
//     else setImage(null);
//   };

//   const validate = () => {
//     const errs = {};
//     if (!title || title.length < 3)
//       errs.title = "Title must be at least 3 characters";
//     if (!content || content.length < 10)
//       errs.content = "Content must be at least 10 characters";
//     return Object.keys(errs).length === 0;
//   };

//   //   const fileToBase64 = (file) =>
//   //     new Promise((resolve, reject) => {
//   //       const reader = new FileReader();
//   //       reader.readAsDataURL(file);
//   //       reader.onload = () => resolve(reader.result);
//   //       reader.onerror = (err) => reject(err);
//   //     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const payload = {
//       title,
//       content,
//       tags,
//       views: 564,
//       //   image: image ? await fileToBase64(image) : null,
//     };

//     try {
//       const response = await api.post("/create-post", payload);
//       alert("Post submitted successfully!");

//       setTitle("");
//       setContent("");
//       setTags([]);
//       setTagInput("");
//       setImage(null);
//       setErrors({});
//     } catch (error) {
//       console.error("Error submitting post:", error);
//       alert("Error submitting post");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Create a New Post
//         </h1>

//         <div>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter post title"
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Tags</label>
//           <input
//             type="text"
//             value={tagInput}
//             onChange={(e) => setTagInput(e.target.value)}
//             onKeyDown={handleTagInput}
//             placeholder="Type tag and press Enter or comma"
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <div className="flex flex-wrap mt-2">
//             {tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2 flex items-center gap-1"
//               >
//                 {tag}
//                 <button
//                   type="button"
//                   onClick={() => removeTag(index)}
//                   className="text-blue-900 font-bold"
//                 >
//                   ×
//                 </button>
//               </span>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Upload Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full"
//           />
//           {image && (
//             <img
//               src={URL.createObjectURL(image)}
//               alt="Preview"
//               className="mt-2 max-h-48 rounded shadow"
//             />
//           )}
//         </div>

//         <div>
//           <Editor
//             apiKey="4tyg1vu6g4ho7khgj3iaj9mjky082tynxw2mcun46lvmagg2"
//             value={content}
//             onEditorChange={(newValue) => setContent(newValue)}
//             init={{
//               height: 300,
//               menubar: false,
//               plugins: ["lists", "link", "paste", "autoresize"],
//               toolbar:
//                 "undo redo | bold italic underline | bullist numlist | link",
//               branding: false,
//             }}
//           />
//           {errors.content && (
//             <p className="text-red-500 mt-1">{errors.content}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
//         >
//           Submit Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
// -------------------------------------------------------------------------------------------
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import api from "../api/axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState(null); // for preview
  const [imageUrl, setImageUrl] = useState(null); // URL from server
  const [errors, setErrors] = useState({});

  // Handle comma-separated tags
  const handleTagInput = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // Upload image to server and store URL
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file); // show preview

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await api.post("/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImageUrl(res.data.url); // save URL for post payload
      alert("Image uploaded successfully!");
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Failed to upload image");
      setImage(null);
      setImageUrl(null);
    }
  };

  const validate = () => {
    const errs = {};
    if (!title || title.length < 3)
      errs.title = "Title must be at least 3 characters";
    if (!content || content.length < 10)
      errs.content = "Content must be at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      title,
      content,
      tags,
      views: 0,
      image: imageUrl || null, // include uploaded image URL
    };

    try {
      await api.post("/create-post", payload);
      alert("Post submitted successfully!");

      // reset form
      setTitle("");
      setContent("");
      setTags([]);
      setTagInput("");
      setImage(null);
      setImageUrl(null);
      setErrors({});
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Error submitting post");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create a New Post
        </h1>

        {/* Title */}
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Tags</label>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInput}
            placeholder="Type tag and press Enter or comma"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex flex-wrap mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2 flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="text-blue-900 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mt-2 max-h-48 rounded shadow"
            />
          )}
        </div>

        {/* Content */}
        <div>
          <Editor
            apiKey="4tyg1vu6g4ho7khgj3iaj9mjky082tynxw2mcun46lvmagg2"
            value={content}
            onEditorChange={(newValue) => setContent(newValue)}
            init={{
              height: 300,
              menubar: false,
              plugins: ["lists", "link", "paste", "autoresize"],
              toolbar:
                "undo redo | bold italic underline | bullist numlist | link",
              branding: false,
            }}
          />
          {errors.content && (
            <p className="text-red-500 mt-1">{errors.content}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
