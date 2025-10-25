import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-meow-black relative overflow-hidden">
      {/* Декоративные blur эффекты для атмосферы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-meow-red blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-meow-yellow blur-3xl"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="relative flex items-center justify-center lg:justify-start min-h-[500px] sm:min-h-[600px] py-12">
          {/* Изображение кота-воина - теперь видно и на мобильных, но меньше и прозрачнее */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bottom-0 w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] lg:w-[450px] lg:h-[600px]">
            <Image
              src="/images/cat-warrior.png"
              alt=""
              fill
              className="object-contain object-bottom mix-blend-lighten opacity-40 lg:opacity-70"
              priority
            />
          </div>

          {/* Текст поверх кота */}
          <div className="relative z-20 text-center lg:text-left lg:ml-[280px] max-w-3xl px-2 sm:px-0">
            <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-meow-yellow mb-4 sm:mb-6 drop-shadow-[0_0_30px_rgba(255,221,0,0.5)] [text-shadow:2px_2px_0_rgb(0_0_0/100%),4px_4px_0_rgb(0_0_0/50%)] leading-tight">
              MEOW BORG
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-meow-white font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] bg-meow-black/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded inline-block mb-3 sm:mb-4">
              A dream post-meowcalyptic tabletop roleplaying game
            </p>
            <div className="text-xs sm:text-sm md:text-base text-meow-red tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] bg-meow-black/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded inline-block">
              Survive. Hunt. Purr.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
