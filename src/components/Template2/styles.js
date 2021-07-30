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

    letterSpacing: 3,
    fontSize: 15,
  },

  personalinfo_section: {
    position: "absolute",
    left: 272,
    top: 119,

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
    top: 259,
  },

  maincontent_section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 280,

    width: 595,
  },

  rembertext_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 315,

    width: 595,
  },

  detailinfo_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 333,

    width: 595,
  },

  // Table 1
  table1_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 333,

    width: 595,
  },

  table1_container: {
    width: 550,
    height: 134,
    borderStyle: "solid",
    borderLeft: 1,
    borderTop: 1,
  },
  // End Table 1

  // Common FlexBox Table
  row_h24: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 24,
  },

  row_h20: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 20,
  },

  row_h15: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 15,
  },

  row_h30: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 30,
  },

  row_h35: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 35,
  },

  row_hfull: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    flexBasis: "100%",
  },

  col_flex1: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  col_flex2: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
  },

  col_flex3: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
  },

  col_flex4: {
    display: "flex",
    flexDirection: "column",
    flex: 4,
  },

  col_flex5: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
  },

  col_flex6: {
    display: "flex",
    flexDirection: "column",
    flex: 6,
  },

  col_flex7: {
    display: "flex",
    flexDirection: "column",
    flex: 7,
  },

  item_basis_full: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    alignItems: "center",
    justifyContent: "center",

    borderStyle: "solid",
    borderRight: 1,
    borderBottom: 1,
  },

  letter_space_10: {
    letterSpacing: 10,
  },

  table_item_yellow: {
    backgroundColor: "yellow",
  },
  // End common flexbox table

  // Note1 section
  note1_section: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 470,
    width: 595,
  },

  note1_container: {
    width: 550,

    fontSize: 8,
  },
  // End note1 section

  // Table 1
  table2_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 569,

    width: 595,
  },

  table2_wrapper: {
    width: 550,
  },

  table2_container: {
    width: 462,
    height: 50,
    borderStyle: "solid",
    borderLeft: 1,
    borderTop: 1,
  },
  // End Table 1

  notesection2: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 625,

    width: 595,
  },
  notesection2_1: {
    width: 550,

    fontSize: 8,
  },

  end_section: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 710,
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
