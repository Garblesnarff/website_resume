import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/projects';
import { projectDetails } from '../data/project-details';
import { isPlaceholder, prettyUrl, toUrl } from '../config';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const index = projects.findIndex((p) => p.id === projectId);
  const project = projects[index];

  if (!project) {
    return (
      <PageHeader title="Project not found" intro="That project does not exist, or its address changed.">
        <Link to="/projects" className="btn btn-solid">
          See all projects
        </Link>
      </PageHeader>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const details = projectDetails[project.id] ?? [];
  const { links } = project;

  const linkList: { label: string; href: string }[] = [];
  if (links?.preview && !isPlaceholder(links.preview)) linkList.push({ label: 'Live site', href: toUrl(links.preview) });
  if (links?.githubTool) linkList.push({ label: 'GitHub', href: links.githubTool });
  if (links?.githubRepo2) linkList.push({ label: 'GitHub', href: links.githubRepo2 });
  if (links?.githubDatabase) linkList.push({ label: 'GitHub (database and website)', href: links.githubDatabase });
  if (links?.video && !isPlaceholder(links.video)) linkList.push({ label: 'Demo video', href: links.video });

  return (
    <>
      <PageHeader
        kicker={
          <Link to="/projects" className="inline-flex items-center gap-2 hover:text-birch">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
        }
        title={project.title}
        size={project.title.length > 28 ? 'md' : 'lg'}
        intro={project.goal}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <article className="reading lg:col-span-8">
            <h2 className="!pt-0">Process</h2>
            <p>{project.process}</p>

            <h2>Outcome</h2>
            <p>{project.outcome}</p>

            {details.map((block, i) => (
              <div key={i}>
                {block.personal && (
                  <figure className="my-10 border-l-[3px] border-sodium-deep pl-6">
                    {block.personal.map((para, j) => (
                      <p key={j} className={`font-serif text-[1.35rem] italic leading-snug text-ink ${j ? 'mt-4' : ''}`}>
                        {para}
                      </p>
                    ))}
                  </figure>
                )}
                {block.heading && <h3>{block.heading}</h3>}
                {block.paragraphs?.map((para, j) => (
                  <p key={j} className="mt-3">
                    {para}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-3">
                    {block.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          <aside className="lg:col-span-4" aria-label="Project facts">
            <div className="space-y-10 lg:sticky lg:top-24">
              {linkList.length > 0 && (
                <div>
                  <h2 className="border-t-[3px] border-ink pt-4 text-3xl text-ink">Links</h2>
                  <ul className="mt-4 divide-y divide-birch-line">
                    {linkList.map((l) => (
                      <li key={l.href} className="py-3">
                        <span className="meta block text-slate">{l.label}</span>
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-link break-words">
                          {prettyUrl(l.href)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="border-t-[3px] border-ink pt-4 text-3xl text-ink">Skills used</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {next && next.id !== project.id && (
        <section className="border-t border-birch-line">
          <Link to={`/projects/${next.id}`} className="wrap group flex flex-col gap-2 py-12 md:py-16">
            <span className="meta text-slate">Next project</span>
            <span className="font-display text-5xl font-extrabold uppercase leading-[0.9] text-ink transition-colors group-hover:text-spruce md:text-6xl">
              {next.title}
            </span>
          </Link>
        </section>
      )}
    </>
  );
};

export default ProjectDetail;
