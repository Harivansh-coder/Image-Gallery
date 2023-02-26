import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const [img, setImg] = useState([]);
  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  // const fetchRequest = async () => {
  //   const data = await fetch(
  //     `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
  //   );
  //   const dataJ = await data.json();
  //   const result = dataJ.results;
  //   console.log(result);
  //   setRes(result);
  // };

  // useEffect(() => {
  //   fetchRequest();
  // }, []);

  return (
    <div className="flex justify-between items-center bg-black text-white p-4 mb-4">
      <div className="justify-start text-sm md:text-lg lg:text-xl font-mono">
        Image Gallery
      </div>
      <div className="justify-end w-3/5">
        <FormControl className="bg-white w-3/4 lg:w-2/4 rounded-lg">
          <Input
            className="py-1 px-2"
            id="standard-adornment-search"
            type="text"
            value={query}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            startAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search icon">
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div>
        <DarkModeToggle
          onChange={() => {
            isDarkMode === false ? setIsDarkMode(true) : setIsDarkMode(false);
          }}
          checked={isDarkMode}
          size={45}
        />
      </div>
    </div>
  );
};

export default Header;
