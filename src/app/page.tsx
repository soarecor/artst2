import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/static/artst.svg"
          alt="artst Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="pt-10">Under Construction...</div>
    </main>
  );
}
