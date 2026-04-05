export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"%3E%3Cpath d="M0 0h60v60H0z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          {/* Logo/Icon with enhanced styling */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl shadow-2xl shadow-purple-500/25 animate-scale-in">
            <span className="text-5xl animate-pulse">📋</span>
          </div>

          {/* Enhanced heading with gradient text */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in">
            <span className="gradient-text">TaskFlow</span>
          </h1>
          
          {/* Better subtitle with enhanced typography */}
          <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">complete task management solution</span>
          </p>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Organize, track, and complete your tasks with ease. Built with modern technology for the best experience.
          </p>

          {/* Enhanced feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-morphism rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 card-hover">
              <div className="text-4xl mb-4 animate-pulse">🔐</div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure Authentication</h3>
              <p className="text-gray-300 text-lg leading-relaxed">JWT-based security with refresh tokens and encrypted data</p>
            </div>
            <div className="glass-morphism rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 card-hover">
              <div className="text-4xl mb-4 animate-pulse">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Real-time Updates</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Instant task status updates and powerful search capabilities</p>
            </div>
            <div className="glass-morphism rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 card-hover">
              <div className="text-4xl mb-4 animate-pulse">📱</div>
              <h3 className="text-2xl font-bold text-white mb-3">Responsive Design</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Works perfectly on all devices with modern UI/UX</p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="/auth/login"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-lg font-bold rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-lg">
                Sign In
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="/auth/register"
              className="group px-10 py-5 bg-transparent text-white text-lg font-bold rounded-2xl border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="flex items-center text-lg">
                Create Account
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced stats section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Secure</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">0ms</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Latency</div>
            </div>
          </div>

          {/* Enhanced tech stack badges */}
          <div className="mt-20 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            {[
              { name: 'Next.js', color: 'from-gray-600 to-gray-800' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
              { name: 'Tailwind CSS', color: 'from-cyan-600 to-cyan-800' },
              { name: 'Node.js', color: 'from-green-600 to-green-800' },
              { name: 'Prisma', color: 'from-purple-600 to-purple-800' },
            ].map((tech, index) => (
              <span
                key={tech.name}
                className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white text-sm font-bold rounded-full border border-white/20 backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </main>
  )
}
