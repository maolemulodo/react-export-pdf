import React from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import commonStyles from "../commonStyles";
import AutoWrapLine from "../AutoWrapLine";
import { document } from "../Document";

const Template4 = () => {
  const template4Document = document.template4;
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        <View style={commonStyles.dateexport_section}>
          <Text>墨整土第　ZZZ9　号</Text>
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
            <View style={commonStyles.maincontent_wrapper}>
              <View>
                <Text style={commonStyles.f_size15}>
                  特定自転車駐車場利用承認取消通知書
                </Text>
              </View>
            </View>
            <View style={commonStyles.maincontent_wrapper}>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <AutoWrapLine text={template4Document.introText} />
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
              <View style={commonStyles.col_flex2}>
                <View style={commonStyles.row_h30}>
                  <View style={commonStyles.item_basis_full}>
                    <Text>承 認 番 号</Text>
                  </View>
                </View>
                <View style={commonStyles.row_h30}>
                  <View style={commonStyles.item_basis_full}>
                    <Text>取消しの理由</Text>
                  </View>
                </View>
              </View>
              <View style={commonStyles.col_flex7}>
                <View style={commonStyles.row_h30}>
                  <View style={commonStyles.col_flex1}>
                    <View style={commonStyles.item_basis_full}>
                      <Text>ZZZZZZZ9</Text>
                    </View>
                  </View>
                  <View style={commonStyles.col_flex1}>
                    <View style={commonStyles.item_basis_full}>
                      <Text>駐車場名</Text>
                    </View>
                  </View>
                  <View style={commonStyles.col_flex3}>
                    <View style={commonStyles.item_basis_full}>
                      <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                    </View>
                  </View>
                </View>
                <View style={commonStyles.row_h30}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      commonStyles.p_left8,
                      { alignItems: "flex-start" },
                    ]}
                  >
                    <Text>ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                commonStyles.maincontent_wrapper,
                { justifyContent: "flex-start" },
              ]}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <AutoWrapLine
                  textStyle={[commonStyles.f_textdecoration_underline]}
                  text={template4Document.underTableText1}
                />
                <AutoWrapLine
                  textStyle={[commonStyles.f_textdecoration_underline]}
                  text={template4Document.underTableText2}
                />
                <AutoWrapLine text={template4Document.underTableText3} />
              </View>
            </View>
            <View
              style={[
                commonStyles.maincontent_wrapper,
                { justifyContent: "flex-start" },
              ]}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <AutoWrapLine
                  textStyle={commonStyles.f_size8}
                  text={template4Document.footerText1}
                />

                <AutoWrapLine
                  textStyle={commonStyles.f_size8}
                  text={template4Document.footerText2}
                />
              </View>
            </View>
            <View
              style={[
                commonStyles.maincontent_wrapper,
                { justifyContent: "flex-start", marginTop: 30 },
              ]}
            >
              <View>
                <Text>【お問合せ先】</Text>
                <Text style={{ paddingLeft: 20 }}>
                  郵便番号 １３０－８６４０
                </Text>
                <Text style={{ paddingLeft: 20 }}>
                  墨田区 吾妻橋１－２３－２０
                </Text>
                <Text style={{ paddingLeft: 20 }}>
                  墨田区都市整備部　土木管理課交通安全担当（区役所１０階）
                </Text>
                <Text style={{ paddingLeft: 20 }}>
                  直通電話　03（5608）6203 ＦＡＸ　03（5608）6410
                </Text>
                <Text style={{ paddingLeft: 20 }}>
                  Ｍａｉｌ　KANRI@city.sumida.lg.jp
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default Template4;
