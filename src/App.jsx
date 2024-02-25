import React, { memo } from 'react'
import Todo from './Components/Todo/index'

function App() {
  return (
    <div>
      <Todo />
    </div>
  )
}

export default memo(App)
