import { Setlist, SetlistKey } from "../../types";
import { setOne } from "./set-one.map";
import { setTwo } from "./set-two.map";
import { setAlternates } from "./set-alternates.map";

export const setlist07062024: Setlist = new Map();
setlist07062024.set(SetlistKey.SET_1, [setOne]);
setlist07062024.set(SetlistKey.SET_2, [setTwo]);
setlist07062024.set(SetlistKey.ALTERNATES, [setAlternates]);
