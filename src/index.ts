import { normalizeBMCError } from "./errors";
import requester from "./requester";
import type {
  ExtraPurchase,
  ExtrasResponse,
  PaginationOptions,
  Subscription,
  SubscriptionsOptions,
  SubscriptionsResponse,
  Supporter,
  SupportersResponse,
} from "./types";

export type { HttpMethod } from "./errors";
export { BMCError } from "./errors";
export type {
  ExtraPurchase,
  ExtraReward,
  ExtrasResponse,
  PaginatedResponse,
  PaginationOptions,
  Subscription,
  SubscriptionStatus,
  SubscriptionsOptions,
  SubscriptionsResponse,
  Supporter,
  SupportersResponse,
} from "./types";

export default class BMC {
  readonly access_token: string;

  constructor(access_token: string) {
    if (!access_token || typeof access_token !== "string") {
      throw new Error("BMC: access_token must be a non-empty string");
    }
    this.access_token = access_token;
  }

  Supporters(options: PaginationOptions = {}): Promise<SupportersResponse> {
    return this.sendRequest("supporters", options);
  }

  Supporter(id: number): Promise<Supporter> {
    return this.sendRequest(`supporters/${id}`);
  }

  Subscriptions(
    options: SubscriptionsOptions = {},
  ): Promise<SubscriptionsResponse> {
    return this.sendRequest("subscriptions", options);
  }

  Subscription(id: number): Promise<Subscription> {
    return this.sendRequest(`subscriptions/${id}`);
  }

  Extras(options: PaginationOptions = {}): Promise<ExtrasResponse> {
    return this.sendRequest("extras", options);
  }

  Extra(id: number): Promise<ExtraPurchase> {
    return this.sendRequest(`extras/${id}`);
  }

  private async sendRequest<T>(
    path: string,
    params?: PaginationOptions | SubscriptionsOptions,
  ): Promise<T> {
    try {
      const response = await requester.get(path, {
        headers: {
          Authorization: `Bearer ${this.access_token}`,
        },
        params,
      });
      return response.data;
    } catch (error) {
      throw normalizeBMCError(error, path);
    }
  }
}
