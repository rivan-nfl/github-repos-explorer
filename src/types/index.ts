export interface GitHubUser {
    login: string;
    avatar_url: string;
}

export interface GitHubRepo {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
}
