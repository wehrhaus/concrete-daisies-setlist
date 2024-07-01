import { Set, Setlist, SetlistKey } from "../types";
import { songMeta } from "./song-meta.map";
import { SONG_TITLE } from "./constants";

export const setOne: Set = {
  title: SetlistKey.SET_1,
  songs: [
    songMeta.find((song) => song.title === SONG_TITLE.GO_WITH_THE_FLOW)!,
    songMeta.find(
      (song) => song.title === SONG_TITLE.SUPER_MASSIVE_BLACK_HOLE
    )!,
    songMeta.find((song) => song.title === SONG_TITLE.GOD_IS_IN_THE_RADIO)!,
    songMeta.find((song) => song.title === SONG_TITLE.YOU_CAN_BE_SO_CRUEL)!,
    songMeta.find((song) => song.title === SONG_TITLE.PURE_MASSACRE)!,
    songMeta.find((song) => song.title === SONG_TITLE.SLITHER)!,
    songMeta.find((song) => song.title === SONG_TITLE.CHECK_MY_BRAIN)!,
    songMeta.find((song) => song.title === SONG_TITLE.WOULD)!,
    songMeta.find((song) => song.title === SONG_TITLE.TEENAGERS)!,
    songMeta.find((song) => song.title === SONG_TITLE.TYLER)!,
    songMeta.find((song) => song.title === SONG_TITLE.WOLF_LIKE_ME)!,
    songMeta.find((song) => song.title === SONG_TITLE.COLD_FEELINGS)!,
    songMeta.find((song) => song.title === SONG_TITLE.TEAR_YOU_APART)!,
  ],
};

export const setTwo: Set = {
  title: SetlistKey.SET_2,
  songs: [
    songMeta.find((song) => song.title === SONG_TITLE.CRACKERMAN)!,
    songMeta.find((song) => song.title === SONG_TITLE.BREED)!,
    songMeta.find((song) => song.title === SONG_TITLE.IN_BLOOM)!,
    songMeta.find((song) => song.title === SONG_TITLE.PSEUDO_SUICIDE)!,
    songMeta.find((song) => song.title === SONG_TITLE.SMOOTH_SAILING)!,
    songMeta.find(
      (song) => song.title === SONG_TITLE.EVERYDAY_IS_EXACTLY_THE_SAME
    )!,
    songMeta.find((song) => song.title === SONG_TITLE.SUPERSONIC)!,
    songMeta.find((song) => song.title === SONG_TITLE.GO)!,
    songMeta.find((song) => song.title === SONG_TITLE.MY_NAME_IS_HUMAN)!,
    songMeta.find((song) => song.title === SONG_TITLE.OUT_OF_THE_BLACK)!,
    songMeta.find((song) => song.title === SONG_TITLE.AGAIN)!,
    songMeta.find((song) => song.title === SONG_TITLE.MAN_IN_THE_BOX)!,
  ],
};

export const setAlternates: Set = {
  title: SetlistKey.ALTERNATES,
  songs: [
    songMeta.find((song) => song.title === SONG_TITLE.MISERABLE)!,
    songMeta.find((song) => song.title === SONG_TITLE.STARS)!,
    songMeta.find((song) => song.title === SONG_TITLE.EVERLONG)!,
    songMeta.find((song) => song.title === SONG_TITLE.ON_A_PLAIN)!,
    songMeta.find((song) => song.title === SONG_TITLE.TODAY)!,
    songMeta.find((song) => song.title === SONG_TITLE.HASH_PIPE)!,
    songMeta.find((song) => song.title === SONG_TITLE.ALL_THE_SMALL_THINGS)!,
    songMeta.find((song) => song.title === SONG_TITLE.BYE_BYE_BABY)!,
    songMeta.find((song) => song.title === SONG_TITLE.REMEDY)!,
    songMeta.find((song) => song.title === SONG_TITLE.MAKE_IT_WIT_CHU)!,
    songMeta.find((song) => song.title === SONG_TITLE.EXIT)!,
    songMeta.find((song) => song.title === SONG_TITLE.SAY_IT_AINT_SO)!,
    songMeta.find((song) => song.title === SONG_TITLE.ALIVE)!,
    songMeta.find((song) => song.title === SONG_TITLE.HYSTERIA)!,
  ],
};

export const setlist07062024: Setlist = new Map();
setlist07062024.set(SetlistKey.SET_1, [setOne]);
setlist07062024.set(SetlistKey.SET_2, [setTwo]);
setlist07062024.set(SetlistKey.ALTERNATES, [setAlternates]);
