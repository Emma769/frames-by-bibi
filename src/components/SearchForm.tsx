import { forwardRef, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

type SearchFormProps = {
  isOpen: boolean;
  close: () => void;
};

const SearchForm = forwardRef<HTMLDivElement, SearchFormProps>(
  ({ isOpen, close }, ref) => {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (isOpen) {
        searchInputRef.current?.focus();
      }
    }, [isOpen]);

    return (
      <div className={`search ${isOpen ? "show" : ""}`} ref={ref}>
        <form>
          <div className="flex items-center relative mr-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              name="q"
              autoFocus
              ref={searchInputRef}
            />
            <button
              className="hover:cursor-pointer absolute right-2"
              type="submit"
            >
              <FiSearch />
            </button>
          </div>
          <button
            className="text-5xl hover:cursor-pointer h-fit"
            type="button"
            onClick={close}
          >
            <IoCloseSharp />
          </button>
        </form>
      </div>
    );
  }
);

export default SearchForm;
