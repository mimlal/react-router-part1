import React from 'react'
import {useParams,useSearchParams} from 'react-router-dom'
const Post = () => {
    let {category,id}=useParams()
    let [searchParams,setSearchParams]=useSearchParams()
    console.log(searchParams.get('price'));
    console.log(searchParams.get('sort'));
    return (
        <div>
            <h1>post page-{category}</h1>
            <h1>post page-{id}</h1>
        </div>
    )
}

export default Post
