import { makeStyles } from "@mui/styles";

export const useDetailsStyle = makeStyles({
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },

  numbers: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "25px",
  },

  detailsContent: {
    width: "800px",
    height: '400px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
 
  detailsData: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20%',
    height: '100%',
    margin: '20px',
  },

  detailsList: {
    width: '80%',
    height: '100%',
  }
});
