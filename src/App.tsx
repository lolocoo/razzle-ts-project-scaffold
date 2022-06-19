import React, { useState } from 'react'

import LocalButton from './Button'

const Codemirror = React.lazy(() => import('app2/Codemirror'))

function App() {
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>App 1</h2>
      <LocalButton />
      <React.Suspense fallback="Loading Button">
        <Codemirror />
      </React.Suspense>
    </div>
  )
}

export default App
