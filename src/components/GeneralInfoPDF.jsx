import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "../../public/Roboto/Roboto-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "../../public/Roboto/Roboto-Light.ttf",
      fontWeight: "light",
    },
    {
      src: "../../public/Roboto/Roboto-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  section: {
    padding: 10,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    fontWeight: "bold",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 14,
    marginRight: 5,
  },
  separator: {
    fontSize: 14,
    fontWeight: "light",
    marginHorizontal: 5,
  },
});

const GeneralInfoPDF = ({ data }) => (
  <View style={styles.section}>
    <Text style={styles.title}>{data.name}</Text>

    <View style={styles.contentContainer}>
      <Text style={styles.content}>{data.email}</Text>
      <Text style={styles.separator}>|</Text>
      <Text style={styles.content}>{data.phone}</Text>
      <Text style={styles.separator}>|</Text>
      <Text style={styles.content}>{data.address}</Text>
    </View>
  </View>
);

export default GeneralInfoPDF;
