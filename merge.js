const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const pdfM = async (p1,p2) => {
  await merger.add(p1);
  await merger.add(p2); 

  // await merger.add('pdf2.pdf');
  // await merger.add('pdf2.pdf', 2); // merge only page 2

  let finalPdf = new Date().getTime();  //givs unique name each file
  await merger.save(`public/${finalPdf}.pdf`); //save under given name and reset the internal document
  return finalPdf;

  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

module.exports = {pdfM};