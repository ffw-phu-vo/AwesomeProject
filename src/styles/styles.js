import ResponsiveStylesheet from "react-native-responsive-stylesheet";
import { StyleSheet, Platform } from 'react-native';
// Colors
export const white = "#FFF";
export const black = "#000";
export const gray = "#DBDBD8";
export const textColor = "#AFAEAF";
export const primaryColor = "#112146";

export const styles = ResponsiveStylesheet.createSized("min-width", {
  0: {
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
      overflow: 'hidden'
    },
    blockTitleWrap: {
      marginBottom: 10,
    },
    blockTitle: {
      fontSize: 18,
    },
    btnArrowSlide: {
      color: primaryColor,
      fontSize: 45
    },
    btnArrowBackWrap: {
      width: 24,
      height: 24,
      marginBottom: 15,
    },
    btnArrowBack: {
      color: primaryColor,
      fontSize: 45,
      lineHeight: 24
    },
    textWhite: {
      color: white
    }
  },
  480: {
    container: {
      margin: 20,
      padding: 20
    }
  }
});

export const stylesHtml = StyleSheet.create({
  p: {
    marginBottom: 10,
    padding: 0,
    flex: 1
  },
  h1: {
    marginBottom: 10,
    fontSize: 36,
    flex: 1
  },
  h2: {
    marginBottom: 10,
    fontSize: 30,
    flex: 1
  },
  h3: {
    marginBottom: 10,
    fontSize: 24,
    flex: 1
  },
  h4: {
    marginBottom: 10,
    fontSize: 16,
    flex: 1
  },
  h5: {
    marginBottom: 10,
    fontSize: 14,
    flex: 1
  },
  h6: {
    marginBottom: 10,
    fontSize: 12,
    flex: 1
  },
  a: {
    color: primaryColor
  },
  strong: {
    fontWeight: 'bold'
  },
  em: {
    fontStyle: 'italic'
  },
  u: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000'
  },
  mark: {
    backgroundColor: primaryColor
  }
});
