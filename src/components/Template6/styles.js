import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row_wrapper_wfull: {
    // container
    display: "flex",
    flexDirection: "row",

    // item
    flex: 1,
  },

  col_wrapper_hfull: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  item_first: {
    width: 165,
    marginRight: 10,
  },

  item_flex1: {
    flex: 1,
  },

  item_flex2: {
    flex: 2,
  },

  item_flex12: {
    flex: 12,
  },

  item_flex4: {
    flex: 4,
  },

  align_left_item: {
    alignItems: "flex-start",
    paddingLeft: 3,
  },

  border_3: {
    padding: 3,
    border: "3px solid #c4c4c4",
  },

  bullet_item: {
    width: 12,
  },

  arrow_item: {
    paddingRight: 10,
  },
});

export default styles;
