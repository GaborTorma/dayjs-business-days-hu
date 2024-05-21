# @gabortorma/dayjs-business-days-hu

[@reediculous456/dayjs-business-days](https://github.com/reediculous456/dayjs-business-days) with updated hungarian holidays and additional working days from 2010 to 2024.

## Install

```bash
npm install @gabortorma/dayjs-business-days-hu
```

## Import

```javascript
import dayjs from '@gabortorma/dayjs-business-days-hu'

dayjs('2020-11-01').isHoliday() // true
dayjs('2020-10-15').isBusinessDay() // true
```

## Import plugin options only

```javascript
import { huOptions } from '@gabortorma/dayjs-business-days-hu/dist/options'
```

#### Usage

```javascript
import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days2'
import { huOptions } from '@gabortorma/dayjs-business-days-hu/dist/options'

dayjs.extend(dayjsBusinessDays, huOptions)
```

## Usage Guide

See the original plugin: [@reediculous456/dayjs-business-days](https://github.com/reediculous456/dayjs-business-days)
