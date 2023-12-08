

const Posts = async () => {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts')
       const results = await res.json()
    //    console.log(results);
           
    return (
        <div>
            {
                results.map(post => <div key={post.id}>{post.id}</div>)
            }
        </div>
    )
}

export default Posts