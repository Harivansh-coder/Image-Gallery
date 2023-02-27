import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import searchImages from "../utility/searchImages";
import ThemeToggle from "./ThemeToggle";
import { useDebounce } from "usehooks-ts";
import { useImageStore } from "../store/imageState";

const Header = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const setImageState = useImageStore((state) => state.setImage);
  const setQueryState = useImageStore((state) => state.setQuery);

  const debouncedQuery = useDebounce(query, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setQueryState(event.target.value);
  };

  // https://usehooks-ts.com/react-hook/use-debounce

  const fetchRequest = useCallback(() => {
    searchImages(debouncedQuery).then((data: []) => {
      setImages(data);
    });
    console.log(debouncedQuery);
    console.log(images);

    setImageState(images);
  }, [debouncedQuery]);

  useEffect(() => {
    fetchRequest();
    setImages(images);
  }, [debouncedQuery, fetchRequest]);

  return (
    <div className="flex justify-between items-center bg-black text-white p-4 mb-4">
      <div className="justify-start text-sm md:text-lg lg:text-xl font-mono">
        <span className="">Image Gallery</span>
      </div>
      <div className="w-3/5 flex justify-between items-center">
        <FormControl className="bg-white w-4/5 lg:w-3/5 rounded-lg">
          {/* https://usehooks-ts.com/react-hook/use-debounce */}
          {/* Yeh Dekh lena agar search button nahi rakhna toh  ok*/}
          <Input
            className="py-1 px-2"
            id="standard-adornment-search"
            type="text"
            value={query}
            placeholder="Search..."
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search icon">
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
