export type SetlistProps = {
  children?: React.ReactNode;
};

export const Setlist = (props: SetlistProps) => {
  return <div>{props.children}</div>;
};
