import { Composition } from "remotion";
import { Main } from "../composition/boilerplate-composition/main";
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { NextLogo } from "../composition/boilerplate-composition/next-logo";

import RemotionARoot from "../composition/delba/index";

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

      {/* <Composition
        id="code-transition-composition"
        component={NewRemotionComposition}
        defaultProps={{
          slides: TEST_COMPOSITION_PROPS.slides,
        }}
        fps={30}
        width={1920}
        height={1080}
        durationInFrames={600}
      /> */}
      <RemotionARoot />
    </>
  );
};
