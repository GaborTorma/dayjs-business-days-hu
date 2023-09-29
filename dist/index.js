"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const dayjs_business_days2_1 = tslib_1.__importDefault(require("dayjs-business-days2"));
const options_1 = require("./options");
dayjs_1.default.extend(dayjs_business_days2_1.default, options_1.huOptions);
exports.default = dayjs_1.default;
//# sourceMappingURL=index.js.map