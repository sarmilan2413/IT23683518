# Tamil Transliteration Test Suite

This project is an automated end-to-end test suite created to validate Tamil transliteration functionality on the Changathi Tamil Translator website.

The automation verifies whether Romanized (English typed) Tamil words and sentences are correctly converted into proper Tamil script.

---

## Project Overview

This automation project is developed using Playwright with JavaScript.  
It simulates real user behavior such as typing text character by character and validates the converted Tamil output.

The project is mainly intended for:
- QA automation practice
- Internship / academic assignments
- Functional testing of language translation tools

Application under test:  
https://tamil.changathi.com

---

## What This Project Tests

- Romanized Tamil input (example: vanakkam, naan, nee)
- Correct Tamil script output (example: வணக்கம், நான், நீ)
- Conversion accuracy
- Application response behavior
- Stability of conversion results

---

## Key Features

- 24 positive functional test cases
- 10 positive functional test cases
- Realistic typing simulation (character-by-character)
- Automatic retry on test failure
- Custom Markdown test report generation
- Playwright HTML report support
- Input, expected output, and actual output captured
- Simple and easy-to-understand test structure

---

## Playwright Test Project

### Requirements
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
```bash
npm install

https://github.com/sarmilan2413/IT23683518.git
