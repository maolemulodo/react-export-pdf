// Thong bao nguyen vong 2
import React from "react";
import { Page, Document, View, Text, Font } from "@react-pdf/renderer";
import font from "../fonts/MPLUSRounded1c-Regular.ttf";
import styles from "./styles";

Font.register({
  family: "MPLUSRounded1c",
  format: "truetype",
  src: font,
});

const Template2 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.dateexport_section}>
        <Text>決定日 令和YY年MM月DD日</Text>
      </View>
      <View style={styles.maintitlecontainer_section}>
        <View style={styles.submaintitlecontainer_section}>
          <View style={styles.boxconer_section}>
            <Text>Z9年度</Text>
          </View>
          <View style={styles.textmaintitle_section}>
            <Text>特定自転車駐車場利用承認・不承認通知書</Text>
            <Text>特定自転車駐車場補欠者決定通知書</Text>
          </View>
        </View>
      </View>
      <View style={styles.personalinfo_section}>
        <View style={styles.personalinfo_section_1}>
          <Text style={{ padding: 3 }}>第</Text>
          <Text style={{ padding: 3 }}>ZZZZZZZ9</Text>
          <Text style={{ padding: 3 }}>号</Text>
        </View>
        <View style={styles.personalinfo_section_2}>
          <View style={styles.personalinfo_section_2_1}>
            <Text style={{ paddingRight: 15 }}>郵便番号</Text>
            <Text>〒ZZ9-ZZZ9</Text>
          </View>
          <View style={styles.personalinfo_section_2_2}>
            <Text style={{ paddingRight: 15 }}>住　　所</Text>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
              <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
            </View>
          </View>
          <View style={styles.personalinfo_section_2_3}>
            <Text style={{ paddingRight: 18 }}>(フリガナ)</Text>
            <Text>ＮＮＮＮ　ＮＮＮＮＮＮ</Text>
          </View>
          <View style={styles.personalinfo_section_2_4}>
            <Text style={{ paddingRight: 15 }}>氏　　名</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
              <Text style={{ paddingLeft: 3 }}>様</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.singingmark_section}>
        <Text>墨田区長　山本　亨</Text>
      </View>
      <View style={styles.maincontent_section}>
        <View>
          <Text style={{ paddingLeft: 10 }}>
            先に申請のあった特定自転車駐車場の利用については、審査の結果、
          </Text>
          <Text>下記のとおり決定したので通知します。</Text>
        </View>
      </View>
      <View style={styles.rembertext_section}>
        <Text>記</Text>
      </View>

      <View style={styles.table1_section}>
        <View style={styles.table1_container}>
          <View style={styles.row_h24}>
            <View style={styles.col_flex6}>
              <View style={styles.item_basis_full}>
                <Text style={styles.letter_space_10}>
                  利用承認決定自転車自転車駐車場
                </Text>
              </View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}>
                <Text>承認</Text>
              </View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}>
                <Text>不承認</Text>
              </View>
            </View>
          </View>

          <View style={styles.row_h30}>
            <View style={styles.col_flex6}>
              <View style={styles.row_h30}>
                <View style={styles.col_flex2}>
                  <View style={styles.item_basis_full}>
                    <Text>第一希望</Text>
                  </View>
                </View>
                <View style={styles.col_flex1}>
                  <View style={[styles.item_basis_full, { flexFlow: "wrap" }]}>
                    <Text>申込</Text>
                    <Text>番号</Text>
                  </View>
                </View>
                <View style={styles.col_flex1}>
                  <View style={styles.item_basis_full}>
                    <Text>Z9</Text>
                  </View>
                </View>
                <View style={styles.col_flex5}>
                  <View style={styles.item_basis_full}>
                    <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}></View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}></View>
            </View>
          </View>

          <View style={styles.row_h30}>
            <View style={styles.col_flex6}>
              <View style={styles.row_h30}>
                <View style={styles.col_flex2}>
                  <View style={styles.item_basis_full}>
                    <Text>第ニ希望</Text>
                  </View>
                </View>
                <View style={styles.col_flex1}>
                  <View style={[styles.item_basis_full, { flexFlow: "wrap" }]}>
                    <Text>申込</Text>
                    <Text>番号</Text>
                  </View>
                </View>
                <View style={styles.col_flex1}>
                  <View style={styles.item_basis_full}>
                    <Text>Z9</Text>
                  </View>
                </View>
                <View style={styles.col_flex5}>
                  <View style={styles.item_basis_full}>
                    <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}></View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}></View>
            </View>
          </View>

          <View style={styles.row_h30}>
            <View style={styles.col_flex6}>
              <View style={styles.row_h30}>
                <View style={styles.col_flex2}>
                  <View style={styles.item_basis_full}>
                    <Text>第三希望</Text>
                  </View>
                </View>
                <View style={styles.col_flex1}>
                  <View style={[styles.item_basis_full, { flexFlow: "wrap" }]}>
                    <Text>申込</Text>
                    <Text>番号</Text>
                  </View>
                </View>
                <View style={styles.col_flex1}>
                  <View style={styles.item_basis_full}>
                    <Text>Z9</Text>
                  </View>
                </View>
                <View style={styles.col_flex5}>
                  <View style={styles.item_basis_full}>
                    <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}></View>
            </View>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}></View>
            </View>
          </View>

          <View style={styles.row_h20}>
            <View style={styles.col_flex1}>
              <View style={styles.item_basis_full}>
                <Text>有効期間</Text>
              </View>
            </View>
            <View style={styles.col_flex5}>
              <View style={styles.item_basis_full}>
                <Text>
                  令 和 Y Y 年 4 月 1 日 か ら 令 和 Y Y 年 3 月 3 1 日 ま で
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.note1_section}>
        <View style={styles.note1_container}>
          <Text>
            ※この通知書は各種手続の際に必要となりますので、有効期間満了まで保管してください。
          </Text>
          <Text>
            ※第２種特定自転車駐車場(押上駅前、錦糸町駅地下(北口・南口)、錦糸町駅南口機械式)の有効期間は
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            使用料を納付した月までです。利用しようとする月の前月までに使用料を納付することで、上記期間
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            内において、有効期間を延長することができます。
          </Text>
          <Text>
            ※承認決定後、使用料を３０日以内に納付しない場合、利用承認が取り消されます。
          </Text>
          <Text>【不承認理由】</Text>
          <Text>
            申請のあった自転車駐車場は申請者多数につき、抽せんを行った結果、落選となったため。
          </Text>
          <Text>【補欠決定の内容】</Text>
        </View>
      </View>

      <View style={styles.table2_section}>
        <View style={styles.table2_wrapper}>
          <View style={styles.table2_container}>
            <View style={styles.row_hfull}>
              <View style={styles.col_flex2}>
                <View style={styles.row_h30}>
                  <View style={styles.item_basis_full}>
                    <Text>第一希望</Text>
                  </View>
                </View>
                <View style={styles.row_h20}>
                  <View style={styles.item_basis_full}>
                    <Text>有効期間</Text>
                  </View>
                </View>
              </View>
              <View style={styles.col_flex6}>
                <View style={styles.row_h30}>
                  <View style={styles.col_flex1}>
                    <View
                      style={[styles.item_basis_full, { flexFlow: "wrap" }]}
                    >
                      <Text>申込</Text>
                      <Text>番号</Text>
                    </View>
                  </View>
                  <View style={styles.col_flex1}>
                    <View style={styles.item_basis_full}>
                      <Text>Z9</Text>
                    </View>
                  </View>
                  <View style={styles.col_flex5}>
                    <View style={styles.item_basis_full}>
                      <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.row_h20}>
                  <View style={styles.item_basis_full}>
                    <Text>抽選を行った日から令和 Y Y 年 3 月 3 1 日 ま で</Text>
                  </View>
                </View>
              </View>
              <View style={styles.col_flex2}>
                <View style={styles.row_h15}>
                  <View style={styles.item_basis_full}>
                    <Text style={{ fontSize: 8 }}>補欠順位</Text>
                  </View>
                </View>
                <View style={styles.row_h35}>
                  <View style={styles.item_basis_full}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.notesection2}>
        <View style={styles.notesection2_1}>
          <Text>
            ※有効期間中に上記自転車駐車場に空きが生じたときは、補欠順位に従い、利用承認予定
          </Text>
          <Text style={{ paddingLeft: 8 }}>者となります</Text>
          <Text style={{ paddingLeft: 8 }}>
            それまでは承認された　ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ　自転車駐車場をご利用になれます。
          </Text>
        </View>
      </View>
      <View style={styles.end_section}>
        <View style={styles.end_section_1}>
          <Text>
            １この決定に不服がある場合には、この決定があったことを知った日の翌日から起算して３か月以内に、墨田区長に対
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            して審査請求をすることができます（なお、この決定があったことを知った日の翌日から起算して３か月以内であっ
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            ても、この決定の日の翌日から起算して１年を経過すると審査請求をすることができなくなります。）。
          </Text>
          <Text>
            ２この決定については、この決定があったことを知った日の翌日から起算して６か月以内に、墨田区を被告として（訴
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            訟において墨田区を代表する者は墨田区長となります。）、処分の取消しの訴えを提起することができます（なお、
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            この決定があったことを知った日の翌日から起算して６か月以内であっても、この決定の日の翌日から起算して１年
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            を経過すると処分の取消しの訴えを提起することができなくなります。）。ただし、上記１の審査請求をした場合に
          </Text>
          <Text style={{ paddingLeft: 8 }}>
            は、当該審査請求に対する裁決があったことを知った日の翌日から起算して６か月以内に、処分の取消しの訴えを提
          </Text>
          <Text style={{ paddingLeft: 8 }}>起することができます。</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template2;
