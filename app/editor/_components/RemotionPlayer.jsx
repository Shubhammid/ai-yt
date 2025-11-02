"use client";

import React, { useContext, useState } from "react";
import { Player } from "@remotion/player";
import RemotionComposition from "./RemotionComposition";
import { FullscreenIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VideoFrameContext } from "@/app/_context/VideoFramesContext";

function RemotionPlayer() {

const {videoFrames,setVideoFrames}=useContext(VideoFrameContext)

const [screenSize,setScreenSize]=useState({
    width:500,
    height:300
})

  return (
    <div>
      <div className="flex items-center justify-center">
        { videoFrames?.totalDuration && <Player
          component={RemotionComposition}
          durationInFrames={Number(videoFrames?.totalDuration*30)}
          compositionWidth={screenSize.width}
          compositionHeight={screenSize.height}
          fps={30}
          controls
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        />}
      </div>
      <div className="mt-5 flex gap-2 items-center">
        <FullscreenIcon />
        <Select onValueChange={(v)=>setScreenSize(JSON.parse(v))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JSON.stringify({width:400, height:400})}>1:1</SelectItem>
            <SelectItem value={JSON.stringify({width:500, height:300})}>16:9</SelectItem>
            <SelectItem value={JSON.stringify({width:300, height:500})}>9:16</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default RemotionPlayer;
