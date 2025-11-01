import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UploadCloud, Wand } from "lucide-react";
import Link from "next/link";

function CreateButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-orange-600 hover:bg-orange-700">
            {" "}
            + Create New Video
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-semibold">
              Let's Create a New Video
            </DialogTitle>
            <DialogDescription className="text-center text-gray-500 mt-1">
              Choose how you want to create your video
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <Link
              href="/create-ai-video"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-orange-50 transition-all"
            >
              <Wand className="size-6 text-orange-600" />
              <div className="text-left">
                <h2 className="font-medium text-lg">Generate with AI</h2>
                <p className="text-sm text-gray-500">
                  Let AI create a unique video for you
                </p>
              </div>
            </Link>

            <Link
              href="/editor"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-orange-50 transition-all"
            >
              <UploadCloud className="size-6 text-orange-600" />
              <div className="text-left">
                <h2 className="font-medium text-lg">Create from Scratch</h2>
                <p className="text-sm text-gray-500">
                  Start from your own uploaded content
                </p>
              </div>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
