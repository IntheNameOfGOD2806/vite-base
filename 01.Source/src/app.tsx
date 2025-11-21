import { RouterProvider } from 'react-router-dom'
import GlobalThemeConfig from './theme/GlobalThemeConfig'
import { router } from './routes'
import { ReduxProvider } from './redux'
import { AuthProvider } from './context/auth/AuthProvider'
export default function App() {
  return (
    <ReduxProvider>
      <AuthProvider>
        <GlobalThemeConfig>
          <RouterProvider router={router} />
        </GlobalThemeConfig>
      </AuthProvider>
    </ReduxProvider>
  )
}
