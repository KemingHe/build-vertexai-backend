// sampleModule.test.ts
import { addNum } from 'src/sampleModule';

test('routine test for addNum in sampleModule', () => {
  expect(addNum(1, 2)).toBe(3);
});

