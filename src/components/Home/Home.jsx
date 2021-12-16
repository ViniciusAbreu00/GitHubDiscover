import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useHomeStyle } from "./Home.style";
import { Link } from "react-router-dom";

export default function Home({ apiCall, apiData, infoMode, apiCallIssues, apiCallForks }) {
  const [searchValue, setSearchValue] = useState([]);
  const repoData = apiData;
  const styles = useHomeStyle();

  function callApis() {
    apiCall(searchValue)
    apiCallIssues(searchValue)
    apiCallForks(searchValue)
  }

  return (
    <Box className={styles.homeBox}>
      <Box className={styles.texts}>
        <h1>Github</h1>
        <h1 style={{ marginLeft: "1%" }}>Discovery</h1>
      </Box>
      <Box className={styles.searchBar}>
        <FormControl className={styles.formControl} variant="outlined">
          <OutlinedInput
            value={searchValue}
            onChange={(ev) => setSearchValue(ev.target.value)}
            placeholder="Ex.:Facebook/React"
            id="input-with-icon-adornment"
            style={{
              width: "500px",
              height: "60px",
              backgroundColor: "#DDDDDD",
              borderRadius: "50px",
            }}
            endAdornment={
              <InputAdornment>
                <IconButton
                  onClick={() =>
                    callApis()
                  }
                >
                  <SearchIcon style={{ color: "#722FE0" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      {infoMode && (
        <Box className={styles.card}>
          <Card style={{ borderRadius: "10px" }}>
            <Link to="/details">
              <CardActionArea style={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={repoData.owner.avatar_url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {repoData.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {repoData.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Box>
      )}
    </Box>
  );
}
