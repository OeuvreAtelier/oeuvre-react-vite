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
import TransactionHistoryPage from "./pages/TransactionHistoryPage/TransactionHistoryPage"
import TransactionPage from "./pages/TransactionPage/TransactionPage"
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage"
import FansPage from "./pages/FansPage/FansPage"
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage"
import RateReviewPage from "./pages/RateReviewPage/RateReviewPage"
import TransactionSuccessful from "./pages/TransactionPage/TransactionSuccessful"
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage"

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
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <OnboardingPage />
          </ProtectedRoute>
        ),
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
        path: "/transaction-history",
        element: (
          <ProtectedRoute>
            <TransactionHistoryPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/transaction",
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
        ),
      },
      {
        path: "/fans",
        element: (
          <ProtectedRoute>
            <FansPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/discover",
        element: (
          <ProtectedRoute>
            <DiscoverPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rate-review",
        element: (
          <ProtectedRoute>
            <RateReviewPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/success",
        element: (
          <ProtectedRoute>
            <TransactionSuccessful />
          </ProtectedRoute>
        ),
      },
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
