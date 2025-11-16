import React from "react";
import { Undo2, Download } from "lucide-react";

import { State } from "../helpers/use-rendering";
import { Button } from "./ui/button";

const Megabytes: React.FC<{
  sizeInBytes: number;
}> = ({ sizeInBytes }) => {
  const megabytes = Intl.NumberFormat("en", {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow",
  }).format(sizeInBytes);
  return <span className="opacity-60">{megabytes}</span>;
};

export const DownloadButton: React.FC<{
  state: State;
  undo: () => void;
}> = ({ state, undo }) => {
  if (state.status === "rendering") {
    return <Button disabled>Download video</Button>;
  }

  if (state.status !== "done") {
    throw new Error("Download button should not be rendered when not done");
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary" onClick={undo} size="icon">
        <Undo2 className="size-4" />
      </Button>
      <Button asChild>
        <a href={state.url}>
          <Download className="size-4" />
          Download video
          <Megabytes sizeInBytes={state.size} />
        </a>
      </Button>
    </div>
  );
};
