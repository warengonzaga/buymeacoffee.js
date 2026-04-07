import type { AxiosError } from "axios";
import axios from "axios";

export interface BMCErrorOptions {
  cause?: unknown;
  code?: string;
  endpoint: string;
  message: string;
  method: "GET";
  responseData?: unknown;
  status?: number;
}

export class BMCError extends Error {
  cause?: unknown;
  code?: string;
  endpoint: string;
  method: "GET";
  responseData?: unknown;
  status?: number;

  constructor(options: BMCErrorOptions) {
    super(options.message);
    this.name = "BMCError";
    this.cause = options.cause;
    this.code = options.code;
    this.endpoint = options.endpoint;
    this.method = options.method;
    this.responseData = options.responseData;
    this.status = options.status;
  }
}

function getErrorMessage(
  responseData: unknown,
  fallbackMessage: string,
): string {
  if (typeof responseData === "string" && responseData.length > 0) {
    return responseData;
  }

  if (
    responseData &&
    typeof responseData === "object" &&
    "message" in responseData &&
    typeof responseData.message === "string"
  ) {
    return responseData.message;
  }

  return fallbackMessage;
}

export function normalizeBMCError(error: unknown, endpoint: string): BMCError {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;

    return new BMCError({
      cause: axiosError,
      code: axiosError.code,
      endpoint,
      message: getErrorMessage(axiosError.response?.data, axiosError.message),
      method: "GET",
      responseData: axiosError.response?.data,
      status: axiosError.response?.status,
    });
  }

  if (error instanceof Error) {
    return new BMCError({
      cause: error,
      endpoint,
      message: error.message,
      method: "GET",
    });
  }

  return new BMCError({
    cause: error,
    endpoint,
    message: "Unknown request failure",
    method: "GET",
  });
}
