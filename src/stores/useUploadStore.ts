import { create } from "zustand";

export type UploadStatus =
  | "idle"
  | "uploading"
  | "processing"
  | "done"
  | "error";

export interface VideoUploadState {
  videoId: string;
  name: string;
  progress: number; // 0-100
  status: UploadStatus;
}

interface UploadStore {
  uploads: Record<string, VideoUploadState>;
  addUpload: (upload: Omit<VideoUploadState, "status" | "progress">) => void;
  setProgress: (videoId: string, progress: number) => void;
  setStatus: (videoId: string, status: UploadStatus) => void;
  removeUpload: (videoId: string) => void;
}

export const useUploadStore = create<UploadStore>((set) => ({
  uploads: {},

  addUpload: ({ videoId, name }) =>
    set((state) => ({
      uploads: {
        ...state.uploads,
        [videoId]: { videoId, name, progress: 0, status: "uploading" },
      },
    })),

  setProgress: (videoId, progress) =>
    set((state) => ({
      uploads: {
        ...state.uploads,
        [videoId]: {
          ...state.uploads[videoId],
          progress,
        },
      },
    })),

  setStatus: (videoId, status) =>
    set((state) => ({
      uploads: {
        ...state.uploads,
        [videoId]: {
          ...state.uploads[videoId],
          status,
        },
      },
    })),

  removeUpload: (videoId) =>
    set((state) => {
      const { [videoId]: _, ...rest } = state.uploads;
      return { uploads: rest };
    }),
}));
