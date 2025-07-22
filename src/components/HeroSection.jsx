import React, { useEffect } from "react";
import useGithubData from "../hooks/useGithubData";

const HeroSection = ({ userName }) => {
  const { userData } = useGithubData(userName);
  useEffect(() => {
    console.log(userData);
  });
  return (
    <div className="min-h-screen flex-col px-60 mt-10 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-15 items-center">
          <div className="">
            <img src={userData.avatar_url} alt="pfp" className="rounded-full w-[220px]" />
          </div>
          <div className="flex flex-col text-2xl">
            <div className="">{userData.name}</div>
            <div className="text-[#b7906e]">@{userData.login}</div>
            <div className="text-[#b7906e]">{userData.id}</div>
            <div className="text-[#b7906e]">{userData.created_at}</div>
          </div>
        </div>
        <div className="ml-5">{userData?.bio || "No bio"}</div>
        <div className="flex gap-6 items-center">
          <a
            href={`https://github.com/users/follow?target=${userName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-bold px-6 py-2 bg-[#f4ede7] rounded-lg"
          >
            Follow
          </a>
          <a className="cursor-pointer font-bold px-6 py-2 bg-[#f38524] rounded-lg" href={`https://github.com/${userName}`} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
        <div className="font-black text-3xl">Stats</div>
        <div className="flex gap-8">
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">{userData.public_repos}</div>
            <div className="o-font text-[16px]">Repositories</div>
          </div>
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">{userData.public_gists}</div>
            <div className="o-font text-[16px]">Gists</div>
          </div>
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">{userData.followers}</div>
            <div className="o-font text-[16px]">Followers</div>
          </div>
          <div className="flex flex-col border border-[#e8dace] p-3 rounded-lg items-start w-[150px] flex-1 basis-[fit-content] gap-3">
            <div className="font-black text-3xl">{userData.following}</div>
            <div className="o-font text-[16px]">Following</div>
          </div>
        </div>
        <div className="font-black text-3xl">Repositories</div>
      </div>
    </div>
  );
};

export default HeroSection;
