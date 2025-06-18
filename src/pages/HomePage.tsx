export default function HomePage() {
  return (
    <div>
      <div className="bg-[url('./images/larm-rmah-sMs2M-yiqCY-unsplash.jpg')] h-[40em] md:h-screen bg-cover bg-center bg-fixed">
        <div className="bg-[rgba(0,204,255,.1)] h-full relative">
          <div className="absolute bottom-16 left-1/2 -translate-x-[50%]">
            <button className="border-2 border-white p-4 hover:cursor-pointer transition-all shadow-[0_0_5px_white] hover:shadow-[0_0_8px_white] rounded-xs">
              <span className="text-white font-semibold capitalize flex gap-x-3">
                browse our collection
              </span>
            </button>
          </div>
        </div>
        <div className="h-[50em]"></div>
      </div>
    </div>
  );
}
