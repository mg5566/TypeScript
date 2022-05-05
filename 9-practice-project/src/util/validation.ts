namespace App {
  // validation
  export interface Validatalbe {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export const validate = (validatalbeInput: Validatalbe): boolean => {
    let isValid = true;

    if (validatalbeInput.required) {
      isValid =
        isValid && validatalbeInput.value.toString().trim().length !== 0;
    }
    if (
      validatalbeInput.minLength != null &&
      typeof validatalbeInput.value === "string"
    ) {
      isValid =
        isValid && validatalbeInput.value.length >= validatalbeInput.minLength;
    }
    if (
      validatalbeInput.maxLength != null &&
      typeof validatalbeInput.value === "string"
    ) {
      isValid =
        isValid && validatalbeInput.value.length <= validatalbeInput.maxLength;
    }
    if (
      validatalbeInput.min != null &&
      typeof validatalbeInput.value === "number"
    ) {
      isValid = isValid && validatalbeInput.value >= validatalbeInput.min;
    }
    if (
      validatalbeInput.max != null &&
      typeof validatalbeInput.value === "number"
    ) {
      isValid = isValid && validatalbeInput.value <= validatalbeInput.max;
    }
    return isValid;
  };
}
