"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo } from "react";
import { z } from "zod";
import { CompositionProps } from "../types/constants";
import { RenderControls } from "../components/render-controls";
import { Main } from "../remo/composition/boilerplate-composition/main";
import useEditorStore from "@/store/editor-state";

const DURATION_IN_FRAMES = 200;
const VIDEO_WIDTH = 1280;
const VIDEO_HEIGHT = 720;
const VIDEO_FPS = 30;
export const COMP_NAME = "MyComp";

const Home: NextPage = () => {
  const text = useEditorStore((state) => state.editorContent);
  const setText = useEditorStore((state) => state.setEditorContent);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div className="flex min-h-screen flex-col p-12 text-center">
      <div className="h-[600px]">
        <div
          className="rounded-geist mx-auto max-h-full overflow-hidden shadow-[0_0_200px_rgba(0,0,0,0.15)]"
          style={{
            aspectRatio: VIDEO_WIDTH / VIDEO_HEIGHT,
          }}
        >
          <Player
            component={Main}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
              // but not over inline styles
              width: "100%",
            }}
            controls
            autoPlay
            loop
          />
        </div>
      </div>
      <div className="flex-1">
        <RenderControls text={text} setText={setText} inputProps={inputProps} />
      </div>
    </div>
  );
};

export default Home;
