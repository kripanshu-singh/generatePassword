# Password Generator

A customizable password generator function written in JavaScript. It allows users to generate strong, random passwords with options for including numbers, special characters, uppercase, and lowercase letters, and even inserting custom words.

## Installation

Install the package via npm:

```bash
npm install @kripanshu-singh/generatepassword
```
```bash
yarn add @kripanshu-singh/generatepassword
```

## Usage

Import the `generatePassword` function into your project:

```javascript
import generatePassword from '@kripanshu-singh/generatepassword';
```

### Function Signature

```javascript
generatePassword({
    includeNumbers = false,
    includeSpecialChars = false,
    isUppercase = true,
    isLowercase = true,
    passwordLength = 8,
    inputWord = "",
});
```

### Parameters

- `includeNumbers` (boolean): Optional. If `true`, includes numbers (0-9) in the generated password. Defaults to `false`.
- `includeSpecialChars` (boolean): Optional. If `true`, includes special characters (e.g., `!@#$%^&*()`) in the generated password. Defaults to `false`.
- `isUppercase` (boolean): Optional. If `true`, the generated password will contain uppercase letters. Defaults to `true`.
- `isLowercase` (boolean): Optional. If `true`, the generated password will contain lowercase letters. Defaults to `true`.
- `passwordLength` (number): Optional. The total length of the password (including the custom word if provided). Defaults to `8`.
- `inputWord` (string): Optional. A custom word to be included in the password. It will be randomized and inserted into the generated password. Defaults to an empty string.

### Return Value

- Returns a string representing the generated password based on the specified options.

### Examples

#### Generate a password with default options

```javascript
const password = generatePassword({});
console.log(password); // Example: 'WqRtGhPl'
```

#### Generate a password with numbers and special characters

```javascript
const password = generatePassword({
    includeNumbers: true,
    includeSpecialChars: true,
});
console.log(password); // Example: 'wQ9!tH#1'
```

#### Generate a 12-character password with a custom word

```javascript
const password = generatePassword({
    passwordLength: 12,
    inputWord: 'secure',
});
console.log(password); // Example: 'XySeCuwRtP'
```

#### Generate a lowercase-only password

```javascript
const password = generatePassword({
    isUppercase: false,
    isLowercase: true,
});
console.log(password); // Example: 'rfpybzok'
```

## License

MIT