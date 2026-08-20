import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[520px] flex-col items-center justify-center gap-5 overflow-hidden px-5 py-16 text-sm text-white md:min-h-[570px] md:text-base">
        <div className="flex items-center justify-center gap-3 text-4xl font-black tracking-tight md:text-6xl">Buy Me A Chai<span><Image className="drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]" src="/tea2.png" width={80} height={80} alt="" /></span></div>
        <p className="max-w-xl text-center text-base leading-7 text-slate-200 md:text-lg">
          A crowdfunding platform for creators to fund their projects and ideas.
        </p>
        <p className="max-w-xl text-center leading-7 text-slate-300">
          A place where your followers can support you by buying you a Chai.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link href={"/login"}>
            <button type="button" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-300">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="rounded-xl border border-cyan-200/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-cyan-300">Read More</button>
          </Link>
        </div>
      </div>
      <div className="mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent"></div>

      <div className="container mx-auto px-6 pb-24 pt-20 text-white">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-black leading-tight md:text-4xl">Your Followers can buy you a Chai</h2>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="item flex flex-col items-center justify-center space-y-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
            <Image className="h-24 w-24 rounded-full p-2" src="/coder3.gif" width={24} height={24} alt="" />
            <p className="text-lg font-bold text-center">Build what you love</p>
            <p className="text-center">Turn your passion into progress with support from the people who enjoy your work.</p>
          </div>

          <div className="item flex flex-col items-center justify-center space-y-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
            <Image className="rounded-full p-2" src="/coin.gif" width={100} height={100} alt="" />
            <p className="text-lg font-bold text-center">Receive a little boost</p>
            <p className="text-center">Each chai is a simple way for followers to contribute to your next idea, project, or goal.</p>
          </div>

          <div className="item flex flex-col items-center justify-center space-y-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
            <Image className="rounded-full p-2" src="/group.gif" width={100} height={100} alt="" />
            <p className="text-lg font-bold text-center">Grow with your community</p>
            <p className="text-center">Share your page, connect with supporters, and celebrate the people cheering you on.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent"></div>

      <div className="container mx-auto flex flex-col items-center justify-center px-6 pb-24 pt-20 text-white">
        <h2 className="mb-10 text-center text-3xl font-black md:text-4xl">Learn more about us</h2>
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-cyan-200/15 bg-slate-950/20 shadow-2xl shadow-cyan-950/40">
          <video
            className="aspect-video h-auto w-full object-cover"
            src="/intro_video.mp4"
            controls
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
