const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <label>{`Search:`}</label>
      {/* Input field for searching characters */}
      <input
        type="search"
        className={`${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
