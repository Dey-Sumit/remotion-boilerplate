import { z } from "zod";
import { Loader2 } from "lucide-react";

import { CompositionProps } from "../types/constants";
import { useRendering } from "../helpers/use-rendering";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { DownloadButton } from "./download-button";
import { COMP_NAME } from "@/app/page";

export const RenderControls: React.FC<{
  text: string;
  setText: (value: string) => void;
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ text, setText, inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4 p-4">
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <Input
            disabled={state.status === "invoking"}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter text..."
          />

          <div className="flex justify-end">
            <Button
              disabled={state.status === "invoking"}
              onClick={renderMedia}
            >
              {state.status === "invoking" && (
                <Loader2 className="animate-spin" />
              )}
              Render video
            </Button>
          </div>

          {state.status === "error" ? (
            <Alert variant="destructive">
              <AlertDescription>{state.error.message}</AlertDescription>
            </Alert>
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" || state.status === "done" ? (
        <>
          <Progress
            value={state.status === "rendering" ? state.progress * 100 : 100}
          />

          <div className="flex justify-end">
            <DownloadButton undo={undo} state={state} />
          </div>
        </>
      ) : null}
    </div>
  );
};
