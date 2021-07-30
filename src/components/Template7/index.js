import React from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import commonStyles from "../commonStyles";
import AutoWrapLine from "../AutoWrapLine";
import { document } from "../Document";

const Template7 = () => {
  const leftBorderText =
    "注意・１納付期限を経過しないよう特に注意してください。　２住所移転の際は直ちに発行者まで届けてください。";

  return (
    <Document>
      <Page
        size="B5"
        orientation="landscape"
        style={[commonStyles.page, { fontSize: 8 }]}
      >
        {/** full page */}
        <View style={{ display: "flex", flexDirection: "row", height: "100%" }}>
          {/** part 1 */}
          <View
            style={{
              width: 236,
              borderRight: 1,
              borderStyle: "dotted",
            }}
          >
            {/** no section */}
            <View
              style={{
                position: "absolute",
                top: 11,
                left: 100,
                width: 120,
                height: 22,
                // backgroundColor: "grey",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {/** left side col */}
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <View
                    style={{
                      flexBasis: "100%",
                      justifyContent: "flex-end",
                      paddingBottom: 3,
                      paddingRight: 3,
                    }}
                  >
                    <Text>No</Text>
                  </View>
                </View>
                {/** right side */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderBottom: 1,
                      borderStyle: "dotted",
                    }}
                  >
                    <Text>ZZZZZZZ9</Text>
                  </View>
                </View>
              </View>
            </View>
            {/** end no section */}
            {/** title section */}
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 12,
                width: 135,
                height: 64,
                // backgroundColor: "grey",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // backgroundColor: "yellow",
                  alignItems: "center",
                }}
              >
                <View style={{ fontSize: 15, justifyContent: "center" }}>
                  <Text>納入通知書兼</Text>
                  <Text style={{ letterSpacing: 12 }}>領収証書</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    border: 1,
                    borderRadius: "50%",
                    marginLeft: 5,
                  }}
                >
                  <Text>公</Text>
                </View>
              </View>
            </View>
            {/** end title section */}
            {/** identity number section */}
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 159,
                width: 64,
                height: 64,
                border: 2,
                borderStyle: "solid",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 40,
                backgroundColor: "white",
              }}
            >
              <Text>14</Text>
            </View>
            {/** end identity number section */}
            {/** left border text section */}
            <View
              style={{
                position: "absolute",
                top: 104,
                width: 12,
                height: 364,
                // border: 1,
                // backgroundColor: "yellow",
                fontSize: 4.7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 8,
                }}
              >
                {Array.from(leftBorderText).map((char) => (
                  <Text>{char}</Text>
                ))}
              </View>
            </View>
            {/** end left border text section */}
            {/** detail table section */}
            <View
              style={{
                position: "absolute",
                top: 104,
                left: 12,
                width: 211,
                height: 364,
                borderLeft: 1,
                borderTop: 1,
                zIndex: 1,
                fontSize: 6,
              }}
            >
              {/** Row 1 container */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/** left item of row 1 container */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    // border: 1,
                  }}
                >
                  <View
                    style={{
                      borderRight: 1,
                      borderBottom: 1,
                      textAlign: "center",
                      justifyContent: "center",
                      height: 15,
                    }}
                  >
                    <Text>振替口座</Text>
                  </View>
                  <View
                    style={{
                      // border: 1,
                      borderRight: 1,
                      borderBottom: 1,
                      textAlign: "center",
                      justifyContent: "center",
                      height: 15,
                    }}
                  >
                    <Text>加入者</Text>
                  </View>
                </View>
                {/** right item of row 1 container */}
                <View
                  style={{ display: "flex", flexDirection: "column", flex: 3 }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 15,
                    }}
                  >
                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        paddingLeft: 5,
                        textAlign: "left",
                        justifyContent: "center",
                        flex: 1,
                      }}
                    >
                      <Text>00180-3-960014</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 15,
                    }}
                  >
                    <View
                      style={{
                        // border: 1,
                        borderRight: 1,
                        borderBottom: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 2,
                      }}
                    >
                      <View>
                        <Text>墨田区会計管理者</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        // border: 1,
                        borderRight: 1,
                        borderBottom: 1,
                        alignItems: "flex-end",
                        justifyContent: "center",
                        flex: 1,
                      }}
                    >
                      <View style={{ paddingRight: 5 }}>
                        <Text>YY 年度</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 1 container */}
              {/** Row 2 container */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/* item 1 row 2 container */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>会計</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>款</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>項</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>目</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>節</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>細節</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        // border: 1,
                      }}
                    >
                      <Text>金額</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        // border: 1,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: 3,
                        }}
                      >
                        <Text>納入者</Text>
                        <Text style={{ letterSpacing: 9 }}>住所</Text>
                        <Text style={{ letterSpacing: 9 }}>氏名</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* item 2 row 2 container */}
                <View style={{ flex: 5 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRight: 1,
                          borderBottom: 1,
                          flex: 1,
                          // border: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>01</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>区一般会計</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRight: 1,
                          borderBottom: 1,
                          flex: 1,
                          // border: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>12</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>使用料及び手数料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>01</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>06</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>土木使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>02</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>自転車駐車場</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>04</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>第１種特定自転車駐車場使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          flexBasis: "100%",
                          textAlign: "right",
                          paddingRight: 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: 18 }}>￥ZZZZ9</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          flexBasis: "100%",
                          textAlign: "left",
                          paddingLeft: 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text>〒ZZ9-ZZZ9</Text>
                        <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                        <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 2 container */}
              {/** Row 3 container */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: 173,
                  // backgroundColor: "yellow",
                }}
              >
                {/* item 1 row 3 container */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                    height: 173,
                    // border: 1,
                    // borderRight: 1,
                    borderBottom: 1,
                  }}
                >
                  <View style={{ padding: 3 }}>
                    <Text>上記の金額を納付してください。</Text>
                  </View>
                  <View style={{}}>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          height: 30,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 3,
                          }}
                        >
                          <Text>発 行 者</Text>
                          <Text>職 氏 名</Text>
                          <Text>納付目的</Text>
                        </View>
                        <View
                          style={{
                            marginLeft: "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "grey",
                          }}
                        >
                          <Text>墨田区長　山本　亨</Text>
                        </View>
                      </View>

                      <View style={{ marginLeft: 5 }}>
                        <Text>第１種特定自転車駐車場</Text>
                      </View>
                      <View style={{ marginLeft: 5 }}>
                        <Text>使用料</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: 3,
                    }}
                  >
                    <View>
                      <Text>納付期限</Text>
                      <Text style={{ padding: "0 0 5px 3px" }}>
                        令和YY年MM月DD日
                      </Text>
                    </View>
                    <View>
                      <Text>納付場所</Text>
                      <Text style={{ paddingLeft: 3 }}>墨田区指定金融機関</Text>
                      <Text style={{ paddingLeft: 3 }}>
                        墨田区収納代理金融機関
                      </Text>
                      <Text style={{ paddingLeft: 3 }}>
                        東京都、山梨県及び関東各県
                      </Text>
                      <Text style={{ paddingLeft: 3 }}>
                        所在のゆうちょ銀行・郵便局
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: 90,
                    height: 173,
                    // border: 1,
                    borderRight: 1,
                    borderBottom: 1,
                  }}
                >
                  <View
                    style={{
                      borderLeft: 1,
                      borderTop: 1,
                      width: 90,
                      height: 95,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: 1,
                          fontSize: 5,
                        }}
                      >
                        <Text>上記の金額を領収しました。</Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: 1,
                        }}
                      >
                        <Text>領 収 日 付 印</Text>
                      </View>
                      <View
                        style={{
                          // border: 1,
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 3 container */}
              {/** Row 4 container */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  // backgroundColor: "grey",
                }}
              >
                <View style={{ flex: 1, borderRight: 1, borderBottom: 1 }}>
                  <Text>所属名</Text>
                </View>
                <View style={{ flex: 1, borderRight: 1, borderBottom: 1 }}>
                  <Text>554000</Text>
                </View>
                <View
                  style={{
                    flex: 4,
                    // border: 1,
                    borderRight: 1,
                    borderBottom: 1,
                    textAlign: "left",
                    paddingLeft: 5,
                  }}
                >
                  <Text>土木管理課交通安全担当</Text>
                </View>
              </View>
              {/** End Row 4 container */}
            </View>
            {/** end detail table section */}
            {/** footer section */}
            <View
              style={{
                position: "absolute",
                top: 468,
                left: 12,
                color: "red",
                // border: 1,
              }}
            >
              <View
                style={{ display: "flex", flexDirection: "row", fontSize: 5 }}
              >
                <View style={{ marginRight: 8 }}>
                  <Text>問合せ先</Text>
                </View>
                <View>
                  <Text>土木管理課交通安全担当</Text>
                  <Text>TEL　5608-6203（直通）</Text>
                </View>
              </View>
            </View>
            {/** end section */}
          </View>

          {/** part 2 */}
          <View style={{ width: 236, borderRight: 1, borderStyle: "dotted" }}>
            {/** no section */}
            <View
              style={{
                position: "absolute",
                top: 11,
                left: 100,
                width: 120,
                height: 22,
                // backgroundColor: "grey",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {/** left side col */}
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <View
                    style={{
                      flexBasis: "100%",
                      justifyContent: "flex-end",
                      paddingBottom: 3,
                      paddingRight: 3,
                    }}
                  >
                    <Text>No</Text>
                  </View>
                </View>
                {/** right side */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderBottom: 1,
                      borderStyle: "dotted",
                    }}
                  >
                    <Text>ZZZZZZZ9</Text>
                  </View>
                </View>
              </View>
            </View>
            {/** end no section */}
            {/** title section */}
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 12,
                width: 135,
                height: 64,
                // backgroundColor: "grey",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // backgroundColor: "yellow",
                  alignItems: "center",
                }}
              >
                <View style={{ fontSize: 15, justifyContent: "center" }}>
                  <Text>納入済通知書</Text>
                  {/* <Text style={{ letterSpacing: 12 }}>領収証書</Text> */}
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    border: 1,
                    borderRadius: "50%",
                    marginLeft: 5,
                  }}
                >
                  <Text>公</Text>
                </View>
              </View>
            </View>
            {/** end title section */}
            {/** identity number section */}
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 159,
                width: 64,
                height: 64,
                border: 2,
                borderStyle: "solid",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 40,
                backgroundColor: "white",
              }}
            >
              <Text>14</Text>
            </View>
            {/** end identity number section */}
            {/** left border text section */}
            <View
              style={{
                position: "absolute",
                top: 104,
                width: 12,
                height: 364,
                // border: 1,
                // backgroundColor: "yellow",
                fontSize: 4.7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 8,
                }}
              >
                {Array.from(leftBorderText).map((char) => (
                  <Text>{char}</Text>
                ))}
              </View>
            </View>
            {/** end left border text section */}
            {/** detail table section */}
            <View
              style={{
                position: "absolute",
                top: 104,
                left: 12,
                width: 211,
                height: 364,
                borderLeft: 1,
                borderTop: 1,
                zIndex: 1,
                fontSize: 6,
              }}
            >
              {/** Row 1 container */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/** left item of row 1 container */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    // border: 1,
                  }}
                >
                  <View
                    style={{
                      borderRight: 1,
                      borderBottom: 1,
                      textAlign: "center",
                      justifyContent: "center",
                      height: 15,
                    }}
                  >
                    <Text>振替口座</Text>
                  </View>
                  <View
                    style={{
                      // border: 1,
                      borderRight: 1,
                      borderBottom: 1,
                      textAlign: "center",
                      justifyContent: "center",
                      height: 15,
                    }}
                  >
                    <Text>加入者</Text>
                  </View>
                </View>
                {/** right item of row 1 container */}
                <View
                  style={{ display: "flex", flexDirection: "column", flex: 3 }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 15,
                    }}
                  >
                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        paddingLeft: 5,
                        textAlign: "left",
                        justifyContent: "center",
                        flex: 1,
                      }}
                    >
                      <Text>00180-3-960014</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 15,
                    }}
                  >
                    <View
                      style={{
                        // border: 1,
                        borderRight: 1,
                        borderBottom: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 2,
                      }}
                    >
                      <View>
                        <Text>墨田区会計管理者</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        // border: 1,
                        borderRight: 1,
                        borderBottom: 1,
                        alignItems: "flex-end",
                        justifyContent: "center",
                        flex: 1,
                      }}
                    >
                      <View style={{ paddingRight: 5 }}>
                        <Text>YY 年度</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 1 container */}
              {/** Row 2 container */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/* item 1 row 2 container */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>会計</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>款</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>項</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>目</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>節</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>細節</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        // border: 1,
                      }}
                    >
                      <Text>金額</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        // border: 1,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: 3,
                        }}
                      >
                        <Text>納入者</Text>
                        <Text style={{ letterSpacing: 9 }}>住所</Text>
                        <Text style={{ letterSpacing: 9 }}>氏名</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* item 2 row 2 container */}
                <View style={{ flex: 5 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRight: 1,
                          borderBottom: 1,
                          flex: 1,
                          // border: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>01</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>区一般会計</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRight: 1,
                          borderBottom: 1,
                          flex: 1,
                          // border: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>12</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>使用料及び手数料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>01</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>06</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>土木使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>02</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>自転車駐車場</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>04</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>第１種特定自転車駐車場使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          flexBasis: "100%",
                          textAlign: "right",
                          paddingRight: 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: 18 }}>￥ZZZZ9</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          flexBasis: "100%",
                          textAlign: "left",
                          paddingLeft: 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text>〒ZZ9-ZZZ9</Text>
                        <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                        <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 2 container */}
              {/** Row 3 container */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: 173,
                  // backgroundColor: "yellow",
                }}
              >
                {/* item 1 row 3 container */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                    height: 173,
                    // border: 1,
                    // borderRight: 1,
                    borderBottom: 1,
                  }}
                >
                  <View style={{ padding: 3 }}>
                    <Text>上記の金額を納付してください。</Text>
                  </View>
                  <View style={{}}>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          height: 30,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 3,
                          }}
                        >
                          <Text>発 行 者</Text>
                          <Text>職 氏 名</Text>
                          <Text>納付目的</Text>
                        </View>
                        <View
                          style={{
                            marginLeft: "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "grey",
                          }}
                        >
                          <Text>墨田区長　山本　亨</Text>
                        </View>
                      </View>

                      <View style={{ marginLeft: 5 }}>
                        <Text>第１種特定自転車駐車場</Text>
                      </View>
                      <View style={{ marginLeft: 5 }}>
                        <Text>使用料</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: 3,
                    }}
                  >
                    <View>
                      <Text>納付期限</Text>
                      <Text style={{ padding: "0 0 5px 3px" }}>
                        令和YY年MM月DD日
                      </Text>
                    </View>
                    <View>
                      <Text>納付場所</Text>
                      <Text style={{ paddingLeft: 3 }}>墨田区指定金融機関</Text>
                      <Text style={{ paddingLeft: 3 }}>
                        墨田区収納代理金融機関
                      </Text>
                      <Text style={{ paddingLeft: 3 }}>
                        東京都、山梨県及び関東各県
                      </Text>
                      <Text style={{ paddingLeft: 3 }}>
                        所在のゆうちょ銀行・郵便局
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: 90,
                    height: 173,
                    // border: 1,
                    borderRight: 1,
                    borderBottom: 1,
                  }}
                >
                  <View
                    style={{
                      borderLeft: 1,
                      borderTop: 1,
                      width: 90,
                      height: 95,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: 1,
                          fontSize: 5,
                        }}
                      >
                        <Text>上記の金額を領収しました。</Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: 1,
                        }}
                      >
                        <Text>領 収 日 付 印</Text>
                      </View>
                      <View
                        style={{
                          // border: 1,
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 3 container */}
              {/** Row 4 container */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  // backgroundColor: "grey",
                }}
              >
                <View style={{ flex: 1, borderRight: 1, borderBottom: 1 }}>
                  <Text>所属名</Text>
                </View>
                <View style={{ flex: 1, borderRight: 1, borderBottom: 1 }}>
                  <Text>554000</Text>
                </View>
                <View
                  style={{
                    flex: 4,
                    // border: 1,
                    borderRight: 1,
                    borderBottom: 1,
                    textAlign: "left",
                    paddingLeft: 5,
                  }}
                >
                  <Text>土木管理課交通安全担当</Text>
                </View>
              </View>
              {/** End Row 4 container */}
            </View>
            {/** end detail table section */}
            {/** footer section */}
            <View
              style={{
                position: "absolute",
                top: 468,
                left: 12,
                color: "red",
                // border: 1,
              }}
            >
              <View
                style={{ display: "flex", flexDirection: "row", fontSize: 5 }}
              >
                <View style={{ marginRight: 8 }}>
                  <Text>問合せ先</Text>
                </View>
                <View>
                  <Text>土木管理課交通安全担当</Text>
                  <Text>TEL　5608-6203（直通）</Text>
                </View>
              </View>
            </View>
            {/** end section */}
          </View>
          {/** part 3 */}
          <View style={{ width: 236, borderStyle: "dotted" }}>
            {/** no section */}
            <View
              style={{
                position: "absolute",
                top: 11,
                left: 100,
                width: 120,
                height: 22,
                // backgroundColor: "grey",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {/** left side col */}
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <View
                    style={{
                      flexBasis: "100%",
                      justifyContent: "flex-end",
                      paddingBottom: 3,
                      paddingRight: 3,
                    }}
                  >
                    <Text>No</Text>
                  </View>
                </View>
                {/** right side */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderBottom: 1,
                      borderStyle: "dotted",
                    }}
                  >
                    <Text>ZZZZZZZ9</Text>
                  </View>
                </View>
              </View>
            </View>
            {/** end no section */}
            {/** title section */}
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 12,
                width: 135,
                height: 64,
                // backgroundColor: "grey",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // backgroundColor: "yellow",
                  alignItems: "center",
                }}
              >
                <View style={{ fontSize: 15, justifyContent: "center" }}>
                  {/* <Text>納入通知書兼</Text> */}
                  <Text style={{ letterSpacing: 65 }}>原符</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    border: 1,
                    borderRadius: "50%",
                    marginLeft: 5,
                  }}
                >
                  <Text>公</Text>
                </View>
              </View>
            </View>
            {/** end title section */}
            {/** identity number section */}
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 159,
                width: 64,
                height: 64,
                border: 2,
                borderStyle: "solid",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 40,
                backgroundColor: "white",
              }}
            >
              <Text>14</Text>
            </View>
            {/** end identity number section */}
            {/** left border text section */}
            <View
              style={{
                position: "absolute",
                top: 104,
                width: 12,
                height: 364,
                // border: 1,
                // backgroundColor: "yellow",
                fontSize: 4.7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 8,
                }}
              >
                {Array.from(leftBorderText).map((char) => (
                  <Text>{char}</Text>
                ))}
              </View>
            </View>
            {/** end left border text section */}
            {/** detail table section */}
            <View
              style={{
                position: "absolute",
                top: 104,
                left: 12,
                width: 211,
                height: 364,
                borderLeft: 1,
                borderTop: 1,
                zIndex: 1,
                fontSize: 6,
              }}
            >
              {/** Row 1 container */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/** left item of row 1 container */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    // border: 1,
                  }}
                >
                  <View
                    style={{
                      borderRight: 1,
                      borderBottom: 1,
                      textAlign: "center",
                      justifyContent: "center",
                      height: 15,
                    }}
                  >
                    <Text>振替口座</Text>
                  </View>
                  <View
                    style={{
                      // border: 1,
                      borderRight: 1,
                      borderBottom: 1,
                      textAlign: "center",
                      justifyContent: "center",
                      height: 15,
                    }}
                  >
                    <Text>加入者</Text>
                  </View>
                </View>
                {/** right item of row 1 container */}
                <View
                  style={{ display: "flex", flexDirection: "column", flex: 3 }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 15,
                    }}
                  >
                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        paddingLeft: 5,
                        textAlign: "left",
                        justifyContent: "center",
                        flex: 1,
                      }}
                    >
                      <Text>00180-3-960014</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 15,
                    }}
                  >
                    <View
                      style={{
                        // border: 1,
                        borderRight: 1,
                        borderBottom: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 2,
                      }}
                    >
                      <View>
                        <Text>墨田区会計管理者</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        // border: 1,
                        borderRight: 1,
                        borderBottom: 1,
                        alignItems: "flex-end",
                        justifyContent: "center",
                        flex: 1,
                      }}
                    >
                      <View style={{ paddingRight: 5 }}>
                        <Text>YY 年度</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 1 container */}
              {/** Row 2 container */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                {/* item 1 row 2 container */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>会計</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>款</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>項</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>目</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>節</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 15,
                        // border: 1,
                      }}
                    >
                      <Text>細節</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        // border: 1,
                      }}
                    >
                      <Text>金額</Text>
                    </View>

                    <View
                      style={{
                        borderRight: 1,
                        borderBottom: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        // border: 1,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: 3,
                        }}
                      >
                        <Text>納入者</Text>
                        <Text style={{ letterSpacing: 9 }}>住所</Text>
                        <Text style={{ letterSpacing: 9 }}>氏名</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* item 2 row 2 container */}
                <View style={{ flex: 5 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRight: 1,
                          borderBottom: 1,
                          flex: 1,
                          // border: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>01</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>区一般会計</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRight: 1,
                          borderBottom: 1,
                          flex: 1,
                          // border: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>12</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>使用料及び手数料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>01</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>06</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>土木使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>02</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>自転車駐車場</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 15,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>04</Text>
                      </View>
                      <View
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          paddingLeft: 5,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                        }}
                      >
                        <Text>第１種特定自転車駐車場使用料</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          flexBasis: "100%",
                          textAlign: "right",
                          paddingRight: 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: 18 }}>￥ZZZZ9</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 30,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          // border: 1,
                          borderRight: 1,
                          borderBottom: 1,
                          flexBasis: "100%",
                          textAlign: "left",
                          paddingLeft: 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text>〒ZZ9-ZZZ9</Text>
                        <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                        <Text>ＮＮＮＮＮＮＮＮＮＮ</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 2 container */}
              {/** Row 3 container */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: 173,
                  // backgroundColor: "yellow",
                }}
              >
                {/* item 1 row 3 container */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                    height: 173,
                    // border: 1,
                    // borderRight: 1,
                    borderBottom: 1,
                  }}
                >
                  <View style={{ padding: 3 }}>
                    <Text>上記の金額を納付してください。</Text>
                  </View>
                  <View style={{}}>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          height: 30,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 3,
                          }}
                        >
                          <Text>発 行 者</Text>
                          <Text>職 氏 名</Text>
                          <Text>納付目的</Text>
                        </View>
                        <View
                          style={{
                            marginLeft: "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "grey",
                          }}
                        >
                          <Text>墨田区長　山本　亨</Text>
                        </View>
                      </View>

                      <View style={{ marginLeft: 5 }}>
                        <Text>第１種特定自転車駐車場</Text>
                      </View>
                      <View style={{ marginLeft: 5 }}>
                        <Text>使用料</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      // border: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: 3,
                    }}
                  >
                    <View>
                      <Text>納付期限</Text>
                      <Text style={{ padding: "0 0 5px 3px" }}>
                        令和YY年MM月DD日
                      </Text>
                    </View>
                    <View>
                      <Text>納付場所</Text>
                      <Text style={{ paddingLeft: 3 }}>墨田区指定金融機関</Text>
                      <Text style={{ paddingLeft: 3 }}>
                        墨田区収納代理金融機関
                      </Text>
                      <Text style={{ paddingLeft: 3 }}>
                        東京都、山梨県及び関東各県
                      </Text>
                      <Text style={{ paddingLeft: 3 }}>
                        所在のゆうちょ銀行・郵便局
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: 90,
                    height: 173,
                    // border: 1,
                    borderRight: 1,
                    borderBottom: 1,
                  }}
                >
                  <View
                    style={{
                      borderLeft: 1,
                      borderTop: 1,
                      width: 90,
                      height: 95,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: 1,
                          fontSize: 5,
                        }}
                      >
                        <Text>上記の金額を領収しました。</Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: 1,
                        }}
                      >
                        <Text>領 収 日 付 印</Text>
                      </View>
                      <View
                        style={{
                          // border: 1,
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/** End Row 3 container */}
              {/** Row 4 container */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  // backgroundColor: "grey",
                }}
              >
                <View style={{ flex: 1, borderRight: 1, borderBottom: 1 }}>
                  <Text>所属名</Text>
                </View>
                <View style={{ flex: 1, borderRight: 1, borderBottom: 1 }}>
                  <Text>554000</Text>
                </View>
                <View
                  style={{
                    flex: 4,
                    // border: 1,
                    borderRight: 1,
                    borderBottom: 1,
                    textAlign: "left",
                    paddingLeft: 5,
                  }}
                >
                  <Text>土木管理課交通安全担当</Text>
                </View>
              </View>
              {/** End Row 4 container */}
            </View>
            {/** end detail table section */}
            {/** footer section */}
            <View
              style={{
                position: "absolute",
                top: 468,
                left: 12,
                color: "red",
                // border: 1,
              }}
            >
              <View
                style={{ display: "flex", flexDirection: "row", fontSize: 5 }}
              >
                <View style={{ marginRight: 8 }}>
                  <Text>問合せ先</Text>
                </View>
                <View>
                  <Text>土木管理課交通安全担当</Text>
                  <Text>TEL　5608-6203（直通）</Text>
                </View>
              </View>
            </View>
            {/** end section */}
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default Template7;
