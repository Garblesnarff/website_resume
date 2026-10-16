import { Link } from 'react-router-dom';
import { Project } from '../types';
import { isPlaceholder, prettyUrl, toUrl } from '../config';

/** One project as a row in the work ledger. */
const ProjectRow = ({ project }: { project: Project }) => {
  const { links } = project;
  const live = links?.preview && !isPlaceholder(links.preview) ? links.preview : undefined;

  return (
    <article id={project.id} className="group grid scroll-mt-24 gap-x-10 gap-y-4 border-t border-birch-line py-10 md:grid-cols-12">
      <div className="md:col-span-4">
        <h3 className="text-[2.1rem] text-ink md:text-[2.4rem]">
          <Link to={`/projects/${project.id}`} className="transition-colors hover:text-spruce">
            {project.title}
          </Link>
        </h3>
      </div>

      <div className="md:col-span-6">
        <p className="max-w-measure text-[1.08rem]">{project.goal}</p>
        <p className="mt-3 max-w-measure text-[0.98rem] leading-relaxed text-slate">{project.outcome}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
          {project.skills.map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-row flex-wrap gap-x-6 gap-y-2 font-ui text-[1.02rem] font-bold md:col-span-2 md:flex-col">
        <li>
          <Link to={`/projects/${project.id}`} className="text-spruce hover:underline hover:underline-offset-4">
            Details
          </Link>
        </li>
        {live && (
          <li>
            <a href={toUrl(live)} target="_blank" rel="noopener noreferrer" className="text-spruce hover:underline hover:underline-offset-4">
              Live site
              <span className="sr-only"> ({prettyUrl(live)})</span>
            </a>
          </li>
        )}
        {links?.githubTool && (
          <li>
            <a href={links.githubTool} target="_blank" rel="noopener noreferrer" className="text-spruce hover:underline hover:underline-offset-4">
              Source
            </a>
          </li>
        )}
      </ul>
    </article>
  );
};

export default ProjectRow;
