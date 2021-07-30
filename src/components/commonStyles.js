import { StyleSheet, Font } from "@react-pdf/renderer";
import fontRegular from "./fonts/MPLUSRounded1c-Regular.ttf";
import fontBold from "./fonts/MPLUSRounded1c-Bold.ttf";

Font.register({
  family: "MPLUSRounded1c-Regular",
  format: "truetype",
  src: fontRegular,
});

Font.register({
  family: "MPLUSRounded1c-Bold",
  format: "truetype",
  src: fontBold,
});

const commonStyles = StyleSheet.create({
  // Font
  f_size15: {
    fontSize: 15,
  },

  f_size9: {
    fontSize: 9,
  },

  f_size8: {
    fontSize: 8.5,
  },

  f_textdecoration_underline: {
    textDecoration: "underline",
  },

  f_bold: {
    fontFamily: "MPLUSRounded1c-Bold",
  },

  // Padding
  p_left8: {
    paddingLeft: 8,
  },

  p_left14: {
    paddingLeft: 14,
  },

  p_left18: {
    paddingLeft: 18,
  },

  p_left22: {
    paddingLeft: 22,
  },

  // Border
  b_top: {
    borderTop: 1,
    borderStyle: "solid",
  },

  b_right: {
    borderRight: 1,
    borderStyle: "solid",
  },

  b_bottom: {
    borderBottom: 1,
    borderStyle: "solid",
  },

  b_left: {
    borderLeft: 1,
    borderStyle: "solid",
  },

  page: {
    fontFamily: "MPLUSRounded1c-Regular",
    position: "relative",
    background: "#555555",
    fontSize: 11,
    letterSpacing: 1.2,
  },

  dateexport_section: {
    position: "absolute",
    left: 400,
    top: 30,

    width: 189,
  },

  personal_section: {
    position: "absolute",
    left: 272,
    top: 119,

    width: 225,
    height: 120,
  },

  personal_container: {
    display: "flex",
    flexFlow: "wrap",
    flex: 1,
  },

  personal_row: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "100%",
    flex: 1,
  },

  personal_col: {
    display: "flex",
    flexDirection: "column",
  },

  personal_col_flex1: {
    flex: 1,
  },
  personal_col_flex3: {
    flex: 3,
  },

  maincontent_section: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    justifyContent: "center",
    alignContent: "center",

    position: "absolute",
    top: 270,

    width: 595,
  },

  maincontent_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",

    width: 500,
  },

  maincontent_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    margin: "5px 0 0 0",
  },

  maincontent_wrapper_next: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    marginTop: -1,
  },

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

  row_h100: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 100,
  },

  row_h230: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",

    height: 250,
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
});

export default commonStyles;
