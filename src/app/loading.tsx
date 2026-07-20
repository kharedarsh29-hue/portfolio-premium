export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0f] flex items-center justify-center">
      <div className="text-center">
        <span className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          NOVA
        </span>
        <div className="flex justify-center gap-1.5 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-6 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
