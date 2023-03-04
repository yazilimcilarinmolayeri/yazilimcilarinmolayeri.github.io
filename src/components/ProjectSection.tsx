import { SiGithub } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { RxDotFilled } from "react-icons/rx";
import { useState, useEffect } from "react";
import IProject from "../types/IProject";
import { get } from "../services/request";

function ProjectSection() {
    const [projects, setProjects] = useState<IProject[]>([]);

    const fetchProjects = async () => {
        const repos = await get(
            "https://api.github.com/orgs/yazilimcilarinmolayeri/repos"
        );
        const data: IProject[] = repos.map((repo: IProject) => {
            return {
                html_url: repo.html_url,
                name: repo.name,
                description: repo.description,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
            };
        });

        setProjects(data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section className="pt-20">
            <div className="_container">
                <h1 className="text-5xl text-h1-title mb-12">Projeler</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects &&
                        projects
                            .sort(
                                (a, b) =>
                                    b.stargazers_count - a.stargazers_count
                            )
                            .map((project, key) => (
                                <a
                                    key={key}
                                    href={project.html_url}
                                    target="blank"
                                    className="project-box"
                                >
                                    <div className="flex items-center gap-x-4">
                                        <SiGithub size={24} />{" "}
                                        <span className="text-blue text-xl font-bold hover:text-black">
                                            {project.name}
                                        </span>
                                    </div>
                                    <p className="text-h1-title">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-between sm:justify-start sm:gap-x-8">
                                        <div className="project-box-item">
                                            <RxDotFilled
                                                size={20}
                                                className="text-blue"
                                            />{" "}
                                            {project.language === null
                                                ? "Markdown"
                                                : project.language}
                                        </div>
                                        <div className="project-box-item">
                                            <AiFillStar size={20} />{" "}
                                            {project.stargazers_count}
                                        </div>
                                        <div className="project-box-item">
                                            <CgGitFork size={20} />{" "}
                                            {project.forks_count}
                                        </div>
                                    </div>
                                </a>
                            ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
