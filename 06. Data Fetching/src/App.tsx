import { useEffect, useState } from "react";
import { get } from "./utils/https";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];
        const posts: BlogPost[] = data.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));
        setFetchedPosts(posts);
      } catch (error) {
        setError('Failed to fetch posts. Please try again later.');
      }
      setIsFetching(false);
    }

    fetchPosts();
  }, []);
  if (error) {
    return <main>
      <ErrorMessage text={error} />
    </main>;
  }

  if (isFetching) {
    return <main>
      <p id="loading-fallback">Fetching posts...</p>
    </main>;
  }

  return <main>
    <img src="./assets/data-fetching.png" alt="img" />
    <BlogPosts posts={fetchedPosts || []} />
  </main>;
}

export default App;
