const SearchBox = ({ className, placeholder, onChangeHandler, searchBy }) => {
  return (
    <div>
      <label for="name">{`Search by ${searchBy}:`}</label>
      {/* Input field for searching characters */}
      <input
        type="search"
        className={`${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
        id="name"
      />
    </div>
  );
};

export default SearchBox;
