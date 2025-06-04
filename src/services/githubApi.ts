import axios from "axios";

export const searchUsers = async (query: string) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=5`);
    return res.data.items;
};

export const getUserRepos = async (username: string) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    return res.data;
};
