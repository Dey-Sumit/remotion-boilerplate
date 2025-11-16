import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { temporal } from "zundo"; // Undo/redo middleware
import { defaultMyCompProps } from "@/types/constants";

type EditorState = {
  editorContent: string;
  setEditorContent: (content: string) => void;
};

const useEditorStore = create<EditorState>()(
  devtools(
    temporal(
      (set, get) => ({
        editorContent: defaultMyCompProps.title,
        setEditorContent: (content: string) => set({ editorContent: content }),
      }),
      { limit: 50 }, // Limit history to 50 states,
    ),
    { name: "EditorStore" },
  ),
);
export default useEditorStore;
