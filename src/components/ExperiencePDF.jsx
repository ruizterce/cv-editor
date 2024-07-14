import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
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

Font.register({
  family: "Merriweather",
  fonts: [
    {
      src: "../../public/Merriweather/Merriweather-Light.ttf",
      fontWeight: "normal",
    },
  ],
});

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    fontFamily: "Roboto",
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#000",
    marginBottom: 20,
    position: "relative",
  },
  separatorText: {
    position: "absolute",
    top: -7,
    left: "50%",
    transform: "translateX(-44.5%)",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  position: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "light",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  hSeparator: {
    fontSize: 14,
    fontWeight: "light",
    marginHorizontal: 5,
    transform: "translateY(-4%)",
  },
  responsibilities: {
    fontSize: 10,
    marginBottom: 5,
    fontFamily: "Merriweather",
    textAlign: "justify",
  },
});

const ExperiencePDF = ({ data }) => (
  <View style={styles.section}>
    <View style={styles.separator}>
      <Text style={styles.separatorText}>Experience</Text>
    </View>
    {data.experience.map((exp) => (
      <View key={exp.id} style={{ marginBottom: 10 }}>
        <Text style={styles.position}>{exp.position}</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.company}>{exp.company}</Text>
          <Text style={styles.hSeparator}>|</Text>
          <Text style={styles.date}>{exp.date}</Text>
        </View>
        <View style={{ marginVertical: 7 }}>
          {exp.responsibilities.map((resp, index) => (
            <Text key={index} style={styles.responsibilities}>
              {resp}
            </Text>
          ))}
        </View>
      </View>
    ))}
  </View>
);

export default ExperiencePDF;
