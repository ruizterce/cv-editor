import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 12,
    textAlign: "center",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginTop: 5,
    marginBottom: 5,
    position: "relative",
  },
  separatorTextContainer: {
    position: "absolute",
    top: 1,
    left: "50%",
    transform: "translateX(-10%)",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  separatorText: {
    fontSize: 12,
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
    fontWeight: 900,
    marginTop: 10,
    marginBottom: 4,
  },
});

const SkillsPDF = ({ skills }) => {
  return (
    <View style={styles.section}>
      <View style={styles.separator} />
      <View style={styles.separatorTextContainer}>
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
