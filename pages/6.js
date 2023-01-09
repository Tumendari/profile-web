export default function One() {
  return (
    <>
      <div className="w-full h-screen flex gap-4">
        <div className="w-1/3 h-full bg-purple-700"></div>
        <div className="w-2/3 h-full gap-4 flex flex-col">
          <div className="w-full h-32 bg-purple-700"></div>
          <div className="w-full h-full flex gap-4">
            <div className="w-1/2 h-full bg-purple-700"></div>
            <div className="w-1/2 h-full bg-purple-700"></div>
          </div>
          <div className="w-full h-32 bg-purple-700"></div>
        </div>
      </div>
    </>
  );
}
