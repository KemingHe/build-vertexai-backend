"use strict";
// step-defs/sample.steps.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const cucumber_tsflow_1 = require("cucumber-tsflow");
const assert = __importStar(require("assert"));
let CalculatorSteps = class CalculatorSteps {
    constructor() {
        this.firstNum = 0;
        this.secondNum = 0;
        this.sum = 0;
    }
    givenTwoNumbers(a, b) {
        this.firstNum = a;
        this.secondNum = b;
    }
    whenWeAdd() {
        this.sum = this.firstNum + this.secondNum;
    }
    sumShouldEqual(expectedSum) {
        assert.strictEqual(this.sum, expectedSum);
    }
};
__decorate([
    (0, cucumber_tsflow_1.given)('numbers {int} and {int}')
], CalculatorSteps.prototype, "givenTwoNumbers", null);
__decorate([
    (0, cucumber_tsflow_1.when)('we add them together')
], CalculatorSteps.prototype, "whenWeAdd", null);
__decorate([
    (0, cucumber_tsflow_1.then)('we should get {int} as the sum')
], CalculatorSteps.prototype, "sumShouldEqual", null);
CalculatorSteps = __decorate([
    (0, cucumber_tsflow_1.binding)()
], CalculatorSteps);
module.exports = CalculatorSteps;
