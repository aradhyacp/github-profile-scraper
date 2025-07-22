import React, { useEffect } from "react";
import useGithubData from "../hooks/useGithubData";

const HeroSection = ({ userName }) => {
  const { userData, userRepoList } = useGithubData(userName);
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
        <table className="flex-1">
  <thead>
    <tr className="bg-[#fcfaf8] border border-b-0 border-[#e8dace] rounded-xl">
      <th className="px-4 py-3 text-left text-[#1c140d] w-[400px] text-sm font-medium leading-normal">Name</th>
      <th className="px-4 py-3 text-left text-[#1c140d] w-[400px] text-sm font-medium leading-normal">Description</th>
      <th className="px-4 py-3 text-left text-[#1c140d] w-60 text-sm font-medium leading-normal">Language</th>
      <th className="px-14 flex justify-center py-3 text-left text-[#1c140d] w-[400px] text-sm font-medium leading-normal">Last Updated</th>
    </tr>
  </thead>
  <tbody>
    {userRepoList.map((repo) => (
      <tr key={repo.id} className="border border-[#e8dace]">
        <td className="h-[72px] px-4 py-2 w-[400px] text-[#1c140d] text-sm font-normal leading-normal">
          {repo.name}
        </td>
        <td className="h-[72px] px-4 py-2 w-[500px] text-[#9c7049] text-sm font-normal leading-normal">
          {repo.description || "No description"}
        </td>
        <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
          <div className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4ede7] text-[#1c140d] text-sm font-medium leading-normal w-full">
            <span className="truncate">{repo.language || "N/A"}</span>
          </div>
        </td>
        <td className="h-[72px] flex justify-center px-14 py-2 w-[400px] text-[#9c7049] text-sm font-normal leading-normal">
          {repo.updated_at}
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default HeroSection;
