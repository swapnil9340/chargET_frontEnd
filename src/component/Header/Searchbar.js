import React, { useState } from "react";
import classes from "../../styles/style.module.scss";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate back
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div className={classes.Header}>
      {/* Back Button */}
      {router.pathname !== "/" && (
        <div>
          <IconButton onClick={handleBack}>
            <FaArrowLeft />
          </IconButton>
        </div>
      )}

      {/* Search Bar */}
      <div className={classes.searchbar}>
        {!searchText && <IoSearch />}
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
        {searchText && (
          <IconButton onClick={clearSearch}>
            <RxCross2 />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Header;
