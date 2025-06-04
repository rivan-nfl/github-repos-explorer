import type { GitHubRepo } from "../types";

interface Props {
    repos: GitHubRepo[];
}

const RepoList = ({ repos }: Props) => (
    <ul className="my-4 space-y-3">
        {repos.map((repo) => (
            <li
                key={repo.name}
                className="p-4 border border-gray-200 rounded shadow-sm hover:shadow transition flex justify-between"
            >
                <div>
                    <a
                        href={repo.html_url}
                        target="_blank"
                        className="text-blue-600 font-semibold text-base sm:text-lg"
                    >
                        {repo.name}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">{repo.stargazers_count} ★</p>
            </li>
        ))}
    </ul>
);

export default RepoList;
