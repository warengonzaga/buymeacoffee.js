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
  access_token: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }

  Supporters(options: PaginationOptions = {}): Promise<SupportersResponse> {
    return this._sendRequest("supporters", options);
  }

  Supporter(id: number): Promise<Supporter> {
    return this._sendRequest(`supporters/${id}`);
  }

  Subscriptions(
    options: SubscriptionsOptions = {},
  ): Promise<SubscriptionsResponse> {
    return this._sendRequest("subscriptions", options);
  }

  Subscription(id: number): Promise<Subscription> {
    return this._sendRequest(`subscriptions/${id}`);
  }

  Extras(options: PaginationOptions = {}): Promise<ExtrasResponse> {
    return this._sendRequest("extras", options);
  }

  Extra(id: number): Promise<ExtraPurchase> {
    return this._sendRequest(`extras/${id}`);
  }

  private async _sendRequest<T>(
    path: string,
    params?: PaginationOptions | SubscriptionsOptions,
  ): Promise<T> {
    try {
      const response = await requester.get(path, {
        headers: {
          Authorization: `Bearer ${this.access_token}`,
        },
        params,
        validateStatus: (status) => {
          return status >= 200 && status < 300; // default
        },
      });
      return response.data;
    } catch (error) {
      throw normalizeBMCError(error, path);
    }
  }
}
