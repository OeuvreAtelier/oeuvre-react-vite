import React from 'react'
import BookmarksList from './components/BookmarksList'
import Footer from '../../shared/components/Footer'

export default function BookmarksPage() {
  return (
    <div className="bg-slate-100">
    <BookmarksList />
    <Footer />
  </div>
  )
}
