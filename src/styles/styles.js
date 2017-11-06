import ResponsiveStylesheet from "react-native-responsive-stylesheet";
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
    }
  },
  480: {
    container: {
      margin: 20,
      padding: 20
    }
  }
});

// export const styles = ResponsiveStylesheet.create({
//   wrap: {
//     flex: 1,
//     backgroundColor: gray,
//   },
//   container: {
//     backgroundColor: white,
//     margin: 10,
//     justifyContent: 'space-between',
//     padding: 10,
//     shadowColor: black,
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 0,
//     elevation: 1,
//   },
//   blockTitleWrap: {
//     marginBottom: 10,
//   },
//   blockTitle: {
//     fontSize: 18,
//   },
//   btnArrowSlide: {
//     color: primaryColor,
//     fontSize: 45
//   }
// });

// export const responsiveStyles = ResponsiveStylesheet.createSized("min-width", {
//   480: {
//     container: {
//       margin: 20,
//       padding: 20
//     }
//   }
// });
