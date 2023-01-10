export default function Home() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <div className="w-screen h-full ">
      <div className="h-20 w-full bg-slate-300 flex justify-between items-center px-4">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center">
          <div className="text-slate-100 text-3xl font-extrabold">T</div>
        </div>
        <div className="flex items-center justify-end gap-4"></div>
        <div className="hidden md:block font-extrabold">Нүүр</div>
        <div className="px-2 py-1 rounded text-gray-800 font-extrabold">
          Сургалт
        </div>
      </div>
      <div className="h-screen w-full dark:bg-gray-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
      </div>
    </div>
  );
}
