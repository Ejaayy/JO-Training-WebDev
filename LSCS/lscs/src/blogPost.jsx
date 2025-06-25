export default function BlogPost({ id, title, content }) {
  return (
    <>
      <div className=" bg-black text-white p-6 rounded-xl drop-shadow-xl flex flex-col gap-4 min-w-[500px] max-w-1/4">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl hover:bg-green-500">{title || "Title"}</h1>
        </div>
        <div className="flex text-center">
          <p className="text-md center">
            {content ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium suscipit itaque fugit numquam at earum ex minus perferendis? Nobis id explicabo ipsum, accusantium adipisci ducimus obcaecati perferendis asperiores eveniet!"}
          </p>
        </div>
      </div>
    </>
  );
}