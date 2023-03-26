import styles from './Search.module.scss';
import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';
import search__loop from '../../assets/images/search__loop.png';
import clear__search from '../../assets/images/clear__search.png';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  /* console.log(inputRef); */

  return (
    <div className={styles.root}>
      <img src={search__loop} alt="" width={16} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Search..."
      />
      {value && (
        <img
          className={styles.clear}
          onClick={onClickClear}
          src={clear__search}
          alt=""
          width={20}
        />
      )}
    </div>
  );
};

export default Search;
