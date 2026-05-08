'use client'

import React from 'react'

interface AppCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  bgColor?: string
}

export default function AppCard({
  title,
  description,
  icon,
  bgColor = '#E8F4F0',
}: AppCardProps) {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-surface hover:shadow-overlay transition-shadow">
      {/* Card Image Area */}
      <div
        className="w-full h-40 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        {icon && (
          <div className="text-neutral-400">
            {icon}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 text-base">
              {title}
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              {description}
            </p>
          </div>
          
          {/* Menu button */}
          <button
            aria-label="Card options"
            className="flex-shrink-0 p-1 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm0 2c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm0 6c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
