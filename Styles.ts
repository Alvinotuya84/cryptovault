import { StyleSheet } from "react-native";
import {moderateScale,verticalScale} from 'react-native-size-matters'
export const recoveryScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: moderateScale(20),
    },
    header: {
      fontSize: moderateScale(20),
      fontWeight: "bold",
      marginBottom: verticalScale(20),
    },
    input: {
      height: verticalScale(100),
      borderColor: "gray",
      borderWidth: 1,
      padding: moderateScale(10),
      marginBottom: verticalScale(20),
      textAlignVertical: "top",
    },
    errorMessage: {
      color: "red",
      marginBottom: verticalScale(10),
    },
  });

  export const balanceScreenStyles=StyleSheet.create({
    topOfProfile:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin:10,

    },
    h1:{

        fontWeight:"bold",
    },profileBody:{
        justifyContent:"center",
        alignItems:"center"
    },

  })

  export const mainStyles=StyleSheet.create({
    mainButton:{

        borderRadius:5,
        alignItems: 'center',
        backgroundColor: '#90EE90',
        padding: 10,
        marginVertical:20
    },
    mainButtonText:{
        fontWeight:"bold",
        color:"white",
        padding:10,
        marginHorizontal:20

    }
  })
