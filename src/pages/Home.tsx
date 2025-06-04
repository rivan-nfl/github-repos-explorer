import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import { searchUsers } from "../services/githubApi";
import type { GitHubUser } from "../types";

const Home = () => {
    const [users, setUsers] = useState<GitHubUser[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query: string) => {
        setLoading(true);
        try {
            const data = await searchUsers(query);
            setUsers(data);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to fetch users.');
        }
        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6">
            <SearchBar onSearch={handleSearch} />
            {loading ? <p className="mt-4">Loading...</p> : <UserList users={users} />}
        </div>
    );
};

export default Home;
