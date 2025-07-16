import { create } from "zustand";

interface ChannelInfo {
  channelName: string;
  channelDescription: string;
}

interface ChannelStore {
  channel: ChannelInfo;
}
