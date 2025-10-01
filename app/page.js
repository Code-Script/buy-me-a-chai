import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center h-[44vh] gap-4 px-5 md:px-0 text-sm md:text-base">
        <div className="md:text-5xl font-bold flex justify-center items-center gap-3 text-3xl">Buy Me A Chai<span><Image src="/tea2.gif" width={60} height={30} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects and ideas.
        </p>
        <p className="text-center md:text-left">
          A place where your followers can support you by buying you a Chai.
        </p>

        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white container mx-auto pb-24 pt-10 px-7">
        <h2 className="font-black text-3xl text-center my-8">Your Followers can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="rounded-full p-2 h-24 w-24" src="/coder3.gif" width={24} height={24} alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="rounded-full p-2" src="/coin.gif" width={100} height={100} alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="rounded-full p-2" src="/group.gif" width={100} height={100} alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white container mx-auto pb-24 pt-10 flex flex-col items-center justify-center">
        <h2 className="font-black text-3xl text-center my-8">Learn more about us</h2>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl-[50%] xl:h-[40vh] ">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/QtaorVNAwbI?si=VspiZDsHzhM4jYQe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
