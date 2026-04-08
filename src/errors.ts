import axios from "axios";

export type HttpMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

export interface BMCErrorOptions {
  cause?: unknown;
  code?: string;
  endpoint: string;
  message: string;
  method: HttpMethod;
  responseData?: unknown;
  status?: number;
}

export class BMCError extends Error {
  cause?: unknown;
  code?: string;
  endpoint: string;
  method: HttpMethod;
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

export function normalizeBMCError(
  error: unknown,
  endpoint: string,
  method: HttpMethod = "GET",
): BMCError {
  if (axios.isAxiosError(error)) {
    const derivedMethod =
      (error.config?.method?.toUpperCase() as HttpMethod | undefined) ?? method;
    return new BMCError({
      cause: error,
      code: error.code,
      endpoint,
      message: getErrorMessage(error.response?.data, error.message),
      method: derivedMethod,
      responseData: error.response?.data,
      status: error.response?.status,
    });
  }

  if (error instanceof Error) {
    return new BMCError({
      cause: error,
      endpoint,
      message: error.message,
      method,
    });
  }

  return new BMCError({
    cause: error,
    endpoint,
    message: "Unknown request failure",
    method,
  });
}
