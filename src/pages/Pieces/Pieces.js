import React from "react";

const Pieces = () => {
  const Pieces_Pieces = ["one", "two", "three", "four", "Five", "Six"];
  return (
    <div>
      <div className="container   m-auto p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 align-middle py-6 justify-items-center gap-14">
        {Pieces_Pieces.map((ele, index) => (
          <div
            className="bg-slate-600	
                    h-40 w-64
                    rounded-md
                    border-slate-800
                    py-2
                    before:content[''] before:w-full before:h-1 before:bg-black
             relative before:absolute before:top-0 before:left-0 overflow-hidden
                    "
          >
            <h1
              className="text-slate-200 decoration-double
              bg-cyan-700
"
            >
              {" "}
              {ele}
            </h1>
            <div className="flex flex-col justify-evenly h-28 container">
              <button className="bg-white rounded-md h-8 font-bold  pointer-events-auto">
                Add first Visit
              </button>
              <button className="bg-white rounded-md font-bold	h-8">
                Add sec Visit
              </button>
              <button className="bg-white rounded-md  font-bold  h-8	">
                Add th Visit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pieces;
