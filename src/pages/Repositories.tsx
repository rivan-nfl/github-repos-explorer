import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserRepos } from "../services/githubApi";
import type { GitHubRepo } from "../types";
import RepoList from "../components/RepoList";

const Repositories = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            try {
                const data = await getUserRepos(username!);
                setRepos(data);
            } catch {
                alert("Failed to fetch repositories.");
            }
            setLoading(false);
        };
        fetchRepos();
    }, [username]);

    return (
        <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6">
            <h1 className="text-2xl font-bold mb-4">{username}'s Repositories</h1>
            {loading ? <p>Loading...</p> : <RepoList repos={repos} />}
        </div>
    );
};

export default Repositories;
