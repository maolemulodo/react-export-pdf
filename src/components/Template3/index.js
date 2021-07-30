import React from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import commonStyles from "../commonStyles";
import AutoWrapLine from "../AutoWrapLine";
import { document } from "../Document";

const Template3 = () => {
  const template3Document = document.template3;
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        <View style={commonStyles.dateexport_section}>
          <Text>決定日 令和YY年MM月DD日</Text>
        </View>

        <View style={commonStyles.personal_section}>
          <View style={commonStyles.personal_container}>
            <View
              style={[
                commonStyles.personal_row,
                { justifyContent: "flex-end" },
              ]}
            >
              <View style={[commonStyles.personal_col]}>
                <Text>第 ZZZZZZZ9 号</Text>
              </View>
            </View>

            <View style={commonStyles.personal_row}>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex1,
                ]}
              >
                <Text>郵便番号</Text>
              </View>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex3,
                ]}
              >
                <Text>〒ZZ9-ZZZ9</Text>
              </View>
            </View>

            <View style={commonStyles.personal_row}>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex1,
                ]}
              >
                <Text style={{ letterSpacing: 20 }}>住所</Text>
              </View>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex3,
                  { flexFlow: "wrap" },
                ]}
              >
                <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
              </View>
            </View>

            <View style={commonStyles.personal_row}>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex1,
                ]}
              >
                <Text style={{ fontSize: 8, letterSpacing: 1 }}>
                  (フリガナ)
                </Text>
              </View>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex3,
                ]}
              >
                <Text style={{ fontSize: 8, letterSpacing: 1 }}>
                  ＮＮＮＮ　ＮＮＮＮＮＮ
                </Text>
              </View>
            </View>

            <View style={commonStyles.personal_row}>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex1,
                ]}
              >
                <Text style={{ letterSpacing: 20 }}>氏名</Text>
              </View>
              <View
                style={[
                  commonStyles.personal_col,
                  commonStyles.personal_col_flex3,
                ]}
              >
                <Text>ＮＮＮ　ＮＮＮＮ 様</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={commonStyles.maincontent_section}>
          <View style={commonStyles.maincontent_container}>
            <View style={commonStyles.maincontent_wrapper}>
              <View style={[styles.row_wrapper_w400]}>
                <View style={{ fontSize: 9 }}>
                  <Text style={{ fontSize: 18 }}>注意事項</Text>
                  <View style={{ display: "flex", flexDirection: "column" }}>
                    <AutoWrapLine text={template3Document.mainContent.line0} />
                    <AutoWrapLine text={template3Document.mainContent.line1} />
                    <AutoWrapLine text={template3Document.mainContent.line2} />
                    <AutoWrapLine text={template3Document.mainContent.line3} />
                    <AutoWrapLine text={template3Document.mainContent.line4} />
                    <AutoWrapLine text={template3Document.mainContent.line5} />
                    <AutoWrapLine text={template3Document.mainContent.line6} />
                    <AutoWrapLine text={template3Document.mainContent.line7} />
                    <AutoWrapLine text={template3Document.mainContent.line8} />
                    <AutoWrapLine text={template3Document.mainContent.line9} />
                    <AutoWrapLine text={template3Document.mainContent.line10} />
                    <AutoWrapLine text={template3Document.mainContent.line11} />
                    <AutoWrapLine text={template3Document.mainContent.line12} />
                    <AutoWrapLine text={template3Document.mainContent.line13} />
                    <AutoWrapLine text={template3Document.mainContent.line14} />
                    <AutoWrapLine text={template3Document.mainContent.line15} />
                    <AutoWrapLine text={template3Document.mainContent.line16} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[commonStyles.maincontent_wrapper, { marginTop: 40 }]}>
              <View style={[styles.row_wrapper_w400]}>
                <View>
                  <Text>【お問合せ先】</Text>
                  <Text style={commonStyles.p_left22}>
                    郵便番号 １３０－８６４０
                  </Text>
                  <Text style={commonStyles.p_left22}>
                    墨田区 吾妻橋１－２３－２０
                  </Text>
                  <Text style={commonStyles.p_left22}>
                    墨田区都市整備部　土木管理課交通安全担当（区役所１０階）
                  </Text>
                  <Text style={commonStyles.p_left22}>
                    直通電話　03（5608）6203 ＦＡＸ　03（5608）6410
                  </Text>
                  <Text style={commonStyles.p_left22}>
                    Ｍａｉｌ　KANRI@city.sumida.lg.jp
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template3;
