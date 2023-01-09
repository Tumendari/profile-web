export default function One() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-4">
        <div className="w-full h-1/5 bg-purple-700"></div>
        <div className="w-full h-full gap-4 flex">
          <div className="w-4/5 h-full flex flex-col gap-4">
            <div className="w-full h-2/5  bg-purple-700"></div>
            <div className="w-full h-full flex gap-4 bg-white-500">
              <div className="w-1/2 h-full  bg-purple-700"></div>
              <div className="w-1/2 h-full  bg-purple-700"></div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-purple-700"></div>
        </div>
      </div>
    </>
  );
}
