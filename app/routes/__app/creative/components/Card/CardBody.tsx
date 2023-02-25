export default function CardBody({project}) {

  return (
    <div className="flex flex-col p-6">
      <a
        href={project.url}
        target="_blank"
        rel="noopener"
        title={projet.title}
        className="link text-2xl"
      >
        {project.title}
      </a>

      <p className="text-xs text-gray-600 dark:text-gray-400">
        {project.description}
      </p>
    </div>
  );
}
