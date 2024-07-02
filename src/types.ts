export enum Key {
  DROP_D = "Drop D",
  HALF_STEP = "1/2 Step",
  HALF_STEP_DROPPED = "1/2 Step Dropped",
  STANDARD = "Standard",
  WHOLE_STEP = "Whole Step Down",
}

export type Keys = {
  actual: Key;
  transposed?: Key;
  user?: Key;
};

export enum MemberName {
  CHRIS = "Chris",
  JUSTIN = "Justin",
  PERRY = "Perry",
  ROD = "Rod",
}

export type BandMember = {
  name: MemberName;
  instrument: string[];
};

export type Band = BandMember[];

export type Set = {
  title: SetlistKey;
  songs: SongMeta[];
};

export enum SetlistKey {
  SET_1 = "Set 1",
  SET_2 = "Set 2",
  SET_3 = "Set 3",
  SET_4 = "Set 4",
  SET_5 = "Set 5",
  SET_6 = "Set 6",
  SET_7 = "Set 7",
  SET_8 = "Set 8",
  SET_9 = "Set 9",
  SET_10 = "Set 10",
  ALTERNATES = "Alternates",
}

export type Setlist = Map<string, Set[]>;

export type SongMeta = {
  id: string;
  key: Keys | Key;
  title: string;
  vocals: BandMember["name"][];
};

export type SongTitle = {
  [key: string]: string;
};
