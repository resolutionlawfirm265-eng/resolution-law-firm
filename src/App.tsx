import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import CaseLaws from './pages/CaseLaws'
import CaseLawDetail from './pages/CaseLawDetail'
import Expert from './pages/Expert'
import Reviews from './pages/Reviews'
import NewsEvents from './pages/NewsEvents'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import WhatsAppButton from './components/WhatsAppButton'
import SocialSidebar from './components/SocialSidebar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-laws" element={<CaseLaws />} />
          <Route path="/case-law/:slug" element={<CaseLawDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialSidebar />
    </div>
  )
}
