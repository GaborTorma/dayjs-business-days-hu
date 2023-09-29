import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days2'
import { huOptions } from './options'

dayjs.extend(dayjsBusinessDays, huOptions)

export default dayjs
