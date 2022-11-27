 import { FieldValidator } from '../../src/types/types';
import * as validators from '../../src/validators/validators';

test("hasDigit with '9' is true", () => {
    expect(runValidation(validators.hasDigit, "9")).toBe(true);
})

test("hasDigit with 'a' has invalid message", () => {
    expect(runValidation(validators.hasDigit, "a")).toBe(validators.hasDigit.message);
})

function runValidation(field: FieldValidator, value: string): string | boolean {
    if (!field.pattern.test(value))
        return field.message;
    return true;
}
