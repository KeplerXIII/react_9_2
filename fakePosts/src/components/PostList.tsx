import { useFetch } from '../hooks/useFetch'
import { PostModel } from '../models'
import { PostSimple } from './PostSimple'

export const PostList = () => {
  const { data, isLoading, hasError } = useFetch<PostModel[]>(
    'http://localhost:7070/posts'
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>
  }

  return (
    <div>
      {data &&
        data.map((post) => (
          <PostSimple
            key={post.id}
            id={post.id}
            content={post.content}
            created={post.created}
          />
        ))}
    </div>
  )
}
