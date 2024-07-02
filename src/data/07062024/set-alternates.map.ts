import { type Set, SetlistKey } from "../../types";
import { songMeta } from "../song-meta.map";
import { SONG_TITLE } from "../constants";

export const songs = [
  SONG_TITLE.MISERABLE,
  SONG_TITLE.STARS,
  SONG_TITLE.EVERLONG,
  SONG_TITLE.ON_A_PLAIN,
  SONG_TITLE.TODAY,
  SONG_TITLE.HASH_PIPE,
  SONG_TITLE.ALL_THE_SMALL_THINGS,
  SONG_TITLE.BYE_BYE_BABY,
  SONG_TITLE.REMEDY,
  SONG_TITLE.MAKE_IT_WIT_CHU,
  SONG_TITLE.EXIT,
  SONG_TITLE.SAY_IT_AINT_SO,
  SONG_TITLE.ALIVE,
  SONG_TITLE.HYSTERIA,
].map((title) => songMeta.find((song) => song.title === title)!);

export const setAlternates: Set = {
  title: SetlistKey.ALTERNATES,
  songs,
};
