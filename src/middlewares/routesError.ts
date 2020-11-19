import { NextFunction, Request, Response } from 'express';
import AppError from '../error/AppError';

function routeError(
  err: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server errror',
  });
}

export default routeError;
