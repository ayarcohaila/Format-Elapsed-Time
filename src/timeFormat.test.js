import React from 'react';
import ReactDOM from 'react-dom';
import formatElapsedTime from './timeFormat';

let temp = {value: 0};

test('Format should be like 00:00:00 when input is not a number', () => {
  expect(formatElapsedTime("test")).toBe("00:00:00");
});

test('02:09.10 when 129100', () => {

  temp.value = 129100;
  expect(formatElapsedTime(temp)).toBe("02:09.10");
});

test('27:46:40.00 when 100000000', () => {
  temp.value = 100000000;
  expect(formatElapsedTime(temp)).toBe("27:46:40.00");
});
