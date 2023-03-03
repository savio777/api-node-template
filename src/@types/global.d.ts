import {
  ErrorBadRequest,
  ErrorForbidden,
  ErrorUnauthorized,
  ErrorInternalServerError,
} from '../utils/error';

export declare global {
  var BadRequestException: typeof ErrorBadRequest;
  var UnauthorizedException: typeof ErrorUnauthorized;
  var InternalServerErrorException: typeof ErrorInternalServerError;
  var ForbiddenException: typeof ErrorForbidden;
}
