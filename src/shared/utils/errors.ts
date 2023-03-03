export class ErrorBadRequest extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}

export class ErrorUnauthorized extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}

export class ErrorForbidden extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 403;
  }
}

export class ErrorInternalServerError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 500;
  }
}

globalThis.BadRequestException = ErrorBadRequest;
globalThis.UnauthorizedException = ErrorUnauthorized;
globalThis.ForbiddenException = ErrorForbidden;
globalThis.InternalServerErrorException = ErrorInternalServerError;
