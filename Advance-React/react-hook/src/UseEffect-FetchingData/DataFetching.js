import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idButtonClick,setIdFromButtonClick]=useState(1)

    const onHandleClick=()=>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+idButtonClick)
        .then(res=>
        {
            setPost(res.data)
            console.log(res)
        }
        ).catch((err)=>{
console.log(err)
        })
    },[idButtonClick])
    return (
        <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={onHandleClick}>click</button>
        <h1>{post.title}</h1> 
            {/**<ul>
            {
                posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>**/}
        </div>
    )
}

export default DataFetching
