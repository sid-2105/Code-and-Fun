import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
 // const [data , setData] = useState([])
//     useEffect(() => {
//     fetch('https://api.github.com/users/sid-2105')
//     .then(response => response.json())
//     .then(response => {console.log(response);
//     setData(response)})
// }, [])

console.log('data',data)
  return (
    <div className=' flex justify-evenly items-center  m-4 bg-gray-600 text-white p-10 text-3xl'>
    Github followers:{data.followers}
    <br/>
    Public Repos:{data.public_repos}
    <br/>
    Bio:{data.bio}
    <img className='' src={data.avatar_url} alt="image" />
    </div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/sid-2105')
    return response.json()
}