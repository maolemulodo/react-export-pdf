import React from "react";
import { Page, Document, View, Text, Font } from "@react-pdf/renderer";
import font from "../fonts/MPLUSRounded1c-Regular.ttf";
import styles from "./styles";
import commonStyles from "../commonStyles";
import AutoWrapLine from "../AutoWrapLine";
import { document } from "../Document";

Font.register({
  family: "MPLUSRounded1c",
  format: "truetype",
  src: font,
});

const Template1 = () => {
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        <View style={commonStyles.dateexport_section}>
          <Text>決定日 令和YY年MM月DD日</Text>
        </View>

        <View style={styles.maintitlecontainer_section}>
          <View style={styles.submaintitlecontainer_section}>
            <View style={styles.boxconer_section}>
              <Text>Z9年度</Text>
            </View>
            <View style={styles.textmaintitle_section}>
              <Text>特定自転車駐車場利用承認通知書</Text>
            </View>
          </View>
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 120,
                  }}
                >
                  <AutoWrapLine
                    text={"ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"}
                  />
                </View>
              </View>
            </View>

            <View style={[commonStyles.personal_row, { marginTop: 15 }]}>
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

            <View
              style={[
                commonStyles.personal_row,
                { justifyContent: "flex-end" },
              ]}
            >
              <View style={[commonStyles.personal_col]}>
                <Text>墨田区長　　山本　亨</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={commonStyles.maincontent_section}>
          <View style={commonStyles.maincontent_container}>
            <View style={[commonStyles.maincontent_wrapper]}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 360,
                }}
              >
                <AutoWrapLine text={document.template1.introText} />
              </View>
            </View>
            <View style={commonStyles.maincontent_wrapper}>
              <View>
                <Text>記</Text>
              </View>
            </View>
            <View
              style={[
                commonStyles.maincontent_wrapper,
                commonStyles.b_left,
                commonStyles.b_top,
              ]}
            >
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      borderRight: 1,
                      borderBottom: 1,
                    }}
                  >
                    <Text style={{ letterSpacing: 5 }}>
                      利用承認決定自転車自転車駐車場
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 3,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    <View
                      style={{ borderRight: 1, borderBottom: 1, width: "100%" }}
                    >
                      <Text>第一希望</Text>
                    </View>
                    <View style={{ borderRight: 1, borderBottom: 1 }}>
                      <Text>有効期間</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 5,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center",
                      }}
                    >
                      <View
                        style={{ flex: 1, borderRight: 1, borderBottom: 1 }}
                      >
                        <Text>申込番号</Text>
                      </View>
                      <View
                        style={{ flex: 1, borderRight: 1, borderBottom: 1 }}
                      >
                        <Text>Z9</Text>
                      </View>
                      <View
                        style={{ flex: 4, borderRight: 1, borderBottom: 1 }}
                      >
                        <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        textAlign: "center",
                        borderRight: 1,
                        borderBottom: 1,
                      }}
                    >
                      <Text>
                        令 和 Y Y 年 4 月 1 日 か ら 令 和 Y Y 年 3 月 3 1 日 ま
                        で
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                commonStyles.maincontent_wrapper,
                commonStyles.f_size9,
                { justifyContent: "flex-start" },
              ]}
            >
              <View
                style={{ display: "flex", flexDirection: "column", width: 415 }}
              >
                <AutoWrapLine text={document.template1.underTableText1} />
                <AutoWrapLine text={document.template1.underTableText2} />
                <AutoWrapLine text={document.template1.underTableText3} />
              </View>
            </View>
            <View
              style={[
                commonStyles.maincontent_wrapper,
                commonStyles.f_size9,
                {
                  justifyContent: "flex-start",
                  border: 1,
                  padding: 5,
                  marginTop: 230,
                },
              ]}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <AutoWrapLine
                  textStyle={commonStyles.f_size8}
                  text={document.template1.footerText1}
                />

                <AutoWrapLine
                  textStyle={commonStyles.f_size8}
                  text={document.template1.footerText2}
                />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template1;
