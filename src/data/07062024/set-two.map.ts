import { type Set, SetlistKey } from "../../types";
import { songMeta } from "../song-meta.map";
import { SONG_TITLE } from "../constants";

export const songs = [
  SONG_TITLE.CRACKERMAN,
  SONG_TITLE.BREED,
  SONG_TITLE.IN_BLOOM,
  SONG_TITLE.PSEUDO_SUICIDE,
  SONG_TITLE.SMOOTH_SAILING,
  SONG_TITLE.EVERYDAY_IS_EXACTLY_THE_SAME,
  SONG_TITLE.SUPERSONIC,
  SONG_TITLE.GO,
  SONG_TITLE.MY_NAME_IS_HUMAN,
  SONG_TITLE.OUT_OF_THE_BLACK,
  SONG_TITLE.AGAIN,
  SONG_TITLE.MAN_IN_THE_BOX,
].map((title) => songMeta.find((song) => song.title === title)!);

export const setTwo: Set = {
  title: SetlistKey.SET_2,
  songs,
};
