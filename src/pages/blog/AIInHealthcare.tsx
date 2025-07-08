import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const AIInHealthcare = () => {
  const post = blogPosts.find(p => p.id === 'ai-in-healthcare');
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0e0a' }}>
      {/* Header */}
      <header className="relative py-24" style={{ backgroundColor: '#0a0e0a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span 
              className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}
            >
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
            {post.title}
          </h1>
          
          <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: '#94D3A2' }}>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              8 min read
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div 
          className="prose prose-lg max-w-none"
          style={{ 
            color: '#E3FFEF',
            '--tw-prose-headings': '#E3FFEF',
            '--tw-prose-links': '#10b981',
            '--tw-prose-bold': '#E3FFEF',
            '--tw-prose-code': '#10b981'
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(227, 255, 239, 0.1)' }}>
          <div className="flex items-center mb-4">
            <Tag className="h-4 w-4 mr-2" style={{ color: '#94D3A2' }} />
            <span style={{ color: '#94D3A2' }}>Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(227, 255, 239, 0.1)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Share2 className="h-4 w-4 mr-2" style={{ color: '#94D3A2' }} />
              <span style={{ color: '#94D3A2' }}>Share this article</span>
            </div>
            <div className="flex gap-4">
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Twitter
              </button>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                LinkedIn
              </button>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
            Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                to={relatedPost.path}
                className="group block"
              >
                <div 
                  className="rounded-xl p-6 transition-all hover:transform hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="mb-3">
                    <span 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}
                    >
                      {relatedPost.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors" style={{ color: '#E3FFEF' }}>
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm mb-4" style={{ color: '#94D3A2' }}>
                    {relatedPost.excerpt.substring(0, 120)}...
                  </p>
                  <div className="text-xs" style={{ color: '#94D3A2', opacity: 0.7 }}>
                    {relatedPost.date} • {relatedPost.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default AIInHealthcare;
