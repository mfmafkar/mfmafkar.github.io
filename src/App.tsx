import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Skills from './components/Skills'; // Import your Skills component
import Projects from './components/Projects'; // Import your Projects component
import Blogs from './components/Blogs'; // Import your Blogs component
import WorkExperience from './components/WorkExperience'; // Import your Work Experience component
import Header from './components/Header'; // Import your Header component
import { blogs, experiences, projects, skills } from './data';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/skills" element={<Skills skills={skills} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route
          path="/work-experience"
          element={<WorkExperience experiences={experiences} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
