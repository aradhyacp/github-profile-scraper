import { useEffect, useState } from "react";

const useGithubData = (userName) =>{
    const [userData,setUserData]=useState({})
    const [userRepoList,setUserRepoList]= useState([])
    const base_url = `https://api.github.com/users/${userName}`;
    const repo_list = `https://api.github.com/users/${userName}/repos`

    useEffect(()=>{
        if (!userName) return;
        const fetchuserData = async () => {
            const response = await fetch(base_url,{
                method: "GET"
            })
            const json = await response.json()
            setUserData(json)
        }
        const fetchuserRepo = async () => {
            const response = await fetch(repo_list,{
                method: "GET"
            })
            const json = await response.json()
            setUserRepoList(json)
        }
        fetchuserData();
        fetchuserRepo();
    },[userName])
    return { userData, userRepoList };
}

export default useGithubData;