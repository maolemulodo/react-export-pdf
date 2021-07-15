import React from "react";
import {
  Page,
  Document,
  View,
  Text,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import font from "./fonts/MPLUSRounded1c-Regular.ttf";

Font.register({
  family: "MPLUSRounded1c",
  format: "truetype",
  src: font,
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "MPLUSRounded1c",
    position: "relative",
    background: "#555555",
    fontSize: 10,
  },
  dateexport_section: {
    position: "absolute",
    left: 400,
    top: 30,

    width: 189,
  },

  maintitlecontainer_section: {
    display: "flex",
    flexFlow: "row center",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    top: 50,

    width: 595, // full pdf
    height: "auto",
  },

  submaintitlecontainer_section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    width: 550, // inside
  },

  boxconer_section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 112,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#000",

    fontSize: 20,
    color: "#fff",
  },

  textmaintitle_section: {
    paddingLeft: 10,

    letterSpacing: 10,
    fontSize: 15,
  },

  personalinfo_section: {
    position: "absolute",
    left: 272,
    top: 139,

    width: 225,
    height: 120,
  },

  personalinfo_section_1: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "end",
    justifyContent: "flex-end",
  },

  personalinfo_section_2: {
    display: "flex",
    flexDirection: "column",

    paddingTop: 5,
  },
  personalinfo_section_2_1: {
    display: "flex",
    flexDirection: "row",

    margin: "3px 0",
  },
  personalinfo_section_2_2: {
    display: "flex",
    flexDirection: "row",
  },
  personalinfo_section_2_3: {
    display: "flex",
    flexDirection: "row",

    margin: "3px 0",

    fontSize: 8,
  },
  personalinfo_section_2_4: {
    display: "flex",
    flexDirection: "row",
  },

  singingmark_section: {
    display: "flex",
    flexDirection: "row",

    position: "absolute",
    left: 435,
    top: 295,
  },

  maincontent_section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 329,

    width: 595,
  },

  rembertext_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 376,

    width: 595,
  },

  detailinfo_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 408,

    width: 595,
  },

  detailinfo_table: {
    display: "flex",
    flexDirection: "flex-start",

    width: 550,
    border: "1px solid black",
  },

  detailinfo_table_row1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 36,
    borderBottom: "1px solid black",
  },

  detailinfo_table_row2: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    height: 52,
    borderBottom: "1px solid black",
  },
  detailinfo_table_row2_col1: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row2_col2: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row2_col3: {
    justifyContent: "center",
    alignItems: "center",

    width: 40,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row2_col4: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },

  detailinfo_table_row3: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    height: 52,
  },
  detailinfo_table_row3_col1: {
    justifyContent: "center",
    alignItems: "center",

    width: 80,
    height: "100%",
    borderRight: "1px solid black",
  },
  detailinfo_table_row3_col2: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",

    letterSpacing: 10,
  },

  note_section: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 555,
    width: 595,
  },
  note_section_1: {
    width: 550,

    fontSize: 8,
  },

  end_section: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 700,
    width: 595,
  },
  end_section_1: {
    width: 550,
    border: "1px solid black",

    fontSize: 8,
    letterSpacing: 2,
    padding: "2px 0 2px 10px",
  },
});

const Template1 = () => (
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
            <Text>特定自転車駐車場利用承認通知書</Text>
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
      <View style={styles.detailinfo_section}>
        <View style={styles.detailinfo_table}>
          <View style={styles.detailinfo_table_row1}>
            <View style={styles.detailinfo_table_row1_col1}>
              <Text style={{ letterSpacing: 20, fontSize: 15 }}>
                利用承認決定自転車転車駐車場
              </Text>
            </View>
          </View>
          <View style={styles.detailinfo_table_row2}>
            <View style={styles.detailinfo_table_row2_col1}>
              <Text>第一希望</Text>
            </View>
            <View style={styles.detailinfo_table_row2_col2}>
              <Text>申込番号</Text>
            </View>
            <View style={styles.detailinfo_table_row2_col3}>
              <Text>Z9</Text>
            </View>
            <View style={styles.detailinfo_table_row2_col4}>
              <Text>ＮＮＮＮＮ　ＮＮＮＮＮＮＮＮ</Text>
            </View>
          </View>
          <View style={styles.detailinfo_table_row3}>
            <View style={styles.detailinfo_table_row3_col1}>
              <Text>有効期間</Text>
            </View>
            <View style={styles.detailinfo_table_row3_col2}>
              <Text>令和YY年4月1日から令和YY年3月31日まで</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.note_section}>
        <View style={styles.note_section_1}>
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
            －内において、有効期間を延長することができます。
          </Text>
          <Text>
            ※承認決定後、使用料を３０日以内に納付しない場合、利用承認が取り消されます。
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

export default Template1;
