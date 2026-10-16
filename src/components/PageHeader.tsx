import { ReactNode } from 'react';
import SkyCanvas from './SkyCanvas';

interface PageHeaderProps {
  title: ReactNode;
  intro?: ReactNode;
  kicker?: ReactNode;
  children?: ReactNode;
  /** Use 'md' for long titles. */
  size?: 'lg' | 'md';
}

/** Night band at the top of every inner page, under a quiet aurora. */
const PageHeader = ({ title, intro, kicker, children, size = 'lg' }: PageHeaderProps) => (
  <section className="relative overflow-hidden bg-night text-birch on-night">
    <div aria-hidden="true" className="absolute inset-0">
      <SkyCanvas quiet phase={3} aurora={0.55} />
    </div>
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/55 to-night/10" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-night/60" />
    <div className="wrap relative pb-16 pt-14 md:pb-24 md:pt-20">
      {kicker && <div className="meta rise mb-5 text-fog">{kicker}</div>}
      <h1
        className={`rise max-w-5xl uppercase leading-[0.86] text-birch [text-shadow:0_2px_30px_rgb(var(--night)/0.6)] ${
          size === 'lg' ? 'text-[clamp(3.25rem,8vw,7rem)]' : 'text-[clamp(2.75rem,6vw,5rem)]'
        }`}
      >
        {title}
      </h1>
      {intro && (
        <p className="rise mt-8 max-w-2xl text-xl leading-relaxed text-birch/75" style={{ animationDelay: '120ms' }}>
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
