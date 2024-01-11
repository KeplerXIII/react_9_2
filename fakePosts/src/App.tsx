import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'

import './App.css'
import { Post } from './components/Post'
import { PostList } from './components/PostList'

function App() {
  return (
    <div>
      <Menu />
      <div className='page'>
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route
            path='/new'
            element={<Post content='new' created='111111' />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
