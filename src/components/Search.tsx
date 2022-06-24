export const Search = ({
  value,
  setSearchQuery,
}: {
  value: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Type event's name"
        value={value}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
      />
    </div>
  );
};
