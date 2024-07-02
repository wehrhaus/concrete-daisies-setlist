import { type Set, type Setlist as SetlistType } from "../../types";

export type SetlistProps = {
  children?: React.ReactNode;
  setList: SetlistType;
};

export const Setlist = (props: SetlistProps) => {
  // Loop through the setlist which is export type Setlist = Map<string, Set[]>;, write each SET as an <h1> followed by each song in that set's song title as an <h2>
  const renderSetlist = () => {
    const setlist: SetlistType = props.setList;
    const setlistKeys = [...setlist.keys()];

    return setlistKeys.map((setKey) => {
      const set: Set | undefined = props.setList.get(setKey)?.[0];

      return (
        <div key={setKey}>
          <h1>{setKey}</h1>
          <ul>
            {set &&
              set.songs.map((song) => (
                <li key={song.id}>
                  <h2>{song.title}</h2>
                </li>
              ))}
          </ul>
        </div>
      );
    });
  };

  console.log(props.setList);
  return (
    <div>
      {renderSetlist()}
      {props.children}
    </div>
  );
};
