import Image from 'next/image'

export default function About() {
  return (
    <section className="min-h-screen bg-meow-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* О проекте */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-meow-yellow mb-8">
            What is MEOW BORG?
          </h2>
          <div className="space-y-6 text-meow-white text-lg leading-relaxed">
            <p className="text-xl">
              MEOW BORG is a tabletop roleplaying game.
            </p>
            <p>
              When you play, remember: you are a cat. The very cat you happen
              to be. Separate yourself in ordinary reality from the cat you are
              in MEOW BORG. But don&apos;t be afraid to immerse yourself in the
              game, don&apos;t be afraid to make decisions and act as the cat
              whose character sheet lies before you would act.
            </p>
            <p>Let it be strange.</p>
            <p>Don&apos;t be afraid, and play your role with pleasure.</p>
          </div>
        </div>

        {/* О характере игры */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl md:text-4xl text-meow-red mb-6">
            A Word About the Game&apos;s Nature
          </h3>
          <div className="space-y-4 text-meow-white text-lg leading-relaxed">
            <p>
              Despite MEOW BORG being a game about cats&apos; adventures in
              their unusual, strange, and mysterious dreams—dreams that humans
              know absolutely nothing about—it cannot be called a children&apos;s
              game.
            </p>
            <p>
              The world of feline dreams in MEOW BORG is harsh and dangerous.
              It can sometimes be frightening or filled with decidedly adult
              humor—or devoid of humor entirely, at the will of the dream
              purr-veyor.
            </p>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t-2 border-meow-red my-12"></div>

        {/* Legal Notice */}
        <div className="mb-12 text-sm text-meow-white/80">
          <p className="mb-2">
            <strong className="text-meow-white">MEOW BORG</strong> is an
            independent production by Blazing Well and is not affiliated with
            Ockult Örtmästare Games or Stockholm Kartell. It is published under
            the MÖRK BORG Third Party License.
          </p>
          <p>
            MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm
            Kartell.
          </p>
        </div>

        {/* Dedication */}
        <div className="text-center italic text-meow-red">
          Dedicated to all our cats. And other pets too.
        </div>
      </div>
    </section>
  )
}
