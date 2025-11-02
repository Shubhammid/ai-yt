"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/UserDetailContext";
import { VideoFrameContext } from "./_context/VideoFramesContext";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);
  const [videoFrames, setVideoFrames] = useState([]);

  useEffect(() => {
    user && saveUserInfo();
  }, [user]);

  const saveUserInfo = async () => {
    const result = await axios.post("/api/user", {
      user: user,
    });
    setUserDetail(result?.data);
  };

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <VideoFrameContext.Provider value={{ videoFrames, setVideoFrames }}>
          {children}
        </VideoFrameContext.Provider>
      </UserDetailContext.Provider>
    </div>
  );
}

export default Provider;
