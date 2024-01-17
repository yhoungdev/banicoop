/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const useExportPDF = () => {
  const exportPDF = (data, headers, filename = "export.pdf") => {
    const doc = new jsPDF();
    const tableRows = [];

    data.forEach((item, index) => {
      const row = headers.map(header => {
        if (header === "Date" || header === "Time") {
          return moment(item[header.toLowerCase()]).format(
            header === "Date" ? "YYYY-MM-DD" : "LT"
          );
        }
        return item[header.toLowerCase()];
      });
      tableRows.push([index + 1, ...row]);
    });

    doc.autoTable(headers, tableRows, { startY: 20 });
    doc.text(filename.split(".")[0], 14, 15);
    doc.save(filename);
  };

  return exportPDF;
};

export default useExportPDF;
