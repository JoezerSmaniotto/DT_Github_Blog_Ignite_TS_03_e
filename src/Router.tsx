import { Route, Routes } from 'react-router-dom'

import { Home } from './Pages/Home'
import { DetailsPost } from './Pages/DetailsPost/index'
import { DefaultLayout } from './DefaultLayout'

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
