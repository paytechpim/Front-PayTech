export class BaseError extends Error {
  reason?: unknown;

  constructor(message: string, error?: unknown) {
    super(message);

    this.name = 'BaseError';

    if (error) {
      this.reason = error;
      this.showError(error);
    }
  }

  private showError(error: unknown) {
    console.error(error);
  }
}
