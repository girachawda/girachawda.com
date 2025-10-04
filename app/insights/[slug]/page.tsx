import { notFound } from "next/navigation";

const posts = {
  "my-first-post": {
    title: "My First Post",
    content: "This is the content of my first post..."
  },
  "thoughts-on-tech": {
    title: "Thoughts on Tech",
    content: "Here are my thoughts on technology..."
  },
  "reflections-internships": {
    title: "Reflections on Internships",
    content: "Reflecting on my internship experiences..."
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
