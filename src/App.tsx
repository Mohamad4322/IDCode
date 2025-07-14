import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import CriticalCSS from './components/CriticalCSS';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const CaseStudyPage = React.lazy(() => import('./pages/CaseStudyPage'));
const AIAdvisor = React.lazy(() => import('./pages/AIAdvisor'));

// Service Pages
const CustomSoftware = React.lazy(() => import('./pages/services/CustomSoftware'));
const ProductDevelopment = React.lazy(() => import('./pages/services/ProductDevelopment'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const CloudSolutions = React.lazy(() => import('./pages/services/CloudSolutions'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const QualityAssurance = React.lazy(() => import('./pages/services/QualityAssurance'));
const UIUXDesign = React.lazy(() => import('./pages/services/UIUXDesign'));
const DevOpsServices = React.lazy(() => import('./pages/services/DevOpsServices'));

// New Service Pages
const ApplicationDevelopment = React.lazy(() => import('./pages/services/ApplicationDevelopment'));
const PocDevelopment = React.lazy(() => import('./pages/services/PocDevelopment'));
const CyberSecurity = React.lazy(() => import('./pages/services/CyberSecurity'));
const SustainabilityConsulting = React.lazy(() => import('./pages/services/SustainabilityConsulting'));
const Support = React.lazy(() => import('./pages/services/Support'));
const FinOps = React.lazy(() => import('./pages/services/FinOps'));
const VRARMR = React.lazy(() => import('./pages/services/VRARMR'));
const InternetOfThings = React.lazy(() => import('./pages/services/InternetOfThings'));
const NearshoreDevelopment = React.lazy(() => import('./pages/services/NearshoreDevelopment'));

// Industry Pages
const Healthcare = React.lazy(() => import('./pages/industries/Healthcare'));
const FinancialServices = React.lazy(() => import('./pages/industries/FinancialServices'));
const RetailEcommerce = React.lazy(() => import('./pages/industries/RetailEcommerce'));
const Manufacturing = React.lazy(() => import('./pages/industries/Manufacturing'));
const Education = React.lazy(() => import('./pages/industries/Education'));
const RealEstate = React.lazy(() => import('./pages/industries/RealEstate'));
const Logistics = React.lazy(() => import('./pages/industries/Logistics'));
const Energy = React.lazy(() => import('./pages/industries/Energy'));

// New Industry Pages
const Government = React.lazy(() => import('./pages/Government'));
const Insurance = React.lazy(() => import('./pages/Insurance'));
const Hospitality = React.lazy(() => import('./pages/Hospitality'));
const Automotive = React.lazy(() => import('./pages/Automotive'));
const MediaEntertainment = React.lazy(() => import('./pages/MediaEntertainment'));
const Agriculture = React.lazy(() => import('./pages/Agriculture'));

// Blog Post Pages
const AIInHealthcare = React.lazy(() => import('./pages/blog/AIInHealthcare'));
const CloudMigrationStrategies = React.lazy(() => import('./pages/blog/CloudMigrationStrategies'));
const RetailEcommerceTrends = React.lazy(() => import('./pages/blog/RetailEcommerceTrends'));
const IDCodeExpansion = React.lazy(() => import('./pages/blog/IDCodeExpansion'));
const SustainableSoftware = React.lazy(() => import('./pages/blog/SustainableSoftware'));

function App() {
  return (
    <Router>
      <CriticalCSS />
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
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
            
            {/* Blog Post Routes */}
            <Route path="/blog/ai-in-healthcare" element={<AIInHealthcare />} />
            <Route path="/blog/cloud-migration-strategies" element={<CloudMigrationStrategies />} />
            <Route path="/blog/retail-ecommerce-trends" element={<RetailEcommerceTrends />} />
            <Route path="/blog/id-code-expansion" element={<IDCodeExpansion />} />
            <Route path="/blog/sustainable-software" element={<SustainableSoftware />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
