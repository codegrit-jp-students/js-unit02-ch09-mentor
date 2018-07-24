import BaseValidator from './BaseValidator';

describe('BaseValidator', () => {
  it("should pass with valid data", () => {
    const email = "test@gmail.com"
    const validator = new BaseValidator(email, 'メールアドレス');
    return validator._cannotEmpty()
      .then((res) => {
        expect(res).toEqual(validator);
      });
  });

  it("should return error with empty val", () => {
    const email = '';
    const validator = new BaseValidator(email, 'メールアドレス');
    return validator._cannotEmpty()
      .catch((err) => {
        expect(err.success).toBeFalsy();
        expect(err.message).toBe('メールアドレスは必須です。')
      });
  })
});