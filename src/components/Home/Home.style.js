import { makeStyles } from "@mui/styles";

export const useHomeStyle = makeStyles({
  homeBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  texts: {
    color: "#722FE0",
    marginLeft: "10%",
    height: "100px",
    alignSelf: "normal",
  },

  searchBar: {
    width: "100%",
    height: "100px",
    margin: "5% 0",
    display: "flex",
    justifyContent: "center",
  },
  formControl: {},

  card: {
    width: "700px",
    height: "150px",
  },
});
