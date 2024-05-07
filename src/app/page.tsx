"use client"
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const container = useRef<HTMLDivElement | null>(null)
    const [containerHeight, setContainerHeight] = useState(0)
    const [isEndOfPage, setIsEndOfPage] = useState(false);

    useEffect(() => {
      if (container.current) {
        const height = container.current.getBoundingClientRect().height;
        setContainerHeight(height)
      }
    }, [container])

    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

        if (windowHeight + scrollTop >= documentHeight) {
          setIsEndOfPage(true)
        } else {
          setIsEndOfPage(false)
        }
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    })

    return (
      <div className="grid grid-cols-2" ref={container}>
        {/* <div>
          <h1 className={`flex justify-center items-centertext-4xl font-extrabold tracking-tight lg:text-5xl`}>
          Pedro Lucas Santos
        </h1>
        </div>
        <div>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aperiam ex molestias velit est? Reiciendis accusantium voluptatibus adipisci, consequuntur architecto perspiciatis nihil quibusdam optio enim, nemo exercitationem iste consequatur. Sapiente!
          </span>
        </div> */}
      </div>
  );
}
