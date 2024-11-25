function ProductCardsInfo({ title, Text1, Text2, Text3}) {
  return (
    <div className="bg-slate-200 p-4 w-96">
      <div className="list-disc">
        <p>{title}</p>
        <br />
        <div className="ml-8">
            <li className="pb-2">
                {Text1}
            </li>
            <li>{Text2}</li>
        </div>
      </div>
    </div>
  );
}

export default ProductCardsInfo;
