import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex-col px-60 mt-10 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          <div className="">img here</div>
          <div className="flex flex-col">
            <div className=""></div>
            <div className="text-[#b7906e]">usernam</div>
            <div className="text-[#b7906e]">join date</div>
          </div>
        </div>
        <div className="">text here</div>
        <div className="flex gap-6 items-center">
          <div className="cursor-pointer font-bold px-6 py-2 bg-[#f4ede7] rounded-lg">
            Follow
          </div>
          <div className="cursor-pointer font-bold px-6 py-2 bg-[#f38524] rounded-lg">
            View Profile
          </div>
        </div>
        <div className="font-black text-3xl">Stats</div>
        <div className="flex gap-8">
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">120</div>
            <div className="o-font text-[16px]">Repositories</div>
          </div>
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">33</div>
            <div className="o-font text-[16px]">Gists</div>
          </div>
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">500</div>
            <div className="o-font text-[16px]">Followers</div>
          </div>
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">200</div>
            <div className="o-font text-[16px]">Following</div>
          </div>
        </div>
        <div className="font-black text-3xl">Repositories</div>
      </div>
    </div>
  );
};

export default HeroSection;
