import { Link } from 'react-router-dom'
import { formatDateString } from './dateForm'
import { PostModel } from '../models'

export const PostSimple = ({ id, content, created }: PostModel) => {
  return (
    <Link
      to={`/posts/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
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
          <div className='post-text'>{content}</div>
        </div>
      </div>
    </Link>
  )
}
