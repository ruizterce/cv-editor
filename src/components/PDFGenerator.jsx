import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import GeneralInfoPDF from "./GeneralInfoPDF";
import SkillsPDF from "./SkillsPDF";
import EducationPDF from "./EducationPDF";
import ExperiencePDF from "./ExperiencePDF";
import data from "../data/data";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
});

const PDFGenerator = ({ sections }) => (
  <PDFViewer
    style={{
      width: "100%",
      height: "100vh",
      position: "relative",
      top: "50px",
      marginBottom: "50px",
    }}
  >
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {sections.map((section, index) => (
            <View key={index} style={styles.section}>
              {renderSection(section)}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

const renderSection = (section) => {
  switch (section) {
    case "GeneralInfo":
      return <GeneralInfoPDF data={data} />;
    case "Skills":
      return <SkillsPDF skills={data.skills} />;
    case "Education":
      return <EducationPDF data={data} />;
    case "Experience":
      return <ExperiencePDF data={data} />;
    default:
      console.warn(`Component '${section}' not found.`);
      return null;
  }
};

export default PDFGenerator;
