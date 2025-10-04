import Link from "next/link";

const posts = [
  { title: "My First Post", slug: "my-first-post" },
  { title: "Thoughts on Tech", slug: "thoughts-on-tech" },
  { title: "Reflections on Internships", slug: "reflections-internships" },
];

export default function InsightsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/insights/${post.slug}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
