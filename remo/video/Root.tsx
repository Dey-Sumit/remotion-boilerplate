import { Composition } from "remotion";
import { Main } from "../composition/boilerplate-composition/main";
import { defaultMyCompProps } from "../../types/constants";
import { NextLogo } from "../composition/boilerplate-composition/next-logo";

import DelbaComposition from "../composition/delba/index";
import { COMP_NAME } from "@/app/page";

const DURATION_IN_FRAMES = 200;
const VIDEO_WIDTH = 1280;
const VIDEO_HEIGHT = 720;
const VIDEO_FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id="NextLogo"
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />

      <DelbaComposition />
    </>
  );
};
