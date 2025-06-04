import type { GitHubUser } from "../types";
import { Link } from "react-router-dom";

interface Props {
    users: GitHubUser[];
}

const UserList = ({ users }: Props) => (
    <ul className="mt-4">
        {users.map((user) => (
            <li
                key={user.login}
                className="p-3 border-b flex items-center gap-4 hover:bg-gray-50 rounded transition"
            >
                <Link to={`/repos/${user.login}`} className="flex items-center gap-4 w-full">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="text-base sm:text-lg font-medium">{user.login}</span>
                </Link>
            </li>
        ))}
    </ul>
);

export default UserList;
