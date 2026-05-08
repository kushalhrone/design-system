'use client'

import React from 'react'

interface HeaderProps {
  onSearchChange?: (value: string) => void
}

export default function Header({ onSearchChange }: HeaderProps) {
  return (
    <header className="ml-16 border-b border-neutral-200 bg-white">
      <div className="px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-2xl font-bold text-neutral-900">Apps</h1>
          
          {/* Search bar */}
          <div className="flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary focus:ring-opacity-20 text-sm"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {/* Create App button */}
          <button className="px-4 py-2 bg-brand-primary text-white rounded-lg font-medium text-sm hover:bg-brand-primary-dark transition-colors shadow-surface">
            Create App
          </button>

          {/* Grid view button */}
          <button
            aria-label="Grid view"
            className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </button>

          {/* List view button */}
          <button
            aria-label="List view"
            className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
