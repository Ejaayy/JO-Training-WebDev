import { useState } from "react";
import BlogPost from "./blogPost";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <div className="min-h-screen bg-[url(/background2.svg)] bg-cover bg-center ">
        <div className="px-12 pt-12 pb-4 flex justify-center">
          <div className=" bg-black text-white p-4 rounded-xl drop-shadow-xl flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-3xl">Create Blog</h1>
              <p>Create your own blog using this form below...</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <p className="text-lg font-bold">Title:</p>
                <input
                  type="text"
                  className="bg-white text-black rounded-lg"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="flex gap-4">
                <p className="text-lg font-bold">Content:</p>
                <input
                  type="text"
                  className="bg-white text-black rounded-lg"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-white text-black rounded-lg px-4 py-2 hover:bg-black hover:text-white transition duration-200"
                onClick={() => {
                  if (title != "" && content != "") {
                    setBlogs([...blogs, { title, content }]);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" bg-black text-white p-4 rounded-xl drop-shadow-xl flex flex-col gap-8">
            <div className="flex items-center gap-4 min-w-1/2">
              <p className="text-lg font-bold">Delete Blog:</p>
              <input
                type="text"
                className="bg-white text-black rounded-lg"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <button
                className="bg-white text-black rounded-lg px-4 py-2 hover:bg-black hover:text-white transition duration-200"
                onClick={(e) => {
                  setBlogs(blogs.filter((blog) => blog.title !== title));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="flex p-8">
          <div className="flex justify-center flex-wrap gap-2">
            {blogs.map((blog, index) => {
              return (
                <>
                  <BlogPost
                    title={blog.title}
                    content={blog.content}
                    key={index}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
