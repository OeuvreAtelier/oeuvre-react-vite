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
import WishlistPage from "./pages/WishlistPage/WishlistPage"

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
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishlistPage />
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
