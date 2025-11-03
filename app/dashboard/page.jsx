"use client";
import { UploadCloud, Wand } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import VideoCrateOption from "./_components/VideoCrateOption";

function Page() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className="p-6 sm:p-10">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {videoList.length == 0 && (
        <VideoCrateOption />
      )}
    </div>
  );
}

export default Page;
