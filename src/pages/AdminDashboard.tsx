import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, MessageSquare, Star, LogOut, Plus, Trash2, Eye, EyeOff, Check, X, Edit2, ChevronDown, Mail, Phone, Clock, RefreshCw, BookOpen, Newspaper } from 'lucide-react'
import ImageUpload from '../components/ImageUpload'

interface Blog { id: number; title: string; slug: string; excerpt: string; content: string; category: string; image_url: string; published: boolean; created_at: string; }
interface Message { id: number; name: string; email: string; phone: string; subject: string; message: string; read: boolean; created_at: string; }
interface Review { id: number; name: string; rating: number; comment: string; approved: boolean; created_at: string; }
interface CaseLaw { id: number; title: string; slug: string; excerpt: string; content: string; category: string; court: string; year: string; citation: string; published: boolean; created_at: string; }
interface NewsEvent { id: number; title: string; slug: string; excerpt: string; content: string; type: string; image_url: string; event_date: string; location: string; published: boolean; created_at: string; }

type Tab = 'blogs' | 'messages' | 'reviews' | 'caselaws' | 'newsevents'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('messages')
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [caseLaws, setCaseLaws] = useState<CaseLaw[]>([])
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [blogForm, setBlogForm] = useState({ title: '', slug: '', excerpt: '', content: '', category: 'Civil Law', image_url: '', published: false })
  const [showCaseLawForm, setShowCaseLawForm] = useState(false)
  const [showNewsForm, setShowNewsForm] = useState(false)
  const [editingNews, setEditingNews] = useState<NewsEvent | null>(null)
  const [newsForm, setNewsForm] = useState({ title: '', slug: '', excerpt: '', content: '', type: 'news', image_url: '', event_date: '', location: '', published: false })
  const [editingCaseLaw, setEditingCaseLaw] = useState<CaseLaw | null>(null)
  const [caseLawForm, setCaseLawForm] = useState({ title: '', slug: '', excerpt: '', content: '', category: 'Civil Law', court: 'Lahore High Court', year: '2024', citation: '', published: false })

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (!token) { navigate('/admin'); return }
    fetchAll()
  }, [])

  const fetchAll = async () => {
    setLoading(true)
    try {
      const [b, m, r, cl, ne] = await Promise.all([
        fetch('/api/blogs').then(r => r.json()),
        fetch('/api/messages').then(r => r.json()),
        fetch('/api/reviews').then(r => r.json()),
        fetch('/api/caselaws').then(r => r.json()),
        fetch('/api/news-events').then(r => r.json()),
      ])
      setBlogs(Array.isArray(b) ? b : [])
      setMessages(Array.isArray(m) ? m : [])
      setReviews(Array.isArray(r) ? r : [])
      setCaseLaws(Array.isArray(cl) ? cl : [])
      setNewsEvents(Array.isArray(ne) ? ne : [])
    } catch (err) { console.error(err) }
    setLoading(false)
  }

  const logout = () => { localStorage.removeItem('admin_token'); navigate('/admin') }

  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const saveBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    const slug = blogForm.slug || generateSlug(blogForm.title)
    if (editingBlog) {
      await fetch('/api/blogs', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...blogForm, slug, id: editingBlog.id }),
      })
    } else {
      await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...blogForm, slug }),
      })
    }
    setShowBlogForm(false)
    setEditingBlog(null)
    setBlogForm({ title: '', slug: '', excerpt: '', content: '', category: 'Civil Law', image_url: '', published: false })
    fetchAll()
  }

  const deleteBlog = async (id: number) => {
    if (!confirm('Delete this blog post?')) return
    await fetch('/api/blogs', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    fetchAll()
  }

  const editBlog = (blog: Blog) => {
    setEditingBlog(blog)
    setBlogForm({ title: blog.title, slug: blog.slug, excerpt: blog.excerpt, content: blog.content, category: blog.category, image_url: blog.image_url, published: blog.published })
    setShowBlogForm(true)
  }

  const toggleBlogPublish = async (blog: Blog) => {
    await fetch('/api/blogs', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: blog.id, title: blog.title, slug: blog.slug, excerpt: blog.excerpt, content: blog.content, category: blog.category, image_url: blog.image_url, published: !blog.published }),
    })
    fetchAll()
  }

  const toggleMessageRead = async (msg: Message) => {
    await fetch('/api/messages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: msg.id, read: !msg.read }),
    })
    fetchAll()
  }

  const deleteMessage = async (id: number) => {
    if (!confirm('Delete this message?')) return
    await fetch('/api/messages', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    fetchAll()
  }

  const toggleReviewApproval = async (review: Review) => {
    await fetch('/api/reviews', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: review.id, approved: !review.approved }),
    })
    fetchAll()
  }

  const deleteReview = async (id: number) => {
    if (!confirm('Delete this review?')) return
    await fetch('/api/reviews', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    fetchAll()
  }

  const unreadCount = messages.filter(m => !m.read).length
  const pendingReviews = reviews.filter(r => !r.approved).length

  const saveCaseLaw = async (e: React.FormEvent) => {
    e.preventDefault()
    const slug = caseLawForm.slug || generateSlug(caseLawForm.title)
    if (editingCaseLaw) {
      await fetch('/api/caselaws', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...caseLawForm, slug, id: editingCaseLaw.id }) })
    } else {
      await fetch('/api/caselaws', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...caseLawForm, slug }) })
    }
    setShowCaseLawForm(false); setEditingCaseLaw(null)
    setCaseLawForm({ title: '', slug: '', excerpt: '', content: '', category: 'Civil Law', court: 'Lahore High Court', year: '2024', citation: '', published: false })
    fetchAll()
  }

  const deleteCaseLaw = async (id: number) => {
    if (!confirm('Delete this case law?')) return
    await fetch('/api/caselaws', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    fetchAll()
  }

  const editCaseLaw = (cl: CaseLaw) => {
    setEditingCaseLaw(cl)
    setCaseLawForm({ title: cl.title, slug: cl.slug, excerpt: cl.excerpt, content: cl.content, category: cl.category, court: cl.court, year: cl.year, citation: cl.citation, published: cl.published })
    setShowCaseLawForm(true)
  }

  const toggleCaseLawPublish = async (cl: CaseLaw) => {
    await fetch('/api/caselaws', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...cl, published: !cl.published }) })
    fetchAll()
  }

  const saveNews = async (e: React.FormEvent) => {
    e.preventDefault()
    const slug = newsForm.slug || generateSlug(newsForm.title)
    if (editingNews) {
      await fetch('/api/news-events', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...newsForm, slug, id: editingNews.id }) })
    } else {
      await fetch('/api/news-events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...newsForm, slug }) })
    }
    setShowNewsForm(false); setEditingNews(null)
    setNewsForm({ title: '', slug: '', excerpt: '', content: '', type: 'news', image_url: '', event_date: '', location: '', published: false })
    fetchAll()
  }

  const deleteNews = async (id: number) => {
    if (!confirm('Delete this item?')) return
    await fetch('/api/news-events', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    fetchAll()
  }

  const editNews = (ne: NewsEvent) => {
    setEditingNews(ne)
    setNewsForm({ title: ne.title, slug: ne.slug, excerpt: ne.excerpt, content: ne.content, type: ne.type, image_url: ne.image_url, event_date: ne.event_date, location: ne.location, published: ne.published })
    setShowNewsForm(true)
  }

  const toggleNewsPublish = async (ne: NewsEvent) => {
    await fetch('/api/news-events', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...ne, published: !ne.published }) })
    fetchAll()
  }

  const tabs: { key: Tab; label: string; icon: any; badge?: number }[] = [
    { key: 'messages', label: 'Messages', icon: MessageSquare, badge: unreadCount },
    { key: 'blogs', label: 'Blogs', icon: FileText },
    { key: 'caselaws', label: 'Case Laws', icon: BookOpen },
    { key: 'newsevents', label: 'News', icon: Newspaper },
    { key: 'reviews', label: 'Reviews', icon: Star, badge: pendingReviews },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="navy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/uploads/logo_new.png" alt="Logo" className="h-10 brightness-0 invert" />
            <div>
              <h1 className="font-heading text-lg font-bold text-white">Admin Dashboard</h1>
              <p className="text-white/40 text-xs">Resolution Law Firm CMS</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchAll} className="p-2 text-white/50 hover:text-white transition-colors" title="Refresh">
              <RefreshCw size={18} />
            </button>
            <button onClick={logout} className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: 'Messages', count: messages.length, sub: `${unreadCount} unread`, color: 'bg-blue-500' },
            { label: 'Blog Posts', count: blogs.length, sub: `${blogs.filter(b => b.published).length} published`, color: 'bg-green-500' },
            { label: 'Reviews', count: reviews.length, sub: `${pendingReviews} pending`, color: 'bg-amber-500' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-cream-dark">
              <div className={`w-2 h-2 rounded-full ${stat.color} mb-2`} />
              <div className="font-heading text-2xl sm:text-3xl font-bold text-navy">{stat.count}</div>
              <div className="text-slate text-xs sm:text-sm">{stat.label}</div>
              <div className="text-slate/60 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-cream-dark overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.key ? 'gold-gradient text-white shadow-sm' : 'text-slate hover:text-navy hover:bg-cream/50'
              }`}
            >
              <tab.icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab.key ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600'}`}>{tab.badge}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <div className="text-center py-16 text-slate">No messages yet.</div>
                ) : messages.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`bg-white rounded-xl p-5 border transition-all ${
                      msg.read ? 'border-cream-dark' : 'border-gold/30 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`font-semibold ${msg.read ? 'text-slate' : 'text-navy'}`}>{msg.name}</h3>
                          {!msg.read && <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold font-semibold">New</span>}
                        </div>
                        <p className="text-sm text-gold font-semibold mt-0.5">{msg.subject}</p>
                        <p className="text-slate text-sm mt-2 leading-relaxed">{msg.message}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-slate/60">
                          <span className="flex items-center gap-1"><Mail size={12} /> {msg.email}</span>
                          {msg.phone && <span className="flex items-center gap-1"><Phone size={12} /> {msg.phone}</span>}
                          <span className="flex items-center gap-1"><Clock size={12} /> {new Date(msg.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => toggleMessageRead(msg)} className={`p-2 rounded-lg transition-colors ${msg.read ? 'text-slate/40 hover:text-navy hover:bg-cream' : 'text-gold hover:bg-gold/10'}`} title={msg.read ? 'Mark unread' : 'Mark read'}>
                          {msg.read ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                        <button onClick={() => deleteMessage(msg.id)} className="p-2 rounded-lg text-slate/40 hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Blogs Tab */}
            {activeTab === 'blogs' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-lg font-bold text-navy">Blog Posts</h2>
                  <button
                    onClick={() => { setShowBlogForm(true); setEditingBlog(null); setBlogForm({ title: '', slug: '', excerpt: '', content: '', category: 'Civil Law', image_url: '', published: false }) }}
                    className="flex items-center gap-2 px-4 py-2 gold-gradient text-white rounded-lg text-sm font-bold hover:shadow-lg transition-all"
                  >
                    <Plus size={16} /> New Post
                  </button>
                </div>

                {showBlogForm && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-6 border border-cream-dark mb-6"
                  >
                    <h3 className="font-heading text-lg font-bold text-navy mb-4">{editingBlog ? 'Edit Post' : 'New Blog Post'}</h3>
                    <form onSubmit={saveBlog} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-navy mb-1 block">Title *</label>
                          <input type="text" required value={blogForm.title} onChange={e => setBlogForm(p => ({...p, title: e.target.value, slug: generateSlug(e.target.value)}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="Blog post title" />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-navy mb-1 block">Slug</label>
                          <input type="text" value={blogForm.slug} onChange={e => setBlogForm(p => ({...p, slug: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="auto-generated" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-navy mb-1 block">Category</label>
                          <select value={blogForm.category} onChange={e => setBlogForm(p => ({...p, category: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold">
                            {['Civil Law', 'Criminal Law', 'Tax Law', 'Corporate Law', 'Family Law', 'Property Law', 'Legal Updates'].map(c => <option key={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <ImageUpload value={blogForm.image_url} onChange={(url) => setBlogForm(p => ({...p, image_url: url}))} label="Cover Image" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-navy mb-1 block">Excerpt *</label>
                        <textarea required rows={2} value={blogForm.excerpt} onChange={e => setBlogForm(p => ({...p, excerpt: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold resize-none" placeholder="Brief summary..." />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-navy mb-1 block">Content * (HTML supported)</label>
                        <textarea required rows={10} value={blogForm.content} onChange={e => setBlogForm(p => ({...p, content: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold resize-y font-mono text-sm" placeholder="<h2>Introduction</h2><p>Your content here...</p>" />
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={blogForm.published} onChange={e => setBlogForm(p => ({...p, published: e.target.checked}))} className="w-4 h-4 rounded border-cream-dark text-gold focus:ring-gold" />
                          <span className="text-sm font-semibold text-navy">Publish immediately</span>
                        </label>
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="px-6 py-2.5 gold-gradient text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all">
                          {editingBlog ? 'Update Post' : 'Create Post'}
                        </button>
                        <button type="button" onClick={() => { setShowBlogForm(false); setEditingBlog(null) }} className="px-6 py-2.5 border border-cream-dark text-slate rounded-lg text-sm hover:bg-cream transition-colors">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                <div className="space-y-3">
                  {blogs.length === 0 ? (
                    <div className="text-center py-16 text-slate">No blog posts yet. Create your first post!</div>
                  ) : blogs.map(blog => (
                    <div key={blog.id} className="bg-white rounded-xl p-5 border border-cream-dark flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {blog.image_url && <img src={blog.image_url} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" />}
                        <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-navy">{blog.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${blog.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-navy/5 text-navy">{blog.category}</span>
                        </div>
                        <p className="text-slate text-sm mt-1 line-clamp-1">{blog.excerpt}</p>
                        <p className="text-slate/50 text-xs mt-1">{new Date(blog.created_at).toLocaleDateString()}</p>
                      </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => toggleBlogPublish(blog)} className={`p-2 rounded-lg transition-colors ${blog.published ? 'text-green-500 hover:bg-green-50' : 'text-amber-500 hover:bg-amber-50'}`} title={blog.published ? 'Unpublish' : 'Publish'}>
                          {blog.published ? <Eye size={16} /> : <EyeOff size={16} />}
                        </button>
                        <button onClick={() => editBlog(blog)} className="p-2 rounded-lg text-slate/40 hover:text-navy hover:bg-cream transition-colors" title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => deleteBlog(blog.id)} className="p-2 rounded-lg text-slate/40 hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Laws Tab */}
            {activeTab === 'caselaws' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-lg font-bold text-navy">Case Laws</h2>
                  <button onClick={() => { setShowCaseLawForm(true); setEditingCaseLaw(null); setCaseLawForm({ title: '', slug: '', excerpt: '', content: '', category: 'Civil Law', court: 'Lahore High Court', year: '2024', citation: '', published: false }) }} className="flex items-center gap-2 px-4 py-2 gold-gradient text-white rounded-lg text-sm font-bold hover:shadow-lg transition-all">
                    <Plus size={16} /> New Case Law
                  </button>
                </div>
                {showCaseLawForm && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 border border-cream-dark mb-6">
                    <h3 className="font-heading text-lg font-bold text-navy mb-4">{editingCaseLaw ? 'Edit Case Law' : 'New Case Law'}</h3>
                    <form onSubmit={saveCaseLaw} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Title *</label><input type="text" required value={caseLawForm.title} onChange={e => setCaseLawForm(p => ({...p, title: e.target.value, slug: generateSlug(e.target.value)}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="Case title" /></div>
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Citation *</label><input type="text" required value={caseLawForm.citation} onChange={e => setCaseLawForm(p => ({...p, citation: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="PLD 2024 SC 123" /></div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Category</label><select value={caseLawForm.category} onChange={e => setCaseLawForm(p => ({...p, category: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold">{['Civil Law','Criminal Law','Constitutional Law','Tax Law','Corporate Law','Family Law','Property Law'].map(c => <option key={c}>{c}</option>)}</select></div>
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Court</label><select value={caseLawForm.court} onChange={e => setCaseLawForm(p => ({...p, court: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold">{['Supreme Court of Pakistan','Lahore High Court','Islamabad High Court','Sindh High Court','Peshawar High Court','Balochistan High Court','District Court','Family Court','Appellate Tribunal Inland Revenue'].map(c => <option key={c}>{c}</option>)}</select></div>
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Year</label><input type="text" value={caseLawForm.year} onChange={e => setCaseLawForm(p => ({...p, year: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="2024" /></div>
                      </div>
                      <div><label className="text-sm font-semibold text-navy mb-1 block">Excerpt *</label><textarea required rows={2} value={caseLawForm.excerpt} onChange={e => setCaseLawForm(p => ({...p, excerpt: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold resize-none" placeholder="Brief summary..." /></div>
                      <div><label className="text-sm font-semibold text-navy mb-1 block">Content * (HTML)</label><textarea required rows={10} value={caseLawForm.content} onChange={e => setCaseLawForm(p => ({...p, content: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold resize-y font-mono text-sm" placeholder="<h2>Case Background</h2><p>...</p>" /></div>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={caseLawForm.published} onChange={e => setCaseLawForm(p => ({...p, published: e.target.checked}))} className="w-4 h-4 rounded border-cream-dark text-gold focus:ring-gold" /><span className="text-sm font-semibold text-navy">Publish immediately</span></label>
                      <div className="flex gap-3">
                        <button type="submit" className="px-6 py-2.5 gold-gradient text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all">{editingCaseLaw ? 'Update' : 'Create'}</button>
                        <button type="button" onClick={() => { setShowCaseLawForm(false); setEditingCaseLaw(null) }} className="px-6 py-2.5 border border-cream-dark text-slate rounded-lg text-sm hover:bg-cream transition-colors">Cancel</button>
                      </div>
                    </form>
                  </motion.div>
                )}
                <div className="space-y-3">
                  {caseLaws.length === 0 ? (<div className="text-center py-16 text-slate">No case laws yet.</div>) : caseLaws.map(cl => (
                    <div key={cl.id} className="bg-white rounded-xl p-5 border border-cream-dark flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-navy text-sm">{cl.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${cl.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{cl.published ? 'Published' : 'Draft'}</span>
                        </div>
                        <p className="text-gold text-xs font-semibold mt-0.5">{cl.citation} • {cl.court} • {cl.year}</p>
                        <p className="text-slate text-sm mt-1 line-clamp-1">{cl.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => toggleCaseLawPublish(cl)} className={`p-2 rounded-lg transition-colors ${cl.published ? 'text-green-500 hover:bg-green-50' : 'text-amber-500 hover:bg-amber-50'}`}>{cl.published ? <Eye size={16} /> : <EyeOff size={16} />}</button>
                        <button onClick={() => editCaseLaw(cl)} className="p-2 rounded-lg text-slate/40 hover:text-navy hover:bg-cream transition-colors"><Edit2 size={16} /></button>
                        <button onClick={() => deleteCaseLaw(cl.id)} className="p-2 rounded-lg text-slate/40 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* News & Events Tab */}
            {activeTab === 'newsevents' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-lg font-bold text-navy">News & Events</h2>
                  <button onClick={() => { setShowNewsForm(true); setEditingNews(null); setNewsForm({ title: '', slug: '', excerpt: '', content: '', type: 'news', image_url: '', event_date: '', location: '', published: false }) }} className="flex items-center gap-2 px-4 py-2 gold-gradient text-white rounded-lg text-sm font-bold hover:shadow-lg transition-all">
                    <Plus size={16} /> Add New
                  </button>
                </div>
                {showNewsForm && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 border border-cream-dark mb-6">
                    <h3 className="font-heading text-lg font-bold text-navy mb-4">{editingNews ? 'Edit' : 'New'} News/Event</h3>
                    <form onSubmit={saveNews} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Title *</label><input type="text" required value={newsForm.title} onChange={e => setNewsForm(p => ({...p, title: e.target.value, slug: generateSlug(e.target.value)}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="Title" /></div>
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Type</label><select value={newsForm.type} onChange={e => setNewsForm(p => ({...p, type: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold"><option value="news">News</option><option value="event">Event</option></select></div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Date</label><input type="date" value={newsForm.event_date} onChange={e => setNewsForm(p => ({...p, event_date: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" /></div>
                        <div><label className="text-sm font-semibold text-navy mb-1 block">Location</label><input type="text" value={newsForm.location} onChange={e => setNewsForm(p => ({...p, location: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold" placeholder="Venue / Address" /></div>
                      </div>
                      <ImageUpload value={newsForm.image_url} onChange={(url) => setNewsForm(p => ({...p, image_url: url}))} label="Cover Image" />
                      <div><label className="text-sm font-semibold text-navy mb-1 block">Excerpt *</label><textarea required rows={2} value={newsForm.excerpt} onChange={e => setNewsForm(p => ({...p, excerpt: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold resize-none" placeholder="Brief summary..." /></div>
                      <div><label className="text-sm font-semibold text-navy mb-1 block">Content * (HTML)</label><textarea required rows={8} value={newsForm.content} onChange={e => setNewsForm(p => ({...p, content: e.target.value}))} className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold resize-y font-mono text-sm" placeholder="<h2>Heading</h2><p>Content...</p>" /></div>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={newsForm.published} onChange={e => setNewsForm(p => ({...p, published: e.target.checked}))} className="w-4 h-4 rounded border-cream-dark text-gold focus:ring-gold" /><span className="text-sm font-semibold text-navy">Publish immediately</span></label>
                      <div className="flex gap-3">
                        <button type="submit" className="px-6 py-2.5 gold-gradient text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all">{editingNews ? 'Update' : 'Create'}</button>
                        <button type="button" onClick={() => { setShowNewsForm(false); setEditingNews(null) }} className="px-6 py-2.5 border border-cream-dark text-slate rounded-lg text-sm hover:bg-cream transition-colors">Cancel</button>
                      </div>
                    </form>
                  </motion.div>
                )}
                <div className="space-y-3">
                  {newsEvents.length === 0 ? (<div className="text-center py-16 text-slate">No news or events yet.</div>) : newsEvents.map(ne => (
                    <div key={ne.id} className="bg-white rounded-xl p-5 border border-cream-dark flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {ne.image_url && <img src={ne.image_url} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-navy text-sm">{ne.title}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${ne.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{ne.published ? 'Published' : 'Draft'}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${ne.type === 'event' ? 'bg-blue-100 text-blue-700' : 'bg-navy/5 text-navy'}`}>{ne.type === 'event' ? 'Event' : 'News'}</span>
                          </div>
                          <p className="text-slate text-xs mt-0.5">{ne.event_date && new Date(ne.event_date).toLocaleDateString()} {ne.location && `• ${ne.location}`}</p>
                          <p className="text-slate text-sm mt-1 line-clamp-1">{ne.excerpt}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => toggleNewsPublish(ne)} className={`p-2 rounded-lg transition-colors ${ne.published ? 'text-green-500 hover:bg-green-50' : 'text-amber-500 hover:bg-amber-50'}`}>{ne.published ? <Eye size={16} /> : <EyeOff size={16} />}</button>
                        <button onClick={() => editNews(ne)} className="p-2 rounded-lg text-slate/40 hover:text-navy hover:bg-cream transition-colors"><Edit2 size={16} /></button>
                        <button onClick={() => deleteNews(ne.id)} className="p-2 rounded-lg text-slate/40 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-3">
                {reviews.length === 0 ? (
                  <div className="text-center py-16 text-slate">No reviews yet.</div>
                ) : reviews.map(review => (
                  <div key={review.id} className={`bg-white rounded-xl p-5 border transition-all ${
                    review.approved ? 'border-cream-dark' : 'border-amber-200'
                  }`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-navy">{review.name}</h3>
                          <div className="flex gap-0.5">
                            {Array.from({ length: review.rating }).map((_, j) => (
                              <Star key={j} size={14} className="text-gold fill-gold" />
                            ))}
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${review.approved ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                            {review.approved ? 'Approved' : 'Pending'}
                          </span>
                        </div>
                        <p className="text-slate text-sm mt-1">{review.comment}</p>
                        <p className="text-slate/50 text-xs mt-1">{new Date(review.created_at).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => toggleReviewApproval(review)} className={`p-2 rounded-lg transition-colors ${review.approved ? 'text-green-500 hover:bg-green-50' : 'text-amber-500 hover:bg-amber-50'}`} title={review.approved ? 'Unapprove' : 'Approve'}>
                          {review.approved ? <Check size={16} /> : <Check size={16} />}
                        </button>
                        <button onClick={() => deleteReview(review.id)} className="p-2 rounded-lg text-slate/40 hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
