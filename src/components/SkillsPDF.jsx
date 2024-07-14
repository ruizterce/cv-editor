import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
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
    transform: "translateX(-30%)",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 5,
  },
  skill: {
    width: "25%",
    marginHorizontal: 10,
    textAlign: "left",
  },
  bar: {
    backgroundColor: "rgb(199, 199, 199)",
    overflow: "hidden",
  },
  barFill: {
    height: 10,
    backgroundColor: "rgb(26, 190, 255)",
  },
  h2: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "bold",
  },
});

const SkillsPDF = ({ skills }) => {
  return (
    <View style={styles.section}>
      <View style={styles.separator}>
        <Text style={styles.separatorText}>Skills</Text>
      </View>

      <View style={styles.skillsContainer}>
        {skills.map((skill) => (
          <View style={styles.skill} key={skill.id}>
            <Text style={styles.h2}>{skill.title}</Text>
            <View style={styles.bar}>
              <View
                style={[styles.barFill, { width: `${skill.grade * 10}%` }]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SkillsPDF;
