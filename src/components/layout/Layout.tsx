'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  backButtonHref?: string;
}

export function Layout({ children, title, showBackButton = false, backButtonHref = '/dashboard' }: LayoutProps) {
  const router = useRouter();
  const user = auth.getUser();

  const handleLogout = () => {
    auth.logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              {showBackButton && (
                <button
                  onClick={() => router.push(backButtonHref)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TF</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{title || 'TaskFlow'}</h1>
                  <p className="text-sm text-gray-600">Task Management System</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center space-x-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">{user.email}</p>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-lg border-t border-white/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">TF</span>
              </div>
              <span className="text-sm text-gray-600">TaskFlow © 2024</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Built with</span>
              <span className="font-medium">Next.js</span>
              <span>•</span>
              <span className="font-medium">TypeScript</span>
              <span>•</span>
              <span className="font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
