import React from 'react'
import Header from './components/Header'
import Image from "next/image"
import { getProducts } from '@/sanity/product-utils'
import ProductCard from './components/ProductCard'

export default async function Home() {
  const products = await getProducts();
  //const posts = await getBlog();
  const textMitKlammern = "{perfekt unperfekt}";


  return (
    <div className="font-primary bg-greybg">
      <Header textWhite={true} />
      <div className="absolute ">
        <video
          src="\video\reanalogvideo.mp4"
          autoPlay="{true}"
          loop
          muted
          className="h-[700px] object-cover md:h-screen md:w-screen brightness-50"
        ></video>
      </div>
      <div className="relative isolate pt-48  px-4 sm:py-40 lg:pt-96 lg:px-0 mx-auto xl:w-[1200px]">
        <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
          <div className="flex gap-x-36">
            <h1 className="text-xl font-primary text-white">Stefan Porkert</h1>
            <h1 className="text-xl font-primary text-white">
              Selected Artwork <br></br> 2001 — 2023
            </h1>
          </div>

          <p className="mt-6 text-4xl text-white font-primary lg:text-9xl">
            {textMitKlammern}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Image
              className=""
              src="/icons/PfeilStartseite-svg.png"
              alt=""
              width={48}
              height={41}
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col pt-[350px] md:pt-[80px] space-y-4 mx-auto xl:w-[1200px]">
        <h1 className="text-[54px] text-black ">AKTUELLE ARBEITEN</h1>
      </div>

      <div className="flex">
        <div className="mx-auto overflow-hidden ">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-0 lg:gap-x-[40px] gap-y-6">

        {products?.map((product)=>(
           <ProductCard key={product._id} product={product} />
          ))} 

          </div>
        </div>
      </div>
      <div className="mx-auto pt-20 xl:w-[1200px]">
        <button
          className=" relative bg-white z-0 border-[3px] border-black bg-transparent py-2.5 px-[40px] font-medium 
        uppercase text-black transition-colors hover:text-white before:absolute 
        before:left-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left 
        before:scale-y-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] 
        before:hover:scale-y-100 hover:z-50 text-[20px]"
        >
          WEITERE ARBEITEN
        </button>
        <div className="text-[54px] pt-24 pb-4">ZEITGEIST</div>
      </div>

      <div className="flex mx-auto xl:w-[1200px]">
        <div className="mx-auto overflow-hidden pb-16 ">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6  md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">

            {/* {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))} */}

          </div>
        </div>
      </div>

    
    </div>
  )
}

