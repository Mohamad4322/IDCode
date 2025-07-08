import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AIAdvisor from './pages/AIAdvisor';
import ScrollToTop from './components/ScrollToTop';

// Service Pages
import CustomSoftware from './pages/services/CustomSoftware';
import ProductDevelopment from './pages/services/ProductDevelopment';
import DigitalTransformation from './pages/services/DigitalTransformation';
import CloudSolutions from './pages/services/CloudSolutions';
import DataAnalytics from './pages/services/DataAnalytics';
import QualityAssurance from './pages/services/QualityAssurance';
import UIUXDesign from './pages/services/UIUXDesign';
import DevOpsServices from './pages/services/DevOpsServices';

// New Service Pages
import ApplicationDevelopment from './pages/services/ApplicationDevelopment';
import PocDevelopment from './pages/services/PocDevelopment';
import CyberSecurity from './pages/services/CyberSecurity';
import SustainabilityConsulting from './pages/services/SustainabilityConsulting';
import Support from './pages/services/Support';
import FinOps from './pages/services/FinOps';
import VRARMR from './pages/services/VRARMR';
import InternetOfThings from './pages/services/InternetOfThings';
import NearshoreDevelopment from './pages/services/NearshoreDevelopment';

// Industry Pages
import Healthcare from './pages/industries/Healthcare';
import FinancialServices from './pages/industries/FinancialServices';
import RetailEcommerce from './pages/industries/RetailEcommerce';
import Manufacturing from './pages/industries/Manufacturing';
import Education from './pages/industries/Education';
import RealEstate from './pages/industries/RealEstate';
import Logistics from './pages/industries/Logistics';
import Energy from './pages/industries/Energy';

// New Industry Pages
import Government from './pages/Government';
import Insurance from './pages/Insurance';
import Hospitality from './pages/Hospitality';
import Automotive from './pages/Automotive';
import MediaEntertainment from './pages/MediaEntertainment';
import Agriculture from './pages/Agriculture';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-advisor" element={<AIAdvisor />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          
          {/* Service Routes - English Only */}
          <Route path="/custom-software-development" element={<CustomSoftware />} />
          <Route path="/product-development" element={<ProductDevelopment />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/devops-services" element={<DevOpsServices />} />
          
          {/* New Service Routes - English Only */}
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/poc-development" element={<PocDevelopment />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/sustainability-consulting" element={<SustainabilityConsulting />} />
          <Route path="/support" element={<Support />} />
          <Route path="/finops" element={<FinOps />} />
          <Route path="/vr-ar-mr" element={<VRARMR />} />
          <Route path="/iot" element={<InternetOfThings />} />
          <Route path="/nearshore-development" element={<NearshoreDevelopment />} />
          
          {/* Industry Routes - English Only */}
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/financial-services" element={<FinancialServices />} />
          <Route path="/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/education" element={<Education />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/energy" element={<Energy />} />
          
          {/* New Industry Routes - English Only */}
          <Route path="/government" element={<Government />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/media-entertainment" element={<MediaEntertainment />} />
          <Route path="/agriculture" element={<Agriculture />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;