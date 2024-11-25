function ServiceCards({ title, Text }) {
    return (
        <div className="bg-slate-600 p-4 w-96">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <br />
            <p className="text-xl  text-white">{Text}</p>
        </div>
    );
  }
  
  export default ServiceCards;