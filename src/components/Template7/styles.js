import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },

  part_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",

    flex: 1,
    margin: 5,
    border: "1px solid blue",
  },

  section_container: {
    display: "flex",
    flexDirection: "column",

    width: 213,
    height: 462,
  },

  no_section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",

    marginTop: 10,
    border: 1,
  },

  no_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",

    width: 120,
    height: 22,
  },

  title_section: {
    display: "flex",
    flexDirection: "row",
    height: 64,
    marginTop: 20,
    backgroundColor: "yellow",
  },
});

export default styles;
