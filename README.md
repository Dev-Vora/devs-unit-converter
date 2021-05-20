# devs-unit-converter

this package will help you in conversion of diffrent length ,time & temperature units

## Prerequisite

-> Node must be installed.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install devs-unit-converter.

```bash
npm install devs-unit-converter
```

## Usage

```bash
# to use length conversation methods
const length = require("devs-unit-converter/length");
console.log(length.meterToCentimeter(100));
```
output: 10000

```bash
# to use time conversation methods
const time = require("devs-unit-converter/time");
console.log(time.dayToHour(1));
```
output: 24

```bash
# to use temperature conversation methods
const temperature = require("devs-unit-converter/temperature");
console.log(temperature.celsiusToKelvin(1));
```
output: 274.15

## List of methods

```bash
# for length conversation
meterToCentimeter(number)
meterToKilometer(number)
meterToMillimeter(number)
meterToMicrometer(number)
meterToNanometer(number)
meterToFoot(number)
meterToInch(number)

kilometerToMeter(number)
kilometerToCentimeter(number)
kilometerToMillimeter(number)
kilometerToMicrometer(number)
kilometerToNanometer(number)
kilometerToFoot(number)
kilometerToInch(number)

centimeterToMeter(number)
centimeterToKilometer(number)
centimeterToMillimeter(number)
centimeterToMicrometer(number)
centimeterToNanometer(number)
centimeterToFoot(number)
centimeterToInch(number)

millimeterToMeter(number)
millimeterToKilometer(number)
millimeterToCentimeter(number)
millimeterToMicrometer(number)
millimeterToNanometer(number)
millimeterToFoot(number)
millimeterToInch(number)

micrometerToMeter(number)
micrometerToKilometer(number)
micrometerToCentimeter(number)
micrometerToMillimeter(number)
micrometerToNanometer(number)
micrometerToFoot(number)
micrometerToInch(number)

nanometerToMeter(number)
nanometerToKilometer(number)
nanometerToCentimeter(number)
nanometerToMillimeter(number)
nanometerToMicrometer(number)

footToMeter(number)
footToKilometer(number)
footToCentimeter(number)
footToMillimeter(number)
footToMicrometer(number)
footToInch(number)

inchToMeter(number)
inchToKilometer(number)
inchToCentimeter(number)
inchToMillimeter(number)
inchToMicrometer(number)
inchToFoot(number)

# for time conversation
secondToMillisecond(number)
secondToMicrosecond(number)
secondToNanosecond(number)
secondToPicosecond(number)
secondToMinute(number)
secondToHour(number)

millisecondToSecond(number)
millisecondToMicrosecond(number)
millisecondToNanosecond(number)
millisecondToPicosecond(number)
millisecondToMinute(number)
millisecondToHour(number)

minuteToSecond(number)
minuteToMillisecond(number)
minuteToMicrosecond(number)
minuteToNanosecond(number)
minuteToPicosecond(number)
minuteToHour(number)
minuteToDay(number)
minuteToWeek(number)
minuteToMonth(number)
minuteToYear(number)

hourToSecond(number)
hourToMillisecond(number)
hourToMicrosecond(number)
hourToNanosecond(number)
hourToPicosecond(number)
hourToMinute(number)
hourToDay(number)
hourToWeek(number)
hourToMonth(number)
hourToYear(number)

dayToSecond(number)
dayToMillisecond(number)
dayToMicrosecond(number)
dayToNanosecond(number)
dayToPicosecond(number)
dayToMinute(number)
dayToHour(number)
dayToWeek(number)
dayToMonth(number)
dayToYear(number)

weekToSecond(number)
weekToMillisecond(number)
weekToMicrosecond(number)
weekToNanosecond(number)
weekToPicosecond(number)
weekToMinute(number)
weekToHour(number)
weekToDay(number)
weekToMonth(number)
weekToYear(number)

monthToSecond(number)
monthToMillisecond(number)
monthToMicrosecond(number)
monthToNanosecond(number)
monthToPicosecond(number)
monthToMinute(number)
monthToHour(number)
monthToDay(number)
monthToWeek(number)
monthToYear(number)

# for temperature conversation
celsiusToKelvin(number)
celsiusToFahrenheit(number)

kelvinToCelsius(number)
kelvinToFahrenheit(number)

fahrenheitToCelsius(number)
fahrenheitToKelvin(number)

```
