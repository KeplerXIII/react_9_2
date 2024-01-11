import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewPost = () => {
  const navigate = useNavigate()

  const [content, setContent] = useState('')

  const handleContentChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setContent(e.target.value)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const newPost = {
      content: content
    }

    try {
      const response = await fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })

      if (response.ok) {
        navigate('/')
      } else {
        console.error('Ошибка при создании поста')
      }
    } catch (error) {
      console.error('Ошибка при создании поста', error)
    }
  }

  return (
    <div className='post-card'>
      <form onSubmit={handleSubmit}>
        <label className='post-author post-content'>
          Контент поста:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <button type='submit'>Создать пост</button>
      </form>
    </div>
  )
}
