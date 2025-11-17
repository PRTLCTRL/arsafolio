import matter from 'gray-matter';

// Import all markdown files from the posts directory
const postFiles = require.context('!!raw-loader!../posts', false, /\.md$/);

export const loadPosts = () => {
  const posts = postFiles.keys().map((filename) => {
    const fileContent = postFiles(filename).default;

    // Parse frontmatter and content
    const { data, content } = matter(fileContent);

    // Extract slug from filename if not in frontmatter
    const slug = data.slug || filename.replace('./', '').replace('.md', '');

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content,
      ...data
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};
