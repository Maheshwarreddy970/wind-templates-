"use client"

import { useState, MouseEvent, useCallback } from "react";
import { FaCheck } from "react-icons/fa6";
import { ServicesList } from "@/lib/serviceslist/serviceslist";
import { IoMdPaperPlane } from "react-icons/io";

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export const ServiceCard = ({data}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
        <div
          className="z-40 card relative h-full w-64 rounded-xl bg-white transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          }}
        >
          <div className="pulse absolute -inset-[-1px] rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-900 opacity-75 blur-lg" />
          <div className="relative h-full p-5 w-full select-none rounded-lg bg-white text-black">
            <div className=""><h1 className=" font-bold text-lg inline-block  text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-900">{data.Title}</h1></div>
            <div><p className=" tracking-tight	 text-xs my-3 ">{data.Subtitle1}</p></div>
            <div className="flex flex-col">
              {data.Points.map((point) => (<div className="flex gap-2 my-1">
                <FaCheck size={16} className=" h-4 w-4 text-green-800" />
                <span className="text-sm tracking-tighter">{point}</span>
              </div>))}
              <button
                className={`
          
        px-5 py-2 rounded-xl mt-5 
        flex items-center justify-center gap-2 
        text-white
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        group
        bg-gradient-to-r from-emerald-500 to-emerald-900
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
    `}
              >
                <IoMdPaperPlane  className=" text-white"/>

                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
    </>
  );
};
