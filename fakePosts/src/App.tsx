import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'

import './App.css'
import { PostList } from './components/PostList'
import { NewPost } from './components/PostNew'
import { PostDetailed } from './components/PostDetailed'

function App() {
  return (
    <div>
      <Menu />
      <div className='page'>
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/posts/new' element={<NewPost />} />
          <Route path='/posts/:id' element={<PostDetailed />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
