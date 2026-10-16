import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Skills = lazy(() => import('./pages/Skills'));
const Creative = lazy(() => import('./pages/Creative'));
const Contact = lazy(() => import('./pages/Contact'));
const LearningResources = lazy(() => import('./pages/LearningResources'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Go to the top on a new page; go to the anchor when the URL has one. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Pages load lazily, so the anchor may not exist yet. Try for up to 3 seconds.
    let tries = 0;
    let timer: number | undefined;
    const tryScroll = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
      } else if (tries++ < 30) {
        timer = window.setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Layout>
        <Suspense fallback={<div className="min-h-[70vh] bg-night" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
}

export default App;
