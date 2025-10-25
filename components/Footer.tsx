export default function Footer() {
  return (
    <footer className="bg-meow-black border-t-2 border-meow-red py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Social Media Links */}
        <div className="text-center mb-8">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-meow-yellow mb-6">
            Follow MEOW BORG
          </h3>
          <div className="flex justify-center gap-6 sm:gap-8">
            {/* X (Twitter) */}
            <a
              href="https://x.com/meowborg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-transform hover:scale-110 min-h-[44px]"
            >
              <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center bg-meow-yellow group-hover:bg-meow-red transition-colors">
                <svg
                  className="w-7 h-7 sm:w-6 sm:h-6 text-meow-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-meow-white text-xs sm:text-sm group-hover:text-meow-yellow transition-colors">
                X / Twitter
              </span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/meowborg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-transform hover:scale-110 min-h-[44px]"
            >
              <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center bg-meow-yellow group-hover:bg-meow-red transition-colors">
                <svg
                  className="w-7 h-7 sm:w-6 sm:h-6 text-meow-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </div>
              <span className="text-meow-white text-xs sm:text-sm group-hover:text-meow-yellow transition-colors">
                Telegram
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-meow-white/60 text-sm">
          <p>© 2025 Blazing Well. All rights reserved.</p>
          <p className="mt-2">
            MEOW BORG is published under the MÖRK BORG Third Party License
          </p>
        </div>
      </div>
    </footer>
  )
}
