import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "/Roboto/Roboto-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/Roboto/Roboto-Light.ttf",
      fontWeight: "light",
    },
    {
      src: "/Roboto/Roboto-Bold.ttf",
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
    height: 0.5,
    backgroundColor: "#000",
    marginBottom: 5,
    position: "relative",
  },
  separatorText: {
    position: "absolute",
    top: -7,
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
    marginTop: 8,
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
    fontWeight: "normal",
  },
  date: {
    fontSize: 12,
    fontWeight: "light",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hSeparator: {
    fontSize: 14,
    fontWeight: "light",
    marginHorizontal: 5,
    transform: "translateY(-1.5%)",
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
          <View style={styles.contentContainer}>
            <Text style={styles.school}>{edu.school}</Text>
            <Text style={styles.hSeparator}>|</Text>
            <Text style={styles.date}>{edu.date}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default EducationPDF;
