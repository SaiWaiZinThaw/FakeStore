const Searchbox = () => {
  return (
    <div className="w-6/12 flex items-center justify-center">
      <div className="searchbox justify-self-center flex justify-between bg-white bg-opacity-90 p-2 text-lg w-[400px] rounded-md border border-black ">
        <input
          type="text"
          className="px-2 w-11/12 border-r border-black outline-none bg-opacity-90 bg-white "
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-default"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
