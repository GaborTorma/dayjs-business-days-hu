import { BusinessDaysPluginOptions } from 'dayjs-business-days2'

import { specialDays } from './special-days'

const holidays: string[] = []
const additionalWorkingDays: string[] = []

for (const day of specialDays) {
	if (day.type === '1') {
		holidays.push(day.date)
	} else {
		additionalWorkingDays.push(day.date)
	}
}

export const huOptions: BusinessDaysPluginOptions = {
	holidays,
	holidayFormat: 'YYYY-MM-DD',
	additionalWorkingDays,
	additionalWorkingDayFormat: 'YYYY-MM-DD',
}
