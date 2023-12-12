import { Document, Page, View, Text } from "@react-pdf/renderer";
import { verifyState } from "../helpers/verifyState";
import EducationExperience from "./EducationExperience";
import ProfessionExperience from "./ProfessionExperience";
import ShowGeneral from "./showGeneral";

export const ResumePDF = ({
  dataInfo,
  educationalValues,
  professionalValues,
}) => {
  return (
    <Document>
      <Page size="A4">
        <View className="resume">
          <View className="left">
            {dataInfo.stateInputs && <ShowGeneral dataInfo={dataInfo} />}
          </View>
          <View className="right">
            {dataInfo.stateInputs && (
              <Text>
                {dataInfo.name} {dataInfo.surname}
              </Text>
            )}

            <Text className="education">Education</Text>
            {verifyState(educationalValues) && (
              <EducationExperience values={educationalValues} />
            )}
            {verifyState(professionalValues) && (
              <ProfessionExperience values={professionalValues} />
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};
