import React, { useEffect } from 'react';
import { fetchBlogs } from '../../../services/blogs.js';
import { useBlogs } from '../../../hooks/useBlogs.js';
import BlogCard from '../../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.name} {...blog} />
      ))}
    </main>
  );
}
