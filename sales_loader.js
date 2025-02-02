const GoogleHelper = require('./GoogleHelper');
const path = require('path');

async function main() {
  try {
    // адрес таблицы
    const spreadsheetId = '1MyPE7R0YxgXWfwJUR1_Jp3mC1S1SBvhV0lGJHoB6UxE';
    // id листа GoogleSheet
    const gid = 939693956;
    // название отчета и как начинается эксель файл
    const ftpReportName = 'ftp.sales';

    let excelFilePath = GoogleHelper.findFirstFtpReport(path.join(__dirname, "..", "ftp"), ftpReportName);
    if (!excelFilePath) {
      console.log(`Файл, начинающийся с ${ftpReportName} отсутсвует. Попробуйте позже!!!`);
      return;
    }

    await GoogleHelper.init(spreadsheetId);
    await GoogleHelper.uploadExcelToSheet(excelFilePath, gid, ftpReportName);

  } catch (error) {
    console.error('Error:', error);
  }
}

// Первый запуск
main();
// Запуск каждые 30 минут
setInterval(main, 1800000);