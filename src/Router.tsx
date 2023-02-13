import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Home } from './Pages/Home'
import { DetailsPost } from './Pages/DetailsPost/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detailspost" element={<DetailsPost />} />
      </Route>
    </Routes>
  )
}
