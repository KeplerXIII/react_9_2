import { NavLink } from 'react-router-dom'

export const Menu = () => {
  const menuItemClassName = ({ isActive }: { isActive: boolean }) =>
    'menu__item ' + (isActive && 'menu__item-active')

  return (
    <nav className='menu'>
      <NavLink className={menuItemClassName} to='/'>
        Главная
      </NavLink>
      <NavLink className={menuItemClassName} to='/posts/new'>
        Создать
      </NavLink>
      {/* <NavLink className={menuItemClassName} to='/timeattack'>
        Time Attack
      </NavLink>
      <NavLink className={menuItemClassName} to='/forza'>
        Forza Karting
      </NavLink> */}
    </nav>
  )
}
