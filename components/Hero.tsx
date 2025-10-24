export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-meow-black relative overflow-hidden">
      {/* Декоративные blur эффекты для атмосферы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-meow-red blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-meow-yellow blur-3xl"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-7xl md:text-9xl text-meow-yellow mb-6 drop-shadow-[0_0_30px_rgba(255,221,0,0.5)]">
          MEOW BORG
        </h1>
        <p className="text-xl md:text-2xl text-meow-white max-w-2xl mx-auto font-light">
          A feline post-apocalyptic tabletop roleplaying game
        </p>
        <div className="mt-4 text-meow-red text-sm md:text-base tracking-widest uppercase">
          Survive. Hunt. Purr.
        </div>
      </div>
    </section>
  )
}
