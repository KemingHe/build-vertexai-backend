// step-defs/sample.steps.ts

import { binding, given, when, then } from 'cucumber-tsflow';
import * as assert from 'assert';

@binding()
class CalculatorSteps {
  private firstNum: number = 0;
  private secondNum: number = 0;
  private sum: number = 0;

  @given('numbers {int} and {int}')
  public givenTwoNumbers(a: number, b: number): void {
    this.firstNum = a;
    this.secondNum = b;
  }

  @when('we add them together')
  public whenWeAdd(): void {
    this.sum = this.firstNum + this.secondNum;
  }

  @then('we should get {int} as the sum')
  public sumShouldEqual(expectedSum: number): void {
    assert.strictEqual(this.sum, expectedSum);
  }
}

export = CalculatorSteps;

