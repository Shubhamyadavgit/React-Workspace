import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/shubhamyadavgit')
        .then((res)=> res.json())
        .then(data => {
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-green-600 p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Github
