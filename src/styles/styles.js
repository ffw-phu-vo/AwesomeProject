import { StyleSheet } from 'react-native';

// Colors
export const white = "#FFF";
export const black = "#000";
export const gray = "#DBDBD8";
export const textColor = "#AFAEAF";
export const primaryColor = "#112146";

// Common Styles
export const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: gray,
  },
  container: {
    backgroundColor: white,
    margin: 10,
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  blockTitleWrap: {
    marginBottom: 10,
  },
  blockTitle: {
    fontSize: 18,
  },
  btnArrowSlide: {
    color: '#112146',
    fontSize: 45
  }
});
