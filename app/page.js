import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <p className="text-3xl font-bold"> The best Url shortener in the world. </p>
          <p className="px-5 py-3 text-center">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 text-white'>
            <Link href="/shorten"> <button className= 'font-bold bg-purple-500 rounded-lg py-1 shadow-lg p-3'>
            Try Now</button>
            </Link> 
            <Link href="/github"> <button className= 'font-bold bg-purple-500 rounded-lg py-1 shadow-lg     p-3'>GitHub</button> 
            </Link> 
          </div>
        </div>
        <div className=" flex justify-start relative ">
          <Image className="mix-blend-darken" src={"/vector.avif"} alt="img of vector" fill={true}  />
        </div>
      </section>
    </main>
  );
}
