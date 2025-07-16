import "./sass/index.scss";
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
