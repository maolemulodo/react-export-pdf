import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Template1 from "./components/Template1";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<Template1 />} fileName="template1.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      {/* <PDFViewer width="794px" height="1122px">
        <MyPdfDocument />
      </PDFViewer> */}
    </div>
  );
}

export default App;
