import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useAppStyle } from "./App.style";
import { Box } from "@mui/material";
import axios from "axios";

export default function App() {
  const [apiRepo, setApiRepo] = useState([]);
  const [apiIssues, setApiIssues] = useState([]);
  const [apiForks, setApiForks] = useState([])
  const [infoMode, setInfoMode] = useState(false);

  function apiCallRepos(repo) {
    axios.get(`https://api.github.com/repos/${repo}`).then(({ data }) => {
      setApiRepo(data);
      setInfoMode(true);
    }).catch((error) => alert('Repositório não encontrado'));
  }
  function apiCallIssues(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}/issues`)
      .then(({ data }) => {
        setApiIssues(data);
      });
  }
  function apiCallForks(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}/forks`)
      .then(({ data }) => {
        setApiForks(data);
      });
  }
  const styles = useAppStyle();
  return (
    <Box className={styles.app}>
      <Header />
      <Routes>
        <Route
          path="/home"
          
          element={
            <Home
              apiCall={apiCallRepos}
              apiData={apiRepo}
              infoMode={infoMode}
              apiCallIssues={apiCallIssues}
              apiCallForks={apiCallForks}
            />
          }
        />
        <Route
          path="details"
          element={<Details apiData={apiRepo} apiIssues={apiIssues} apiForks={apiForks}/>}
        />
      </Routes>
    </Box>
  );
}
