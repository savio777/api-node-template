import { NextFunction, Request, Response } from 'express';
import server from '../../server';

type TypeMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

interface IOptionsMethod {
  status?: number;
}

let routes: Array<{
  method: TypeMethod;
  handle: any; //(req: Request, res: Response, next: NextFunction) => void;
  path?: string;
  middlewares: Array<(req: Request, res: Response, next: NextFunction) => void>;
}> = [];

let actualMiddlewares: Array<
  (req: Request, res: Response, next: NextFunction) => void
> = [];

export function Controller(pathMain?: string): ClassDecorator {
  routes.forEach(({ path, method, handle, middlewares }) => {
    const route = `/api/${pathMain ?? ''}/${path ?? ''}`
      .replace(new RegExp('///', 'g'), '/')
      .replace(new RegExp('//', 'g'), '/');
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line no-console
      console.log(
        '\x1b[32m',
        '[server]',
        method.toUpperCase(),
        route,
        '\x1b[0m',
      );
    }
    if (middlewares.length) {
      server.app[method](route, [...middlewares, handle]);
    } else {
      server.app[method](route, handle);
    }
  });
  routes = [];
  return () => {};
}

export function Middleware(
  fnMiddle: (req: Request, res: Response, next: NextFunction) => void,
): MethodDecorator {
  return function () {
    actualMiddlewares.unshift(fnMiddle);
  };
}

export function Get(
  path?: string | IOptionsMethod,
  options?: IOptionsMethod,
): MethodDecorator {
  if (typeof path === 'object') {
    return HandleRoute('get', undefined, path);
  } else {
    return HandleRoute('get', path, options);
  }
}

export function Post(
  path?: string | IOptionsMethod,
  options?: IOptionsMethod,
): MethodDecorator {
  if (typeof path === 'object') {
    return HandleRoute('post', undefined, path);
  } else {
    return HandleRoute('post', path, options);
  }
}

export function Put(
  path?: string | IOptionsMethod,
  options?: IOptionsMethod,
): MethodDecorator {
  if (typeof path === 'object') {
    return HandleRoute('put', undefined, path);
  } else {
    return HandleRoute('put', path, options);
  }
}

export function Delete(
  path?: string | IOptionsMethod,
  options?: IOptionsMethod,
): MethodDecorator {
  if (typeof path === 'object') {
    return HandleRoute('delete', undefined, path);
  } else {
    return HandleRoute('delete', path, options);
  }
}

export function Patch(
  path?: string | IOptionsMethod,
  options?: IOptionsMethod,
): MethodDecorator {
  if (typeof path === 'object') {
    return HandleRoute('patch', undefined, path);
  } else {
    return HandleRoute('patch', path, options);
  }
}

export function HandleRoute(
  method: TypeMethod,
  path?: string,
  options?: IOptionsMethod,
): MethodDecorator {
  return function (
    _target: unknown,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const handle = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await descriptor.value(req, res, next);
        const statusResponse = options?.status ?? 200;

        return res.status(statusResponse).json(response);
      } catch (error) {
        let statusError = 500;
        let responseError: any = {
          status: 500,
          message: 'internal server error',
          messageError: error.message,
        };

        if (error.status) {
          statusError = error.status;
          responseError = { status: error.status, message: error.message };
        } else if (error.name === 'ValidationError') {
          statusError = 400;
          responseError = {
            status: 400,
            message: error.message,
            errors: error.errors,
          };
        } else if (error.response) {
          statusError = error.response.status;
          responseError = {
            status: error.response.status,
            message: error.message,
            data: error.response.data,
          };
        } else {
          // eslint-disable-next-line no-console
          console.error(statusError, error);
        }

        return res.status(statusError).json(responseError);
      }
    };
    routes.push({
      method,
      path,
      handle,
      middlewares: actualMiddlewares,
    });
    actualMiddlewares = [];
  };
}
