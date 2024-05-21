"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.huOptions = void 0;
const special_days_1 = require("./special-days");
const holidays = [];
const additionalWorkingDays = [];
for (const day of special_days_1.specialDays) {
    if (day.type === '1')
        holidays.push(day.date);
    else
        additionalWorkingDays.push(day.date);
}
exports.huOptions = {
    holidays,
    holidayFormat: 'YYYY-MM-DD',
    additionalWorkingDays,
    additionalWorkingDayFormat: 'YYYY-MM-DD',
};
//# sourceMappingURL=options.js.map