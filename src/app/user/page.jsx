// import styles from './user.module.css'

export default async function Users() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
  const repo = await res.json()

  return (
    <div className="border user_style">
      <h1>Users</h1>
      {
        repo.map((post) => (<div key={post.id}>
          <h4>{post.id}: {post.name}</h4>
          <br />
          <p>{post.body}</p>
          <br />
        </div>))
      }
    </div >
  )
}
