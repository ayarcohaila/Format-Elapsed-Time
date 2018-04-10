import React from 'react';
import ReactDOM from 'react-dom';
import formatElapsedTime from './formatElapsedTime';

test('Format should be like 00:00:00 when input is not a number', () => {
  expect(formatElapsedTime("test")).toBe("00:00:00");
});

test('02:09.10 when 129100', () => {
  expect(formatElapsedTime(129100)).toBe("02:09.10");
});

test('27:46:40.00 when 100000000', () => {
  expect(formatElapsedTime(100000000)).toBe("27:46:40.00");
});
