import React from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import commonStyles from "../commonStyles";

const Template6 = () => (
  <Document>
    <Page size="A4" style={commonStyles.page}>
      <View style={commonStyles.dateexport_section}>
        <Text>【不足書類あり】</Text>
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
        </View>
      </View>

      <View style={commonStyles.maincontent_section}>
        <View style={[commonStyles.maincontent_container, { width: 530 }]}>
          <View style={commonStyles.maincontent_wrapper}>
            <View>
              <Text style={commonStyles.f_size15}>
                ＜自転車駐車場の利用申請に係る不足書類について＞
              </Text>
            </View>
          </View>
          <View style={commonStyles.maincontent_wrapper}>
            <View style={styles.row_wrapper_wfull}>
              <View>
                <Text>
                  &nbsp;&nbsp;お申込みいただいた申請について、「承認」となりましたが、証明書類のコピーの提示
                </Text>
                <Text>
                  &nbsp;&nbsp;又は提出が不足しております。ご提出がないと自転車駐車場のご利用ができません。至急
                </Text>
                <Text>ご提出をお願いいたします。</Text>
              </View>
            </View>
          </View>
          <View style={[commonStyles.maincontent_wrapper, styles.border_3]}>
            <View style={commonStyles.f_bold}>
              <Text style={[commonStyles.f_textdecoration_underline]}>
                後日提出する旨ご連絡頂いている方へもこちらの通知書をお送りしております。
              </Text>
              <Text>
                ご提出と、このお知らせが行き違いの場合もございます。ご了承ください。
              </Text>
            </View>
          </View>
          <View
            style={[
              commonStyles.maincontent_wrapper,
              { justifyContent: "flex-start" },
            ]}
          >
            <View style={[commonStyles.f_bold, styles.bullet_item]}>
              <Text>■</Text>
            </View>
            <View style={[commonStyles.f_bold]}>
              <Text>提出期限</Text>
            </View>
          </View>
          <View style={commonStyles.maincontent_wrapper_next}>
            <View style={styles.bullet_item}>
              <Text></Text>
            </View>
            <View style={[commonStyles.f_bold]}>
              <Text style={commonStyles.f_size15}>
                令和YY年MM月DD日（Ｎ）※必着
              </Text>
            </View>
          </View>
          <View style={commonStyles.maincontent_wrapper_next}>
            <View style={styles.bullet_item}>
              <Text></Text>
            </View>
            <View>
              <View style={styles.row_wrapper_wfull}>
                <View style={styles.bullet_item}>
                  <Text>●</Text>
                </View>
                <View>
                  <Text style={commonStyles.f_textdecoration_underline}>
                    すでにご連絡いただいている場合は、再度のご連絡は不要です。事前
                  </Text>
                </View>
              </View>
              <View style={styles.row_wrapper_wfull}>
                <View style={styles.bullet_item}>
                  <Text></Text>
                </View>
                <View>
                  <Text style={commonStyles.f_textdecoration_underline}>
                    ご連絡いただいている提出日までにご提出ください。
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={commonStyles.maincontent_wrapper_next}>
            <View style={styles.bullet_item}>
              <Text></Text>
            </View>
            <View>
              <View style={styles.row_wrapper_wfull}>
                <View style={styles.bullet_item}>
                  <Text>●</Text>
                </View>
                <View>
                  <Text>
                    期限まで又は事前連絡の期日までに証明書類のご提出やご連絡がない
                  </Text>
                </View>
              </View>
              <View style={styles.row_wrapper_wfull}>
                <View style={styles.bullet_item}>
                  <Text></Text>
                </View>
                <View>
                  <Text>
                    合、ご利用の意思がないものとみなし、
                    <Text style={commonStyles.f_textdecoration_underline}>
                      不承認と致します。
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={commonStyles.maincontent_wrapper_next}>
            <View style={styles.bullet_item}>
              <Text></Text>
            </View>
            <View>
              <View style={styles.row_wrapper_wfull}>
                <View style={styles.bullet_item}>
                  <Text>●</Text>
                </View>
                <View>
                  <Text>
                    期限まで又は事前連絡の期日までに間に合わない場合は必ず前もってご連絡ください。
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={[
              commonStyles.maincontent_wrapper,
              { justifyContent: "flex-start", marginTop: 20 },
            ]}
          >
            <View style={[commonStyles.f_bold, styles.bullet_item]}>
              <Text>■</Text>
            </View>
            <View style={[commonStyles.f_bold]}>
              <Text>不足している書類については以下のとおりです。</Text>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper_next]}>
            <View style={[styles.bullet_item]}>
              <Text></Text>
            </View>
            <View style={[styles.row_wrapper_wfull]}>
              <View style={styles.col_wrapper_hfull}>
                <View style={[styles.row_wrapper_wfull]}>
                  <View style={styles.item_first}>
                    <View>
                      <Text>●学生で申請した場合</Text>
                    </View>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={styles.arrow_item}>
                      <Text>→</Text>
                    </View>
                    <View>
                      <Text>
                        <Text style={commonStyles.f_textdecoration_underline}>
                          令和YY年4月1日付
                        </Text>
                        けであることが証明できるもの
                      </Text>
                      <Text>
                        例）学生証、合格通知書、入学許可証などのコピー
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper_next]}>
            <View style={[styles.bullet_item]}>
              <Text></Text>
            </View>
            <View style={[styles.row_wrapper_wfull]}>
              <View style={styles.col_wrapper_hfull}>
                <View style={[styles.row_wrapper_wfull]}>
                  <View style={styles.item_first}>
                    <View>
                      <Text>●区内在勤で申請した場合</Text>
                    </View>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={styles.arrow_item}>
                      <Text>→</Text>
                    </View>
                    <View>
                      <Text>在勤証明書（区指定の様式）</Text>
                      <Text>
                        様式は区ホームページからダウンロードできます。
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper_next]}>
            <View style={[styles.bullet_item]}>
              <Text></Text>
            </View>
            <View style={[styles.row_wrapper_wfull]}>
              <View style={styles.col_wrapper_hfull}>
                <View style={[styles.row_wrapper_wfull]}>
                  <View style={styles.item_first}>
                    <View>
                      <Text>●障害者手帳をお持ちの方</Text>
                    </View>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={styles.arrow_item}>
                      <Text>→</Text>
                    </View>
                    <View>
                      <Text>障害者手帳のコピー</Text>
                      <Text>
                        期限がある場合は、
                        <Text style={commonStyles.f_textdecoration_underline}>
                          令和YY年4月1日
                        </Text>
                        が期限内であること。
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper_next]}>
            <View style={[styles.bullet_item]}>
              <Text></Text>
            </View>
            <View style={[styles.row_wrapper_wfull]}>
              <View style={styles.col_wrapper_hfull}>
                <View style={[styles.row_wrapper_wfull]}>
                  <View style={styles.item_first}>
                    <View>
                      <Text>●ひとり親医療証をお持ちの方</Text>
                    </View>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={styles.arrow_item}>
                      <Text>→</Text>
                    </View>
                    <View>
                      <Text>
                        ひとり親医療証（中学生以下のお子様が利用者の場合は
                      </Text>
                      <Text>
                        子ども医療証）のコピー（
                        <Text style={commonStyles.f_textdecoration_underline}>
                          墨田区長が発行したものに限
                        </Text>
                      </Text>
                      <Text>
                        <Text style={commonStyles.f_textdecoration_underline}>
                          ります。令和YY年4月1日
                        </Text>
                        が期限内であることが必要です）
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[commonStyles.maincontent_wrapper_next]}>
            <View style={[styles.bullet_item]}>
              <Text></Text>
            </View>
            <View style={[styles.row_wrapper_wfull]}>
              <View style={styles.col_wrapper_hfull}>
                <View style={[styles.row_wrapper_wfull]}>
                  <View style={styles.item_first}>
                    <View>
                      <Text>●生活保護を受給している方</Text>
                    </View>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={styles.arrow_item}>
                      <Text>→</Text>
                    </View>
                    <View>
                      <Text>
                        <Text style={commonStyles.f_textdecoration_underline}>
                          直近3カ月
                        </Text>
                        以内の生活保護受給証明書
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={commonStyles.maincontent_wrapper}>
            <View
              style={[styles.row_wrapper_wfull, { justifyContent: "flex-end" }]}
            >
              <View>
                <Text style={commonStyles.f_bold}>（裏面へ続きます）</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page size="A4" style={commonStyles.page}>
      <View style={commonStyles.dateexport_section}>
        <Text>【不足書類あり】</Text>
      </View>
      <View style={[commonStyles.maincontent_section, { top: 50 }]}>
        <View style={[commonStyles.maincontent_container, { width: 530 }]}>
          <View
            style={[
              commonStyles.maincontent_wrapper,
              { justifyContent: "flex-start" },
            ]}
          >
            <View style={[commonStyles.f_bold, styles.bullet_item]}>
              <Text>■</Text>
            </View>
            <View style={[commonStyles.f_bold]}>
              <Text>提出期限</Text>
            </View>
          </View>

          <View style={commonStyles.maincontent_wrapper_next}>
            <View style={styles.bullet_item}>
              <Text></Text>
            </View>
            <View>
              <Text>
                証明書類を郵送、FAX又はメール（画像添付）でお送りいただくか、ご持参ください。
              </Text>
            </View>
          </View>

          <View
            style={[
              commonStyles.maincontent_wrapper,
              commonStyles.b_left,
              commonStyles.b_top,
            ]}
          >
            <View style={styles.row_wrapper_wfull}>
              <View style={commonStyles.col_flex2}>
                <View style={commonStyles.row_h20}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text></Text>
                  </View>
                </View>
                <View style={commonStyles.row_h100}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>FAXの場合</Text>
                  </View>
                </View>
                <View style={commonStyles.row_h100}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>郵送の場合</Text>
                  </View>
                </View>
                <View style={commonStyles.row_h230}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>メールの場合</Text>
                  </View>
                </View>
                <View style={commonStyles.row_h100}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>持参される場合</Text>
                  </View>
                </View>
              </View>
              <View style={commonStyles.col_flex6}>
                <View style={commonStyles.row_h20}>
                  <View style={[commonStyles.item_basis_full]}>
                    <Text>提　出　方　法</Text>
                  </View>
                </View>
                <View style={commonStyles.row_h100}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>〒130-8640</Text>
                    <Text>
                      墨田区吾妻橋1-23-20　墨田区土木管理課交通安全担当
                    </Text>
                    <Text>
                      ・上記宛てに必要書類のコピーを郵送してください。
                    </Text>
                    <Text>
                      ・書類のコピーの余白に、氏名、住所、連絡先、第1希望自転車駐車場
                    </Text>
                    <Text>名を記入してください。</Text>
                  </View>
                </View>
                <View style={commonStyles.row_h100}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>FAX番号：03-5608-6410</Text>
                    <Text>
                      上記の番号に必要書類のコピーを送信してください。
                    </Text>
                    <Text
                      style={[
                        commonStyles.f_bold,
                        commonStyles.f_textdecoration_underline,
                      ]}
                    >
                      送信後、土木管理課交通安全担当へFAXが届いているかの確認の
                    </Text>
                    <Text
                      style={[
                        commonStyles.f_bold,
                        commonStyles.f_textdecoration_underline,
                      ]}
                    >
                      お電話をしてください。
                    </Text>
                    <Text>電話：03-5608-6203(直通) </Text>
                  </View>
                </View>

                <View style={commonStyles.row_h230}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>宛先：KANRI@city.sumida.lg.jp</Text>
                    <Text style={{ fontSize: 3, paddingLeft: 165 }}>
                      エルジー
                    </Text>
                    <Text>
                      ・メールの件名は、「【氏名】〇〇〇(書類名)の送付」としてください。
                    </Text>
                    <Text>
                      ・本文に、氏名、住所、連絡先、第1希望自転車駐車場名をご入力ください。
                    </Text>
                    <Text>
                      ・必要書類の画像を添付しお送りください(JPEGまたはPDFでお願いします)
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",

                        border: "2px solid black",
                        width: "95%",
                        borderTopRightRadius: 15,
                      }}
                    >
                      <View>
                        <Text>【Gメールを利用される方へ】</Text>
                        <Text>
                          Gメールで送信する場合、メールに画像を添付するだけだと本文に
                        </Text>
                        <Text>
                          貼り付けられてしまい区で画像が確認できないので、以下の手順
                        </Text>
                        <Text>で送信してください。</Text>
                        <Text>
                          1.　通常どおり画像を添付した後、その画像をタップ
                        </Text>
                        <Text>2.　「添付ファイルとして送信」をタップ</Text>
                        <Text>3.　送信　　以上です。</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={commonStyles.row_h100}>
                  <View
                    style={[
                      commonStyles.item_basis_full,
                      styles.align_left_item,
                    ]}
                  >
                    <Text>
                      墨田区役所10階土木管理課交通安全担当まで必要書類を持参してください。
                    </Text>
                    <Text>
                      受付時間は、平日午前8時30分から午後5時までです。
                    </Text>
                    <Text>
                      ※できるだけ郵送、FAXまたはメールでのご提出をお願いします。
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={[
              commonStyles.maincontent_wrapper,
              { justifyContent: "flex-end", marginTop: 40 },
            ]}
          >
            <View style={{ display: "flex", flexDirection: "row", border: 1 }}>
              <View>
                <Text>【担当・問合せ先】</Text>
              </View>
              <View>
                <Text>墨田区役所10階 土木管理課交通安全担当</Text>
                <Text>電話（０３）５６０８－６２０３（直通）</Text>
                <Text>FAX （０３）５６０８－６４１０</Text>
                <Text>ﾒｰﾙ　KANRI@city.sumida.lg.jp</Text>
                <Text style={{ fontSize: 3, paddingLeft: 165 }}>エルジー</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
export default Template6;
