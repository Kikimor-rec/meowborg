import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-meow-black py-12 sm:py-20 px-4 relative overflow-hidden">
      {/* Кот-маг как декоративный элемент */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[400px] md:w-[600px] md:h-[700px] opacity-30 pointer-events-none">
        <Image
          src="/images/cat-mage.png"
          alt=""
          fill
          className="object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,0,255,0.5)]"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl text-meow-yellow mb-6 sm:mb-8 text-center">
          Get in Touch
        </h2>

        <div className="bg-meow-black/40 backdrop-blur-sm border-2 border-meow-yellow p-6 sm:p-8 md:p-12 space-y-6 text-meow-white">
          <p className="text-lg sm:text-xl leading-relaxed text-center">
            Want to join our playtest, ask a question, or become part of the
            team?
          </p>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-meow-white/80 mb-4">Contact us via email:</p>
              <a
                href="mailto:meow@meowborg.com"
                className="inline-block bg-meow-yellow text-meow-black font-heading text-xl sm:text-2xl px-8 py-4 hover:bg-meow-red hover:text-meow-white transition-colors"
              >
                meow@meowborg.com
              </a>
            </div>

            <div className="border-t border-meow-red/30 pt-6">
              <p className="text-center text-meow-white/60 mb-4">
                Or reach us on social media:
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="https://x.com/meowborg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-meow-white hover:text-meow-yellow transition-colors text-lg flex items-center gap-2"
                >
                  <span>🐦</span>
                  <span>@meowborg</span>
                </a>
                <a
                  href="https://t.me/meowborg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-meow-white hover:text-meow-yellow transition-colors text-lg flex items-center gap-2"
                >
                  <span>💬</span>
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-meow-red/30 text-center">
            <p className="text-meow-white/80 text-base">
              We&apos;d love to hear from you! Whether you want to test the
              game, have questions about MEOW BORG, or are interested in joining
              our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
