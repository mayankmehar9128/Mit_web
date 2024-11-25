function ProductCards({ number, title, Text }) {
  return (
    <div className="rlative z-20 hover:bg-slate-500 cursor-pointer transition duration-500 ease-in-out text-white p-4 isolate aspect-video w-72 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
        <div className="absolute -z-10 top-0 text-7xl font-extrabold text-gray-400">
          <p>{number}</p>
        </div>
        <div className="mt-5 flex flex-col items-start">
          <div>
            <p className="text-3xl font-bold">{title}</p>
              <br />
            <p className="text-lg">{Text}</p> 
          </div>
          <br />
          <div className="mt-2 flex items-center justify-center gap-5">
            <i class="fa-solid fa-arrow-right"></i>
            <a href="/"><p className="text-blue-600">Learn More</p></a>
          </div>
        </div>

    </div>
  );
}

export default ProductCards;
