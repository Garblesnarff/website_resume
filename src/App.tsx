import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LearningResources from './pages/LearningResources';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail'; // Import the new ProjectDetail component
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Add the dynamic route */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learning-resources" element={<LearningResources />} /> {/* Add the Learning Resources route */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
