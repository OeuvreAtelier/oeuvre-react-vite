import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import LandingPage from "./pages/LandingPage/LandingPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ShopProfile from "./pages/ShopProfile/ShopProfile"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import Template from "./Template"
import AddEditPage from "./pages/AddEditPage/AddEditPage"
import ProtectedRoute from "./components/ProtectedRoute"
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage"
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage"
import TransactionPage from "./pages/TransactionPage/TransactionPage"
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/my-store",
        element: (
          <ProtectedRoute>
            <ShopProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/register-update",
        element: (
          <ProtectedRoute>
            <AddEditPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit-profile",
        element: (
          <ProtectedRoute>
            <EditProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product-detail",
        element: (
          <ProtectedRoute>
            <ProductDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/transaction-page",
        element: (
          <ProtectedRoute>
            <TransactionPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bookmarks",
        element: (
          <ProtectedRoute>
            <BookmarksPage />
          </ProtectedRoute>
        )
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
