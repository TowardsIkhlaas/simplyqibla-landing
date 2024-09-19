import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-full w-full bg-[linear-gradient(to_right,#1c150e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_70%,#000_70%,transparent_100%)]">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full">
        <Image
          draggable="false"
          className="relative select-none dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/sq-landing-logo.svg"
          alt="SimplyQibla Logo"
          width={1000}
          height={33}
          priority
        />
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full">
        <Image
          draggable="false"
          className="relative select-none dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[100px] md:w-[200px] lg:w-[200px]"
          src="/sq-icon.webp"
          alt="SimplyQibla Icon"
          width={1000}
          height={33}
          priority
        />
      </div>

      <p className="fixed font-extralight left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Minimalist, accurate, and privacy-focused Qibla. Ad-free.
      </p>

      <div className="mb-32 grid text-center overflow-hidden lg:max-w-5xl lg:w-full lg:mb-16 lg:grid-cols-3 lg:text-left justify-items-center items-center">
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.towardsikhlaas.simplyqibla"
          className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-cover hover:bg-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-none group-hover:bg-[url('/play.webp')] group-hover:bg-cover group-hover:bg-center transition-all duration-300"></div>
          <h2 className={`mb-3 text-2xl font-semibold relative z-10`}>
            Play Store{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 relative z-10`}>
            Get it on the Android Play Store.
          </p>
        </a>

        <a
          target="_blank"
          href="https://apps.apple.com/app/id6504881956"
          className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-cover hover:bg-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-none group-hover:bg-[url('/apple.webp')] group-hover:bg-cover group-hover:bg-center transition-all duration-300"></div>
          <h2 className={`mb-3 text-2xl font-semibold relative z-10`}>
            App Store{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 relative z-10`}>
            Download it on the iOS App Store.
          </p>
        </a>

        <a
          target="_blank"
          href="https://github.com/TowardsIkhlaas/simply_qibla"
          className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-cover hover:bg-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-none group-hover:bg-[url('/star.webp')] group-hover:bg-cover group-hover:bg-center transition-all duration-300"></div>
          <h2 className={`mb-3 text-2xl font-semibold relative z-10`}>
            Star Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 relative z-10`}>
            Star our repository on GitHub.
          </p>
        </a>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="fixed bottom-0 left-0 mb-4 flex h-12 w-full items-end justify-center p-4">
          <a
            className="flex place-items-center gap-1 px-4 py-2 hover:text-lime-400 transition-colors duration-300"
            href="https://towardsikhlaas.com"
            target="_blank"
          >
            TowardsIkhlaas
          </a>
          <a
            className="flex place-items-center gap-1 px-4 py-2 hover:text-amber-400 transition-colors duration-300"
            href="https://forms.gle/KGkR4JpjZYmysNwD6"
            target="_blank"
          >
            Collaborate
          </a>
          <a
            className="flex place-items-center gap-2 px-4 py-2 hover:text-cyan-400 transition-colors duration-300"
            href="https://ko-fi.com/TowardsIkhlaas"
            target="_blank"
          >
            Ko-Fi
          </a>
          <a
            className="flex place-items-center gap-2 px-4 py-2 hover:text-red-400 transition-colors duration-300"
            href="https://forms.gle/n8BQxhd8f74dphD49"
            target="_blank"
          >
            Support
          </a>
          <a
            className="flex place-items-center gap-2 px-4 py-2 hover:text-pink-500 transition-colors duration-300"
            href="https://www.instagram.com/towardsikhlaas"
            target="_blank"
          >
            IG
          </a>
        </div>
      </div>
    </main>
  );
}
