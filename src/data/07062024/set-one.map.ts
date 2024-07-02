import { type Set, SetlistKey } from "../../types";
import { songMeta } from "../song-meta.map";
import { SONG_TITLE } from "../constants";

export const songs = [
  SONG_TITLE.GOD_IS_IN_THE_RADIO,
  SONG_TITLE.YOU_CAN_BE_SO_CRUEL,
  SONG_TITLE.PURE_MASSACRE,
  SONG_TITLE.SLITHER,
  SONG_TITLE.CHECK_MY_BRAIN,
  SONG_TITLE.WOULD,
  SONG_TITLE.TEENAGERS,
  SONG_TITLE.TYLER,
  SONG_TITLE.WOLF_LIKE_ME,
  SONG_TITLE.COLD_FEELINGS,
  SONG_TITLE.TEAR_YOU_APART,
].map((title) => songMeta.find((song) => song.title === title)!);

export const setOne: Set = {
  title: SetlistKey.SET_1,
  songs,
};
