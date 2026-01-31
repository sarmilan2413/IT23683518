# Tamil Transliteration Test Suite

This project is a Playwright-based automated test suite for validating Tamil transliteration conversion in the Changathi Tamil Translator web application.

Application Under Test: https://tamil.changathi.com

---

## Project Overview

The Tamil Transliteration Test Suite automates testing for converting Romanized Tamil (Singlish/Tanglish) into proper Tamil script. The suite validates:

- Correctness of output
- Handling of slang, typos, mixed English, numbers, and formatting
- Realistic typing behavior
- Detailed pass/fail reporting

This suite is suitable for QA assignments, academic projects, and real-world automation testing.

---

## Key Features

- Positive functional tests for clean inputs
- Negative / robustness tests for messy or unusual inputs
- Character-by-character typing simulation
- Automatic retry for temporary failures
- Markdown and HTML test reports
- Robust handling of dynamic conversion

---

## Project Structure

│
├─ tests/ # Playwright test scripts
│ ├─ positive-tests.spec.ts
│ └─ negative-tests.spec.ts
│
├─ data/ # Input and expected output files
│ ├─ positive-cases.json
│ └─ negative-cases.json
│
├─ reports/ # Test reports
│ ├─ html-report/
│ └─ markdown-report.md
│
├─ utils/ # Helper functions
│
├─ playwright.config.ts # Playwright configuration
│
└─ README.md # Project documentation



## Playwright Test Project

### Requirements
- Node.js installed

### Install
npm install

### Run Tests
npx playwright test

### Website Tested
https://tamil.changathi.com/
