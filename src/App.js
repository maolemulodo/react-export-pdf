import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Template from "./components/Template1/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <PDFDownloadLink document={<Template1 />} fileName="template1.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink> */}
      {/* width="794px" height="1122px" */}
      {/* width="709px" height="499px" */}
      <PDFViewer width="794px" height="1122px">
        <Template />
      </PDFViewer>
      {/* <PDFViewer width="709px" height="499px">
        <Template />
      </PDFViewer> */}
    </div>
  );
}

export default App;
