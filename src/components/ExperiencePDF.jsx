import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    fontSize: "1rem",
    textAlign: "left",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  company: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  position: {
    fontSize: 14,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  hSeparator: {
    fontSize: 14,
    fontWeight: "light",
    marginHorizontal: 5,
    transform: "translateY(-6.5%)",
  },
  responsibilities: {
    fontSize: 12,
    marginBottom: 5,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginBottom: 20,
  },
  separatorText: {
    position: "absolute",
    top: -8,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    fontSize: 12,
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
        <View style={{ marginLeft: 0 }}>
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
