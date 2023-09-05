import axios from "axios";

const PostPage = ({comments, id}) => {
  console.log("*********************** RUNNING POST PAGE ***********************");
  return (
    <div>
      <h1>YOU ARE LOOKING AT POST#{id} COMMENTS</h1>
      <ul>
        {comments.map(c => <li key={c.id}><h5>{c.email}</h5>{c.body}</li>)}
      </ul>
    </div>
  );
}

PostPage.getInitialProps = async ({query}) => {
  console.log("*********************** RUNNING PostPage.getInitialProps ***********************");
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  return {comments: data, id: query.id};
}

export default PostPage;