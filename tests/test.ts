import dayjs from '../src'

describe('.isBusinessDay (2022-10-15 is a forced working day)', () => {
  it('should be true', (done) => {
    expect(dayjs('2022-10-15').isBusinessDay()).toBe(true)
    done()
  })
})

describe('.isHoliday (2022-11-01 is a holiday)', () => {
  it('should be true', (done) => {
    expect(dayjs('2022-11-01').isHoliday()).toBe(true)
    done()
  })
})
