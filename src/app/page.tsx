export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-30">
            <span className="text-4xl">📋</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            TaskFlow
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            Your complete task management solution
          </p>

          <p className="text-lg text-blue-200 mb-12 max-w-xl mx-auto">
            Organize, track, and complete your tasks with ease. Built with
            modern technology for the best experience.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-white font-semibold mb-2">
                Secure Authentication
              </h3>
              <p className="text-blue-100 text-sm">
                JWT-based security with refresh tokens
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">
                Real-time Updates
              </h3>
              <p className="text-blue-100 text-sm">
                Instant task status updates and search
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-white font-semibold mb-2">
                Responsive Design
              </h3>
              <p className="text-blue-100 text-sm">
                Works perfectly on all devices
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/auth/login"
              className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Sign In
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>

            <a
              href="/auth/register"
              className="group px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                Create Account
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Tech stack badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-xs text-white border border-white border-opacity-20">
              Next.js
            </span>
            <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-xs text-white border border-white border-opacity-20">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-xs text-white border border-white border-opacity-20">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-xs text-white border border-white border-opacity-20">
              Node.js
            </span>
            <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-xs text-white border border-white border-opacity-20">
              Prisma
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-20"></div>
    </main>
  );
}
