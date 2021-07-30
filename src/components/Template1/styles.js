import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "MPLUSRounded1c",
    position: "relative",
    background: "#555555",
    fontSize: 10,
  },
  dateexport_section: {
    position: "absolute",
    left: 400,
    top: 30,

    width: 189,
  },

  maintitlecontainer_section: {
    display: "flex",
    flexFlow: "row center",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    top: 50,

    width: 595, // full pdf
    height: "auto",
  },

  submaintitlecontainer_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    width: 550, // inside
  },

  boxconer_section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 112,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#000",

    fontSize: 20,
    color: "#fff",
  },

  textmaintitle_section: {
    paddingLeft: 10,

    letterSpacing: 10,
    fontSize: 15,
  },

  personalinfo_section: {
    position: "absolute",
    left: 272,
    top: 139,

    width: 225,
    height: 120,
  },

  personalinfo_section_1: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "end",
    justifyContent: "flex-end",
  },

  personalinfo_section_2: {
    display: "flex",
    flexDirection: "column",

    paddingTop: 5,
  },
  personalinfo_section_2_1: {
    display: "flex",
    flexDirection: "row",

    margin: "3px 0",
  },
  personalinfo_section_2_2: {
    display: "flex",
    flexDirection: "row",
  },
  personalinfo_section_2_3: {
    display: "flex",
    flexDirection: "row",

    margin: "3px 0",

    fontSize: 8,
  },
  personalinfo_section_2_4: {
    display: "flex",
    flexDirection: "row",
  },

  singingmark_section: {
    display: "flex",
    flexDirection: "row",

    position: "absolute",
    left: 435,
    top: 295,
  },

  maincontent_section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 329,

    width: 595,
  },

  rembertext_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 376,

    width: 595,
  },

  detailinfo_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 408,

    width: 595,
  },

  detailinfo_table: {
    display: "flex",
    flexDirection: "flex-start",

    width: 550,
    border: "1px solid black",
  },

  detailinfo_table_row1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 36,
    borderBottom: "1px solid black",
  },

  detailinfo_table_row2: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    height: 52,
    borderBottom: "1px solid black",
  },
  detailinfo_table_row2_col1: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row2_col2: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row2_col3: {
    justifyContent: "center",
    alignItems: "center",

    width: 40,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row2_col4: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },

  detailinfo_table_row3: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    height: 52,
  },
  detailinfo_table_row3_col1: {
    justifyContent: "center",
    alignItems: "center",

    width: 80,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row3_col2: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",

    letterSpacing: 10,
  },

  note_section: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 555,
    width: 595,
  },
  note_section_1: {
    width: 550,

    fontSize: 8,
  },

  end_section: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 700,
    width: 595,
  },
  end_section_1: {
    width: 550,
    border: "1px solid black",

    fontSize: 8,
    letterSpacing: 3,
    padding: "2px 0 2px 10px",
  },
});

export default styles;
