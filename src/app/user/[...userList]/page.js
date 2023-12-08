"use client"

const MyUsers = ({params}) => {

    // console.log(params);
  return (
    <div>MyUsers <span>{
      params.userList.map(data=><p key={data.id}>{data}</p>)
      }</span></div>
  )
}

export default MyUsers