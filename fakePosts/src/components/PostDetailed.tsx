import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { PostModelDetailed } from '../models'
import { Post } from './Post'

export const PostDetailed = () => {
  const { id } = useParams()
  const { data, isLoading, hasError } = useFetch<PostModelDetailed>(
    `http://localhost:7070/posts/${id}`
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>
  }

  return (
    <div>
      {data && (
        <Post
          key={data.post.id}
          id={data.post.id}
          content={data.post.content}
          created={data.post.created}
        />
      )}
    </div>
  )
}
