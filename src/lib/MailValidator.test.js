import MailValidator from './MailValidator';

describe('MailValidator', () => {
  it("should pass with valid data", () => {
    const email = "test@gmail.com";
    const validator = new MailValidator(email);
    return validator.validate()
      .then((res) => {
        expect(res).toEqual({
          success: true
        });
      });
  });

  it("should return error with empty password", () => {
    const email = '';
    const validator = new MailValidator(email);
    return validator.validate()
      .then((res) => {
        expect(res.success).toBeFalsy();
        expect(res.message).toBe('メールアドレスは必須です。')
      });
  })

  it("should return error with invalid email address", () => {
    const email = "test@g";
    const validator = new MailValidator(email);
    return validator.validate()
      .then((res) => {
        expect(res.success).toBeFalsy();
        expect(res.message).toBe('メールアドレスのフォーマットが異なります。')
      });
  })
});