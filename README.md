# validateJS

A simple and lightweight JavaScript library for form validation. `validateJS`
helps you validate form inputs with custom rules and ensure that
required fields are correctly filled before submitting a form.

## Table of Contents

- [Installation](#installation)
- **Usage**
  - [Basic Validation](#basic-validation)
  - [Form Validation](#form-validation)
- **Available Validation Rules**
  - [min](#min)
  - [max](#max)
  - [email](#email)
  - [number](#number)
  - [currency](#currency)
  - [text](#text)
  - [sanitize](#sanitize)
  - [required](#required)
  - [braphone](#braphone)
  - [cep](#cep)
  - [cpf](#cpf)
  - [cnpj](#cnpj)
- [Example](#example)

## Installation

1. Download the `validateJS` library from the [repository](https://github.com/fabioaacarneiro/validateJS/blob/master/validateJS.js)
2. Include the JavaScript file in your HTML.

```html
<script src="path/to/validateJS.js"></script>
```

## Basic Validation

Make a javascript file to implement your logic or use
html of page with form.

- blur event on input with id **city**

```javascript
document.querySelector("#city").addEventListener("blur", function() {
    validate(this, {
        min: 3,
        max: 50,
        sanitize: true,
        required: true
    });
});
```

## Form validation

- formValidate() recive ids of form and submit button to analising
if submit button can be enabled or disabled

```javascript
formValidate('myForm', 'submitButton');
```

## Min

- min length

```javascript
validate(this, {
    min: 3
});
```

## Max

- max length

```javascript
validate(this, {
    max: 3
});
```

## Email

- email is valid

```javascript
validate(this, {
    email: true
});
```

## Number

- only number *[0-9]*

```javascript
validate(this, {
    number: true
});
```

## Currency

- only numbers comma(,) and dot(.)

```javascript
validate(this, {
    currency: true
})
```

## Text

- only text *[a-zA-Z]*

```javascript
validate(this, {
    text: true
});
```

## Sanitize

- sanitize removing all special characters

```javascript
validate(this, {
    sanitize: true
});
```

## Required

- required is use to show required message error

```javascript
validate(this, {
    required: true
});
```

## Braphone

- braphone check if phone number is Brazilian valid number

```javascript
validate(this, {
    braphone: true
});
```

## CEP

- cep check if CEP of Brazil country, street, or any location based on CEP is valid

```javascript
validate(this, {
    cep: true
});
```

## CPF

- CPF check if CPF of Brazil person is valid CPF
**it's not calculate CPF, just check quantity of number**

```javascript
validate(this, {
    cep: true
});
```

## CNPJ

- CNPJ check if CNPJ of Brazil legal entity or company is valid CNPJ,
**it's not calculate CNPJ, just check quantity of number**

```javascript
validate(this, {
    cnpj: true
});
```

## Example

- example of implementation in HTML file:

```html
<form id="myForm">
    <label for="city">City:</label>
    <input type="text" id="city" required>
    <div id="error-message"></div>

    <label for="email">Email:</label>
    <input type="email" id="email" required>

    <button id="submitButton" type="submit" disabled>Submit</button>
</form>

<script src="path/to/validateJS.js"></script>
<script>
    // Validate the form and toggle the submit button
    formValidate('myForm', 'submitButton');

    // Add validation to individual fields
    document.querySelector("#city").addEventListener("blur", function() {
        validate(this, {
            min: 3,
            max: 50,
            sanitize: true,
            required: true
        });
    });

    document.querySelector("#email").addEventListener("blur", function() {
        validate(this, {
            email: true,
            required: true
        });
    });
</script>
```

### Make by Fabio Carneiro
