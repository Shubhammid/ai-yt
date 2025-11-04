"use client";

import { VideoFrameContext } from "@/app/_context/VideoFramesContext";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const defaultFrame = {
  image: "/clapperboard.png",
  text: "Hello World",
  textColor: "black",
  fontSize: 20,
  duration: 2,
};

function TrackList() {
  const [frameList, setFrameList] = useState([defaultFrame]);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);

  const addNewFrame = () => {
    setFrameList((prev) => [...prev, defaultFrame]);
  };

  const removeFrame = (indexToRemove) => {
    const updatedFrameList = frameList?.filter(
      (_, index) => index !== indexToRemove
    );
    setFrameList(updatedFrameList);
  };

  useEffect(() => {
    let totalDuration = 0;
    frameList.forEach((frame) => {
      totalDuration = totalDuration + frame.duration;
    });

    frameList &&
      setVideoFrames({
        totalDuration: totalDuration,
        frameList: frameList,
        selectedFrame: selectedFrame,
      });
  }, [frameList, selectedFrame]);

  useEffect(() => {
    if (Array.isArray(videoFrames?.frameList)) {
      setFrameList(videoFrames.frameList);
    }
  }, [videoFrames]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div
        className="h-[70vh] overflow-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>{" "}
        {Array.isArray(frameList) &&
          frameList.map((frame, index) => (
            <div
              key={index}
              onClick={() => setSelectedFrame(index)}
              className={`flex items-center flex-col border-b p-2 mt-3 rounded-lg cursor-pointer ${
                selectedFrame === index
                  ? "bg-orange-100 dark:bg-orange-900/40 border-orange-400 shadow-md scale-105"
                  : "bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700"
              }`}
            >
              <Image
                src={frame.image}
                alt={index}
                width={40}
                height={40}
                className="w-full h-[40px] object-contain rounded-lg"
              />
              <h2 className="text-xs text-gray-700 dark:text-gray-300 text-center mt-1 line-clamp-2">
                {frame.text}
              </h2>
              {selectedFrame === index && (
                <Trash2
                  className="mt-1 h-3 w-3 text-red-500"
                  onClick={() => removeFrame(index)}
                />
              )}
            </div>
          ))}
        <Button
          size="sm"
          onClick={addNewFrame}
          className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          Add
        </Button>
      </div>
    </div>
  );
}

export default TrackList;
