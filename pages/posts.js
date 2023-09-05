import axios from "axios";
import Link from "next/link";

const PostsPage = ({posts}) => {
  console.log("*********************** RUNNING POSTS PAGE ***********************");
  return (
    <div>
      <h1>This is Posts page from JsonPlaceholder!!!</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link href={`/post?id=${p.id}` }>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

PostsPage.getInitialProps = async () => {
  console.log("*********************** RUNNING PostSPage.getInitialProps ***********************");
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {posts: data};
}

export default PostsPage;