'use client'
import React, { useState } from "react"
import { toast } from "sonner"

import SimpleMarquee from "@/fancy/components/blocks/simple-marquee"
import { submitContactInquiry } from "@/app/actions"

const exampleImages = [
  "https://cdn.cosmos.so/4b771c5c-d1eb-4948-b839-255dbeb931ba?format=jpeg",
  "https://cdn.cosmos.so/a8d82afd-2293-43ad-bac3-887683d85b44?format=jpeg", 
  "https://cdn.cosmos.so/49206ba5-c174-4cd5-aee8-5b744842e6c2?format=jpeg",
  "https://cdn.cosmos.so/b29bd150-6477-420f-8efb-65ed99694421?format=jpeg",
  "https://cdn.cosmos.so/e1a0313e-7617-431d-b7f1-f1b169e6bcb4?format=jpeg",
  "https://cdn.cosmos.so/ad640c12-69fb-4186-bc3d-b1cc93986a37?format=jpeg",
  "https://cdn.cosmos.so/5cf0c3d2-e785-41a3-b0c8-a073ee2f2862?format=jpeg",
  "https://cdn.cosmos.so/938ab21c-a975-41b3-b303-418290343b09?format=jpeg",
  "https://cdn.cosmos.so/2e14a9bb-27e3-40fd-b940-cfb797a1224c?format=jpeg",
  "https://cdn.cosmos.so/81841d9f-e164-4770-aebc-cfc97d72f3ab?format=jpeg",
  "https://cdn.cosmos.so/49b81db0-37ea-4569-b0d6-04afa5115a10?format=jpeg",
  "https://cdn.cosmos.so/ade1834b-9317-44fb-8dc3-b43d29acd409?format=jpeg",
  "https://cdn.cosmos.so/621c250c-3833-45f9-862a-3f400aaf8f28?format=jpeg",
  "https://cdn.cosmos.so/f9b7eae8-e5a6-4ce6-b6e1-9ef125ba7f8e?format=jpeg",
  "https://cdn.cosmos.so/bd56ed6d-1bbd-44a4-b1a1-79b7199bbebb?format=jpeg",
]

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer duration-300 ease-in-out">{children}</div>
)

export default function SimpleMarqueeDemo() {
  const firstThird = exampleImages.slice(0, Math.floor(exampleImages.length / 3))
  const secondThird = exampleImages.slice(Math.floor(exampleImages.length / 3), Math.floor(2 * exampleImages.length / 3))
  const lastThird = exampleImages.slice(Math.floor(2 * exampleImages.length / 3))

  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  

  return (
    <div className="flex w-full min-h-dvh justify-center items-center flex-col bg-black" ref={(node) => setContainer(node)}>
      <div className="flex flex-col my-24 items-center px-4 ">
        <h1 className="text-center text-4xl sm:text-3xl md:text-4xl text-white font-calendas">moechehab</h1>
        <p className="text-center text-sm sm:text-xs md:text-lg text-gray-400 font-calendas mx-auto mt-2">exploring the boundaries of technology</p>
      </div>
      <div className="w-full flex flex-col space-y-2 sm:space-y-3 md:space-y-4 overflow-hidden">
        <div className="w-full overflow-hidden">
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={4}
            draggable={false}
            scrollSpringConfig={{ damping: 50, stiffness: 400 }}
            slowDownFactor={0.1}
            slowdownOnHover
            slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
            scrollAwareDirection={true}
            scrollContainer={{ current: container! }}
            useScrollVelocity={true}
            direction="left"
          >
            {firstThird.map((src, i) => (
              <MarqueeItem key={i}>
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="h-20 w-32 sm:h-24 sm:w-40 md:h-32 md:w-48 object-cover"
                />
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </div>

        <div className="w-full overflow-hidden">
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={4}
            scrollAwareDirection={true}
            scrollSpringConfig={{ damping: 50, stiffness: 400 }}
            slowdownOnHover
            slowDownFactor={0.1}
            slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
            useScrollVelocity={true}
            scrollContainer={{ current: container! }}
            draggable={false}
            direction="right"
          >
            {secondThird.map((src, i) => (
              <MarqueeItem key={i}>
                <img
                  src={src}
                  alt={`Image ${i + firstThird.length}`}
                  className="h-20 w-32 sm:h-24 sm:w-40 md:h-32 md:w-48 object-cover"
                />
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </div>

        <div className="w-full overflow-hidden">
          <SimpleMarquee
            className="w-full"
            baseVelocity={8}
            repeat={4}
            draggable={false}
            scrollSpringConfig={{ damping: 50, stiffness: 400 }}
            slowDownFactor={0.1}
            slowdownOnHover
            slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
            scrollAwareDirection={true}
            scrollContainer={{ current: container! }}
            useScrollVelocity={true}
            direction="left"
          >
            {lastThird.map((src, i) => (
              <MarqueeItem key={i}>
                <img
                  src={src}
                  alt={`Image ${i + firstThird.length + secondThird.length}`}
                  className="h-20 w-32 sm:h-24 sm:w-40 md:h-32 md:w-48 object-cover"
                />
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </div>
   
  
        <div className="flex flex-col gap-8 w-full mt-12 px-8 bg-black">
            <h1 className="text-2xl text-white font-semibold font-calendas">Experience</h1>

            <div className="text-left">
                <div className="font-medium text-white font-calendas ">Vently</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-[300px]  font-calendas">Built a consumer social app in the Bay Area.</p>
            </div>


            <div className="text-right">
                <div className="font-medium text-white font-calendas ">Alpine ITW, 2024</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-[300px]  font-calendas">Developed a load case visualization software for structural engineers.</p>
            </div>

        

            <div className="text-right">
                <div className="font-medium text-white">Interplanetary Space Initiative, 2022-2025</div>
                <p className="mt-2 text-sm text-muted-foreground ">Created a heatmap to showcase space news articles.</p>
            </div>

        </div>

        
        <div className="flex flex-col gap-8 w-full md:w-[400px] mx-auto mt-12 px-8 bg-black my-12">
      <div>
      <h3 className="text-2xl text-white font-semibold font-calendas">Contact Me</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Feel free to reach out if you have any questions or just want to chat about technology, engineering, or anything else!
            </p>
      </div>
       

            
            <form onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                inquiry: formData.get('inquiry') as string,
              }
              
              setIsLoading(true)
              const result = await submitContactInquiry(data)
              setIsLoading(false)
              
              if (result.success) {
                toast.success("Thanks for reaching out! I'll get back to you soon.")
                e.currentTarget.reset()
              } else {
                toast.error(result.error || "Failed to submit inquiry")
              }
            }} className="flex flex-col gap-4">
              <input 
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="flex h-11 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-colors"
              />
              <input 
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex h-11 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-colors"
              />
              <textarea 
                name="inquiry"
                placeholder="Your message"
                required
                rows={4}
                className="flex w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="shrink-0 inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        
        
 
      </div>
      
      <div>
      <div className="flex flex-row gap-4 mb-12">
    <a href="https://github.com/mohamadchehab" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
    <a href="https://x.com/moeintechoff" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6823 10.6218ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z" />
      </svg>
    </a>
  </div>
      </div>
    </div>
  )
}
