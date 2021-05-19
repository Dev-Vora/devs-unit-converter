// second
module.exports.secondToMillisecond = (second) => second * 1000;
module.exports.secondToMicrosecond = (second) => second * 1000000;
module.exports.secondToNanosecond = (second) => second * 1000000000;
module.exports.secondToPicosecond = (second) => second * 1000000000000;
module.exports.secondToMinute = (second) => second * 0.0166666667;
module.exports.secondToHour = (second) => second * 0.0002777778;

// millisecond
module.exports.millisecondToSecond = (millisecond) => millisecond * 0.001;
module.exports.millisecondToMicrosecond = (millisecond) => millisecond * 1000;
module.exports.millisecondToNanosecond = (millisecond) => millisecond * 1000000;
module.exports.millisecondToPicosecond = (millisecond) =>
  millisecond * 1000000000;
module.exports.millisecondToMinute = (millisecond) => millisecond / 60000;
module.exports.millisecondToHour = (millisecond) => millisecond / 3600000;

// minute
module.exports.minuteToSecond = (minute) => minute * 60;
module.exports.minuteToMillisecond = (minute) => minute * 60000;
module.exports.minuteToMicrosecond = (minute) => minute * 60000000;
module.exports.minuteToNanosecond = (minute) => minute * 60000000000;
module.exports.minuteToPicosecond = (minute) => minute * 60000000000000;
module.exports.minuteToHour = (minute) => minute * 0.0166666667;
module.exports.minuteToDay = (minute) => minute * 0.0006944444;
module.exports.minuteToWeek = (minute) => minute * 0.0000992063;
module.exports.minuteToMonth = (minute) => minute * 0.0000228154;
module.exports.minuteToYear = (minute) => minute * 0.0000019013;

// hour
module.exports.hourToSecond = (hour) => hour * 3600;
module.exports.hourToMillisecond = (hour) => hour * 3600000;
module.exports.hourToMicrosecond = (hour) => hour * 3600000000;
module.exports.hourToNanosecond = (hour) => hour * 3600000000000;
module.exports.hourToPicosecond = (hour) => hour * 3600000000000000;
module.exports.hourToMinute = (hour) => hour * 60;
module.exports.hourToDay = (hour) => hour * 0.0416666667;
module.exports.hourToWeek = (hour) => hour * 0.005952381;
module.exports.hourToMonth = (hour) => hour * 0.0013689254;
module.exports.hourToYear = (hour) => hour * 0.0001140771;

// day
module.exports.dayToSecond = (day) => day * 86400;
module.exports.dayToMillisecond = (day) => day * 86400000;
module.exports.dayToMicrosecond = (day) => day * 86400000000;
module.exports.dayToNanosecond = (day) => day * 86400000000000;
module.exports.dayToPicosecond = (day) => day * 86400000000000000;
module.exports.dayToMinute = (day) => day * 1440;
module.exports.dayToHour = (day) => day * 24;
module.exports.dayToWeek = (day) => day * 0.1428571429;
module.exports.dayToMonth = (day) => day * 0.0328542094;
module.exports.dayToYear = (day) => day * 0.0027378508;
// week
module.exports.weekToSecond = (week) => week * 86400;
module.exports.weekToMillisecond = (week) => week * 604800000;
module.exports.weekToMicrosecond = (week) => week * 604800000000;
module.exports.weekToNanosecond = (week) => week * 604800000000000;
module.exports.weekToPicosecond = (week) => week * 604800000000000000;
module.exports.weekToMinute = (week) => week * 10080;
module.exports.weekToHour = (week) => week * 168;
module.exports.weekToDay = (week) => week * 7;
module.exports.weekToMonth = (week) => week * 0.2299794661;
module.exports.weekToYear = (week) => week * 0.0191649555;
// month
module.exports.monthToSecond = (month) => month * 2629800;
module.exports.monthToMillisecond = (month) => month * 2629800000;
module.exports.monthToMicrosecond = (month) => month * 2629800000000;
module.exports.monthToNanosecond = (month) => month * 2629800000000000;
module.exports.monthToPicosecond = (month) => month * 2629800000000000000;
module.exports.monthToMinute = (month) => month * 43830;
module.exports.monthToHour = (month) => month * 730.5;
module.exports.monthToDay = (month) => month * 30.4375;
module.exports.monthToWeek = (month) => month * 4.3482142857;
module.exports.monthToYear = (month) => month * 0.0833333333;
