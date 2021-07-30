import React from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import commonStyles from "../commonStyles";

const Template5 = () => (
  <Document>
    <Page size="A4" style={commonStyles.page}>
      <View style={commonStyles.dateexport_section}>
        <Text>決定日 令和YY年MM月DD日</Text>
      </View>

      <View style={commonStyles.personal_section}>
        <View style={commonStyles.personal_container}>
          <View
            style={[commonStyles.personal_row, { justifyContent: "flex-end" }]}
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
              <Text style={{ fontSize: 8, letterSpacing: 1 }}>(フリガナ)</Text>
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
            style={[commonStyles.personal_row, { justifyContent: "flex-end" }]}
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
              <Text>
                令和YY年度分特定自転車駐車場の利用申請手続について（通知）
              </Text>
            </View>
          </View>
          <View style={commonStyles.maincontent_wrapper}>
            <View style={styles.row_wrapper_wfull}>
              <View>
                <Text>
                  &nbsp;&nbsp;日頃から、区の自転車駐車場事業に御理解、御協力いただき誠にありがとうございます。
                </Text>
                <Text>
                  &nbsp;&nbsp;大変お待たせいたしましたが、キャンセル待ちで御利用いただける順番となりましたので、
                </Text>
                <Text>
                  お手数ですが、
                  <Text style={commonStyles.f_textdecoration_underline}>
                    下記申請期限までに区役所の土木管理課にお電話又はメールで御利用希望
                  </Text>
                </Text>
                <Text style={commonStyles.f_textdecoration_underline}>
                  の有無をご連絡くださいますようお願いいたします。
                </Text>
              </View>
            </View>
          </View>
          <View style={commonStyles.maincontent_wrapper}>
            <View>
              <Text>記</Text>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: 20 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text>１</Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>キャンセル待ち内容</Text>
                <Text>裏面をご覧ください。</Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: 20 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text>２</Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>請期限</Text>
                <Text>令和 YY 年 MM 月 DD 日（ N ）まで</Text>
                <Text>
                  期限までにお電話又はメールで御利用されるか否かご連絡をお願いいたします。
                </Text>
                <Text>
                  御利用希望の方が多数、順番をお待ちになっておりますので、
                  <Text style={commonStyles.f_textdecoration_underline}>
                    期限までにご連絡がな
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text style={commonStyles.f_textdecoration_underline}>
                い場合は、キャンセル待ち利用承認を取消させていただきます。
              </Text>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper, { marginTop: 20 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text>3</Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>現在、他の区営自転車駐車場を御利用中の方</Text>
                <Text>
                  キャンセル待ちの自転車駐車場を御利用される場合、現在御利用中の自転車駐車場は
                </Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>御利用できなくなります。</Text>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text></Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>
                  第１種特定自転車駐車場（年間利用の自転車駐車場）を御利用中の方は、後日お送り
                </Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>
                する「承認通知書」に返信用封筒を同封しますので、現在御利用中の自転車駐車場の利用
              </Text>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>
                承認証（ステッカー）を自転車から剥がして封筒に入れ、返送してください。
              </Text>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text></Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>
                  第２種特定自転車駐車場（月額利用の自転車駐車場）を御利用中の方は、最後の御利
                </Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>
                用終了後、ＩＣカードを自転車駐車場の現地にご返却ください。
              </Text>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper, { marginTop: 50 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>裏面を必ずご確認ください。</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page size="A4" style={commonStyles.page}>
      <View style={[commonStyles.maincontent_section, { top: 30 }]}>
        <View style={commonStyles.maincontent_container}>
          <View style={[commonStyles.maincontent_wrapper]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text>４</Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>還付手続</Text>
                <Text>
                  第１種特定自転車駐車場から第２種特定自転車駐車場に利用駐車場を変更する方、
                </Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>
                又は第２種から第１種に変更する方は、使用料の還付手続が必要な場合があります。
              </Text>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text></Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>
                  還付手続が必要な方は、後日お送りする承認通知書に別途お知らせを同封します。
                </Text>
              </View>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper, { marginTop: 20 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text>５</Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>キャンセル待ちの内容詳細</Text>
                <View
                  style={[
                    commonStyles.maincontent_wrapper,
                    commonStyles.b_left,
                    commonStyles.b_top,
                    { marginTop: 20, width: "auto" },
                  ]}
                >
                  <View style={commonStyles.col_flex4}>
                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>キャンセル待ち自転車駐車場</Text>
                      </View>
                    </View>
                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>順位</Text>
                      </View>
                    </View>

                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>他の区営自転車駐車場の利用</Text>
                      </View>
                    </View>
                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>還付金の有無</Text>
                      </View>
                    </View>
                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>不足書類の有無</Text>
                      </View>
                    </View>
                  </View>
                  <View style={commonStyles.col_flex6}>
                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>

                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>ZZZ9</Text>
                      </View>
                    </View>

                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>

                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>

                    <View style={commonStyles.row_h30}>
                      <View
                        style={[
                          commonStyles.item_basis_full,
                          styles.align_left_item,
                        ]}
                      >
                        <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper, { marginTop: 20 }]}>
            <View style={styles.row_wrapper_wfull}>
              <View style={styles.item_flex1}>
                <Text></Text>
              </View>
              <View style={styles.item_flex12}>
                <Text>
                  今後とも、快適に自転車駐車場を御利用いただけますよう努めてまいりますので、御
                </Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, { marginTop: -1 }]}>
            <View style={styles.row_wrapper_wfull}>
              <Text>理解、御協力のほどよろしくお願いいたします。</Text>
            </View>
          </View>

          <View
            style={[
              commonStyles.maincontent_wrapper,
              { justifyContent: "flex-end", marginTop: 40 },
            ]}
          >
            <View style={{ border: 1 }}>
              <Text>【お問合せ先】</Text>
              <Text style={{ paddingLeft: 20 }}>〒１３０－８６４０</Text>
              <Text style={{ paddingLeft: 20 }}>
                東京都墨田区吾妻橋一丁目２３番２０号
              </Text>
              <Text style={{ paddingLeft: 20 }}>
                墨田区役所10階 土木管理課交通安全担当
              </Text>
              <Text style={{ paddingLeft: 20 }}>
                電話０３－５６０８－６２０３（直通）
              </Text>
              <Text style={{ paddingLeft: 20 }}>
                ﾒｰﾙ KANRI@city.sumida.lg.jp
              </Text>
              <Text style={{ fontSize: 3, paddingLeft: 165 }}>エルジー</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
export default Template5;
