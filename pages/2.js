export default function One() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-4">
        <div className="w-ful h-1/5 bg-purple-700"></div>
        <div className="w-full h-1/5 gap-4 flex">
          <div className="w-full h-full bg-purple-700"></div>
          <div className="w-full h-full bg-purple-700"></div>
        </div>
        <div className="w-ful h-1/5 bg-purple-700"></div>
        <div className="w-full h-1/5 gap-4 flex">
          <div className="w-full h-full bg-purple-700"></div>
          <div className="w-full h-full bg-purple-700"></div>
        </div>
        <div className="w-ful h-1/5 bg-purple-700"></div>
      </div>
    </>
  );
}
