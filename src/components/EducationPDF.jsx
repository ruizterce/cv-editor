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
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginBottom: 5,
    position: "relative",
  },
  separatorText: {
    position: "absolute",
    top: -6,
    left: "50%",
    transform: "translateX(-41%)",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  educationContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  educationItem: {
    marginTop: 12,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  school: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: "normal",
  },
  date: {
    fontSize: 12,
    fontWeight: "light",
  },
});

const EducationPDF = ({ data }) => (
  <View style={styles.section}>
    <View style={styles.separator}>
      <Text style={styles.separatorText}>Education</Text>
    </View>
    <View style={styles.educationContainer}>
      {data.education.map((edu) => (
        <View key={edu.id} style={styles.educationItem}>
          <Text style={styles.title}>{edu.title}</Text>
          <Text style={styles.school}>{edu.school}</Text>
          <Text style={styles.date}>{edu.date}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default EducationPDF;
