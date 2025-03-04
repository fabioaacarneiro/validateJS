const validate = (element, rules) => {
    for (const rule in rules) {
        switch (rule) {
            case "min":
                const minErrorLeng = document.querySelector("#min-error-len");

                if (minErrorLeng) {
                    minErrorLeng.remove();
                }

                if (element.value.length < rules[rule]) {
                    __setErrorMessage(
                        element,
                        `precisa ter acima de ${rules[rule]} letras.`,
                        "min-error-len"
                    );
                }

                break

            case "max":
                const maxErrorLen = document.querySelector("#max-error-len");

                if (maxErrorLen) {
                    maxErrorLen.remove();
                }

                if (element.value.length > rules[rule]) {
                    __setErrorMessage(
                        element,
                        `precisa ter menos de ${rules[rule]} letras.`,
                        "max-error-len"
                    );
                }
                break
            case "email":
                const emailFormatError = document.querySelector("#email-format-error");

                if (emailFormatError) {
                    emailFormatError.remove();
                }

                const emailVal = element.value;
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(emailVal)) {
                    __setErrorMessage(
                        element,
                        `Por favor, insira um endereço de e-mail válido.`,
                        "email-format-error"
                    );
                }
                break;
            case "number":
                const numberTypeError = document.querySelector("#number-type-error");

                if (numberTypeError) {
                    numberTypeError.remove();
                }

                const numberVal = element.value;
                const numberRegex = /^\d+$/;
                if (!numberRegex.test(numberVal)) {
                    __setErrorMessage(
                        element,
                        `O valor deve conter apenas números.`,
                        "number-type-error"
                    );
                }

                break;

            case "text":
                const textTypeErro = document.querySelector("#text-type-error");

                if (textTypeErro) {
                    textTypeErro.remove();
                }

                const textVal = element.value;
                const textRegex = /^[a-zA-Z]+$/;

                if (!textRegex.test(textVal)) {
                    __setErrorMessage(
                        element,
                        `O valor deve conter apenas letras.`,
                        "text-type-error"
                    );
                }

                break;

            case "sanitize":
                const sanitizedValue = __sanitizeString(element.value);
                element.value = sanitizedValue;

                break;
            case "required":
                const requiredNeededError = document.querySelector("#required-needed-error");

                if (requiredNeededError) {
                    requiredNeededError.remove();
                }

                if (element.value === "") {
                    __setErrorMessage(
                        element,
                        `O campo é obrigatório.`,
                        "required-needed-error"
                    );
                }

                break

            case "braphone":
                const brPhoneError = document.querySelector("#br-phone-error");

                if (brPhoneError) {
                    brPhoneError.remove();
                }

                const sanitizedBraPhone = __sanitizeString(element.value.replace(/\s+/g, ''));
                const braPhoneRegex = /^\d{11}$/;

                if (!braPhoneRegex.test(sanitizedBraPhone)) {
                    __setErrorMessage(
                        element,
                        "O número de telefone deve ter 11 dítigos numéricos incluindo DDD.",
                        "br-phone-error"
                    );
                }
                break;

            case "cep":
                const cepError = document.querySelector("#cep-error");

                if (cepError) {
                    cepError.remove();
                }

                const sanitizedCep = __sanitizeString(element.value.replace(/\s+/g, ''));
                const cepRegex = /^\d{8}$/;
                if (!cepRegex.test(sanitizedCep)) {
                    __setErrorMessage(
                        element,
                        "O CEP deve conter 8 dígitos numéricos.",
                        "cep-error"
                    );
                }
                break;
            case "cpf":

                const cpfError = document.querySelector("#cpf-error");

                if (cpfError) {
                    cpfError.remove();
                }

                const sanitizedCpf = __sanitizeString(element.value.replace(/\s+/g, ''));
                const cpfRegex = /^\d{11}$/;
                if (!cpfRegex.test(sanitizedCpf)) {
                    __setErrorMessage(
                        element,
                        "O CPF deve conter 11 dígitos numéricos.",
                        "cpf-error"
                    );
                }
                break;
            default:
                console.error(`validação de campo desconhecido: ${rules[rule]}`);
        }
    }
}

const __setErrorMessage = (element, message, identifier) => {
    const errorElement = document.createElement('div');
    errorElement.id = identifier;

    const small = document.createElement('small');
    small.textContent = message;
    errorElement.appendChild(small);

    element.insertAdjacentElement('afterend', errorElement);

    errorElement.style.color = 'red';
    errorElement.style.fontStyle = 'italic';
};

const __sanitizeString = (str) => {
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
};

const formValidate = (form, submitButton) => {
    const inputs = document.querySelectorAll(`#${form} input[required]`);

    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            const isValid = __inputFormValidate(form);
            console.log("isValid: " + isValid);
            __buttonToggleActive(submitButton, isValid);
        });
    });
};


const __buttonToggleActive = (submitButton, isValid) => {
    $(`#${submitButton}`).prop("disabled", !isValid);
};

const __inputFormValidate = (form) => {
    let isValid = true;
    $(`#${form} input[required], #${form} select[required], #${form} textarea[required]`).each(function () {
        if (!this.checkValidity()) {
            isValid = false;
            return false;
        }
    });
    return isValid;
};