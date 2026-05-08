'use client'

import React from 'react'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-white border-r border-neutral-200 flex flex-col items-center py-0 gap-0">
      {/* Logo Header - Green Background */}
      <div className="w-16 h-16 bg-brand-primary rounded-none flex items-center justify-center font-bold text-white text-lg">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </div>

      {/* Navigation icons */}
      <nav className="flex flex-col gap-0 w-full flex-1">
        {/* Add button */}
        <button
          aria-label="Add new"
          className="w-16 h-16 hover:bg-neutral-100 transition-colors flex items-center justify-center text-neutral-600 hover:text-brand-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>

        {/* Grid/Dashboard */}
        <button
          aria-label="Dashboard"
          className="w-16 h-16 hover:bg-neutral-100 transition-colors flex items-center justify-center text-neutral-600 hover:text-brand-primary"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
          </svg>
        </button>

        {/* Briefcase */}
        <button
          aria-label="Projects"
          className="w-16 h-16 hover:bg-neutral-100 transition-colors flex items-center justify-center text-neutral-600 hover:text-brand-primary"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 16.5l6-6 1.41 1.41L11 19 4.41 12.41 5.83 11l4.17 5.5z" />
          </svg>
        </button>

        {/* People/Network */}
        <button
          aria-label="Team"
          className="w-16 h-16 hover:bg-neutral-100 transition-colors flex items-center justify-center text-neutral-600 hover:text-brand-primary"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </button>
      </nav>

      {/* Settings and User at bottom */}
      <div className="w-full flex flex-col items-center gap-0">
        {/* Settings button */}
        <button
          aria-label="Settings"
          className="w-16 h-16 hover:bg-neutral-100 transition-colors flex items-center justify-center text-neutral-600 hover:text-brand-primary border-t border-neutral-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.64l-1.92-3.32c-.12-.22-.38-.3-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.23-.09-.47 0-.59.22L2.74 8.87c-.12.22-.07.49.12.64l2.03 1.58c-.05.3-.07.62-.07.94 0 .33.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.64l1.92 3.32c.12.22.38.3.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.23.09.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.64l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </button>

        {/* User initial */}
        <div className="w-16 h-12 flex items-center justify-center text-neutral-600 text-xs font-semibold">
          ku
        </div>
      </div>
    </aside>
  )
}
