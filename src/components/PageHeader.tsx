import { ReactNode } from 'react';

interface PageHeaderProps {
  title: ReactNode;
  intro?: ReactNode;
  kicker?: ReactNode;
  children?: ReactNode;
  /** Use 'md' for long titles. */
  size?: 'lg' | 'md';
}

/** Night band at the top of every inner page. */
const PageHeader = ({ title, intro, kicker, children, size = 'lg' }: PageHeaderProps) => (
  <section className="relative on-night grain bg-night text-birch">
    <div className="wrap pb-16 pt-14 md:pb-24 md:pt-20">
      {kicker && <div className="meta rise mb-5 text-fog">{kicker}</div>}
      <h1
        className={`rise max-w-5xl uppercase leading-[0.86] text-birch ${
          size === 'lg' ? 'text-[clamp(3.25rem,8vw,7rem)]' : 'text-[clamp(2.75rem,6vw,5rem)]'
        }`}
      >{title}</h1>
      {intro && (
        <p className="rise mt-8 max-w-2xl text-xl leading-relaxed text-fog" style={{ animationDelay: '120ms' }}>
          {intro}
        </p>
      )}
      {children && (
        <div className="rise mt-10" style={{ animationDelay: '200ms' }}>
          {children}
        </div>
      )}
    </div>
  </section>
);

export default PageHeader;
