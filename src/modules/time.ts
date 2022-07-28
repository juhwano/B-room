import dayjs from 'dayjs';

/**
 *
 * @param startDate {string} 예시 : '2022-07-28'
 * @param endDate {string} 예시 : '2022-07-29'
 * @returns convertedStartDate {object} 예시 : 2022-07-27T15:00:00.000Z
 * @returns convertedEndDate {object} 예시 : 2022-07-28T15:00:00.000Z
 */
const toTimestamp = (startDate: string, endDate: string) => {
  const convertedStartDate = dayjs(startDate).toDate();
  const convertedEndDate = dayjs(endDate).toDate();

  return {
    convertedStartDate,
    convertedEndDate
  };
};
/**
 *
 * @param startDate {string} 예시 : '2022-07-28'
 * @param endDate {string} 예시 : '2022-07-29'
 * @returns dayDifference {number} 예시 : 1
 */
const getDayDifference = (startDate: string, endDate: string) => {
  const date = dayjs(endDate);

  const dayDifference = date.diff(startDate, 'day');

  return dayDifference;
};

export { toTimestamp, getDayDifference };
