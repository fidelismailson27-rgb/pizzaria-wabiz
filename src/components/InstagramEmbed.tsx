'use client';

export default function InstagramEmbed() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg dark:border-dark-700 dark:bg-dark-900">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-dark-900">
              🍕
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-900 dark:text-white">pizzariapremium</p>
            <p className="text-xs text-dark-500">Patrocinado</p>
          </div>
        </div>
      </div>

      <div className="aspect-square bg-dark-100 dark:bg-dark-800">
        <div className="flex h-full items-center justify-center text-6xl">📷</div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center space-x-4">
          <button className="text-dark-600 hover:text-red-500" aria-label="Curtir">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="text-dark-600 hover:text-dark-900" aria-label="Comentar">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-dark-600 dark:text-dark-300">
          <span className="font-semibold">pizzariapremium</span> A melhor pizza da cidade! 🍕
        </p>
      </div>
    </div>
  );
}
