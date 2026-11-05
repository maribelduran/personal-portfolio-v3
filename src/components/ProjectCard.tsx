const ProjectCard = ({ title, description, href }: { title: string; description: string; href: string }) => {
    return (

        <article className="project-card">
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <a
                href={href}
                target="_blank"
            >View {title}. Opens in a new tab</a>
        </article>

    );
};

export default ProjectCard;
