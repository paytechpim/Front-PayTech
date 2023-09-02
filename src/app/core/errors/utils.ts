// import { defaultFeedback } from './modal or toast';

import { BaseError } from './base.error';

export function extractErrorMessage(
  err: Error,
  defaultMessage = 'Por favor, tente novamente.'
) {
  let msg = err.message;

  if (!(err instanceof BaseError)) {
    console.error(err);
    msg = defaultMessage;
  }

  return msg;
}

// TODO: give error feedback to toast or alert!!
// export async function errorFeedback(
//   header: string,
//   exception: Error,
//   defaultMessage = 'Por favor, tente novamente.'
// ) {
//   const message = extractErrorMessage(exception, defaultMessage);

//   return defaultFeedback(header, message);
// };
