'use client'

import React, { useState, useMemo } from 'react'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import AppCard from '@/components/app-card'
import Pagination from '@/components/pagination'

const MOCK_APPS = [
  {
    id: 1,
    title: 'Face Recognition',
    description: 'Sample description',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'UX Testing',
    description: 'Sample description',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Analytics',
    description: 'Sample description',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm5 4c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Reporting',
    description: 'Sample description',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.6-.73-1.82-.77-2.56-.12-.74.65-.77 1.86-.12 2.56L6 18c.56.69 1.68.76 2.35.15l5.85-7.09c.68-.81.56-2.03-.24-2.64-.8-.61-2.01-.49-2.64.32z" />
      </svg>
    ),
  },
]

const ITEMS_PER_PAGE = 2

export default function AppsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter apps based on search query
  const filteredApps = useMemo(() => {
    return MOCK_APPS.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredApps.length / ITEMS_PER_PAGE))
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedApps = filteredApps.slice(startIndex, endIndex)

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-neutral-50">
      <Sidebar />
      <Header onSearchChange={setSearchQuery} />

      {/* Main Content */}
      <main className="ml-16 px-6 py-6 pb-24">
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {paginatedApps.map((app) => (
            <AppCard
              key={app.id}
              title={app.title}
              description={app.description}
              icon={app.icon}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-sm">No apps found</p>
          </div>
        )}
      </main>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredApps.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
