const GoogleHelper = require('./GoogleHelper');

(async () => {
  try {
    // адрес таблицы
    const spreadsheetId = '1MyPE7R0YxgXWfwJUR1_Jp3mC1S1SBvhV0lGJHoB6UxE';
    // файл источник
    const excelFilePath = './ftp.sales.xlsx';
    // id листа GoogleSheet
    const gid = 939693956;

    await GoogleHelper.init(spreadsheetId);
    await GoogleHelper.uploadExcelToSheet(excelFilePath, gid);

    console.log('Excel data uploaded successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
})();
