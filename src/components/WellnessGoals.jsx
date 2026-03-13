// Benefits and Wellness Goals section - clean professional style
const goals = [
  { icon: '⚡', label: 'Energy & Stamina', color: '#f59e0b' },
  { icon: '🛡️', label: 'Immunity', color: '#10b981' },
  { icon: '🧠', label: 'Brain & Focus', color: '#6366f1' },
  { icon: '💪', label: 'Muscle & Fitness', color: '#ef4444' },
  { icon: '🌸', label: "Women's Care", color: '#ec4899' },
  { icon: '❤️', label: 'Heart Health', color: '#f43f5e' },
  { icon: '🩺', label: 'Blood Sugar', color: '#14b8a6' },
  { icon: '⚖️', label: 'Weight Loss', color: '#f97316' },
  { icon: '✨', label: 'Skin Care', color: '#a855f7' },
  { icon: '💇', label: 'Hair Care', color: '#84cc16' },
  { icon: '🦴', label: 'Bone Health', color: '#94a3b8' },
  { icon: '😴', label: 'Sleep & Stress', color: '#8b5cf6' },
]

const keyStats = [
  { value: '50,000+', label: 'Happy Customers', icon: '😊' },
  { value: '4.9★', label: 'Average Rating', icon: '⭐' },
  { value: '14+', label: 'Health Categories', icon: '🌿' },
  { value: '100%', label: 'Natural Ingredients', icon: '🏔️' },
]

export default function WellnessGoals() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {keyStats.map((s, i) => (
            <div
              key={i}
              className="text-center py-6 px-4 rounded-2xl bg-white hover:shadow-md transition-all"
              style={{ border: '1px solid #ece8df' }}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-3xl font-serif font-bold text-black mb-1">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Wellness Goals */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black">Shop by Wellness Goal</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {goals.map((goal, i) => (
            <button
              key={i}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white hover:shadow-md hover:-translate-y-1 transition-all group text-center"
              style={{ border: '1px solid #f0f0f0' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                style={{ background: `${goal.color}18`, border: `2px solid ${goal.color}30` }}
              >
                {goal.icon}
              </div>
              <span className="text-xs font-semibold text-gray-700 leading-tight">{goal.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
