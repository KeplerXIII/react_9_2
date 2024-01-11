import { useState } from 'react'
import { formatDateString } from './dateForm'
import { PostModel } from '../models'

export const Post = ({ id, content, created }: PostModel) => {
  const [isEditing, setEditing] = useState(false)
  const [postContent, setPostContent] = useState(content)

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:7070/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: postContent })
      })

      if (response.ok) {
        setEditing(false)
      } else {
        console.error('Ошибка при обновлении поста')
      }
    } catch (error) {
      console.error('Ошибка при обновлении поста', error)
    }
  }

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:7070/posts/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
      } else {
        console.error('Ошибка при удалении поста')
      }
    } catch (error) {
      console.error('Ошибка при удалении поста', error)
    }
  }

  return (
    <div className='post-card'>
      <img
        className='post-image'
        src='https://sneg.top/uploads/posts/2023-06/1687931407_sneg-top-p-prikolnie-avatarki-dlya-malchikov-vkontakt-5.jpg'
        alt='Изображение поста'
      />

      <div className='post-content'>
        <div className='post-author'>#{id}</div>
        <div className='post-author'>Создан: {formatDateString(created)}</div>
        <div className='post-author'>Автор: Alex Pu</div>

        {isEditing ? (
          <div>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <button onClick={handleSaveClick}>Сохранить</button>
          </div>
        ) : (
          <div className='post-text'>{postContent}</div>
        )}

        <div>
          {isEditing ? (
            <button onClick={() => setEditing(false)}>Отменить</button>
          ) : (
            <button onClick={handleEditClick}>Редактировать</button>
          )}
          <button onClick={handleDeleteClick}>Удалить</button>
        </div>
      </div>
    </div>
  )
}
