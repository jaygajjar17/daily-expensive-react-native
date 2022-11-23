import { StyleSheet } from "react-native";
import values from "../constants/values";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: values.verticalPadding,
    backgroundColor: colors.background,
  },
  horizontalPaddingView: {
    paddingHorizontal: values.horizontalPadding,
  },
  btnContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
  dateContainer: {},
});
export default styles;
