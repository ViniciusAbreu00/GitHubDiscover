import {
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import { useDetailsStyle } from "./Details.style";

export default function Details({ apiData, apiIssues, apiForks }) {
  const repoData = apiData;
  const issuesData = apiIssues;
  const forksData = apiForks;
  const styles = useDetailsStyle();


  return (
    <Box className={styles.details}>
      <Box className={styles.card}>
        <Card
          style={{
            borderRadius: "10px 10px 0 0",
            display: "flex",
            width: "800px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {repoData?.full_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {repoData?.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image={repoData?.owner?.avatar_url}
          />
        </Card>
      </Box>
      <Box className={styles.detailsContent}>
        <Box className={styles.detailsData}>
          <p className={styles.numbers}>{forksData?.length}</p>
          <p className={styles.text}>Forks</p>
          <p className={styles.numbers}>{issuesData?.length}</p>
          <p className={styles.text}>Issues</p>
          <p className={styles.numbers}>JavaScript</p>
          <p className={styles.text}>Issues</p>
        </Box>
        <Box className={styles.detailsList}>
          <p className={styles.numbers}>Issues</p>
          <List
            sx={{ width: "100%", overflow: "auto", maxHeight: "100%" }}
            subheader={<li />}
          >
            <ListSubheader>Issues</ListSubheader>
            {issuesData.map((data) => (
              <a
                style={{ textDecoration: "none", color: "#000000" }}
                key={data?.id}
                href={data?.html_url}
              >
                <ListItemButton style={{ backgroundColor: "#F8F8F8" }}>
                  <ListItemText
                    primary={data?.title}
                    secondary={data?.user.login}
                  />
                </ListItemButton>
              </a>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
