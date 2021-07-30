import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row_wrapper_wfull: {
    // container
    display: "flex",
    flexDirection: "row",

    // item
    flex: 1,
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
});

export default styles;
