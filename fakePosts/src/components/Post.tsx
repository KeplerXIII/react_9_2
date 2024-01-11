import { formatDateString } from './dateForm'

export const Post = ({
  id,
  content,
  created
}: {
  id: number
  content: string
  created: string
}) => {
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
        <div className='post-text'>{content}</div>
      </div>
    </div>
  )
}
