export class AppError extends Error {
  code?: string;
  status?: number;

  constructor(message: string, code?: string, status?: number) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

// Example Usage:
// throw new AppError("Unauthorized", "AUTH_401", 401)
