import { FaMusic, FaHeart, FaShare, FaComment } from "react-icons/fa";
import avtar from "../assets/Untitled-1.png";
export const VideoInfo = () => {
  return (
    <div className="flex flex-row">
      <img src={avtar} alt="avt" className="w-[50px] h-[50px] rounded-full" />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="#" className="text-xl font-bold hover:underline">
            he is doing code
          </a>
          <a href="#" className="text-xl">
            prgam setup
          </a>
        </div>

        <div>let is visit he</div>
        <div className="flex flex-row items-center">
          <FaMusic />
          <span className="ml-3">play music</span>
        </div>
      </div>
      <div>
        <button className="p-1 pl-3 pr-3 border-2 border-red-500 rounded-md">
          Folow
        </button>
      </div>
    </div>
  );
};

export const VideoContent = () => {
  return (
    <div className="flex flex-row mb-8">
      <iframe
        className="w-[80%] h-[600px] ml-[50px] rounded-md mt-4"
        src=""
        title="Hãy Để Con Trai Bà Bán Bánh Bánh Bánh Mì Lo Lo Lo Cho Em Remix - Phúc Du X Đại Mèo Remix |hot tiktok"
        frameBorder="0"
        loop
      ></iframe>
      <div className=" flex flex-col justify-end ml-4">
        <div className="text-center mb-2">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center hover:bg-red-500">
            <FaHeart />
          </div>
          <span className="text-xl">23</span>
        </div>
        <div className="text-center mb-2">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center hover:bg-red-500">
            <FaComment />
          </div>
          <span className="text-xl">23</span>
        </div>
        <div className="text-center mb-2">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center hover:bg-red-700">
            <FaShare />
          </div>
          <span className="text-xl">23</span>
        </div>
      </div>
    </div>
  );
};

export const Video = () => {
  return (
    <div className="max-w-[600px] snap-start">
      <VideoInfo />
      <VideoContent />
    </div>
  );
};
