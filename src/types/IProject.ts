interface IProject {
    html_url: string;
    name: string;
    description: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
}

export default IProject;
