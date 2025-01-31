const GoogleHelper = require('./GoogleHelper');

(async () => {
  try {
    const spreadsheetId = '1MyPE7R0YxgXWfwJUR1_Jp3mC1S1SBvhV0lGJHoB6UxE';
    await GoogleHelper.init(spreadsheetId);

    const excelFilePath = './ftp.sales.xlsx';
    const sheetName = 'ftp.sales';

    await GoogleHelper.uploadExcelToSheet(excelFilePath, sheetName);
    console.log('Excel data uploaded successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
})();
