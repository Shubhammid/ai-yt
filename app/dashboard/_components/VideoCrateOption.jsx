import React from "react";
import { UploadCloud, Wand } from "lucide-react";
import Link from "next/link";
import uuid4 from "uuid4";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function VideoCrateOption() {
  const { user } = useUser();
  const router = useRouter();

  const CreateNewScrachVideo = async () => {
    const videoId = uuid4();
    const result = await axios.post("/api/video", {
      videoId: videoId,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result);
    router.push("/editor/" + videoId);
  };

  return (
    <div className="mt-4 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-neutral-950 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-center">
        Let’s Create Your First Video 🎬
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          href="/create-ai-video"
          className="flex items-center gap-4 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:bg-orange-50 dark:hover:bg-orange-950 hover:shadow-md transition-all duration-300"
        >
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
            <Wand className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-lg text-gray-900 dark:text-white">
              Generate with AI
            </h3>
          </div>
        </Link>

        <div
          onClick={CreateNewScrachVideo}
          className="flex items-center gap-4 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:bg-orange-50 dark:hover:bg-orange-950 hover:shadow-md transition-all duration-300"
        >
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
            <UploadCloud className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-lg text-gray-900 dark:text-white">
              Create from Scratch
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCrateOption;
