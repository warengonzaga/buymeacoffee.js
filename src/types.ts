export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface Supporter {
  support_id: number;
  support_note: string | null;
  support_coffees: number;
  transaction_id: string;
  support_visibility: number;
  support_created_on: string;
  support_updated_on: string;
  transfer_id: string | null;
  supporter_name: string | null;
  support_coffee_price: string;
  support_email: string;
  is_refunded: boolean | number | null;
  support_currency: string;
  support_note_pinned: number;
  referer: string | null;
  country: string | null;
  payer_email: string;
  payment_platform: string;
  payer_name: string;
}

export interface Subscription {
  subscription_id: number;
  subscription_cancelled_on: string | null;
  subscription_created_on: string;
  subscription_updated_on: string;
  subscription_current_period_start: string;
  subscription_current_period_end: string;
  subscription_coffee_price: string;
  subscription_coffee_num: number;
  subscription_is_cancelled: boolean | number | null;
  subscription_is_cancelled_at_period_end: boolean | number | null;
  subscription_currency: string;
  subscription_message: string | null;
  message_visibility: number;
  subscription_duration_type: string;
  referer: string | null;
  country: string | null;
  transaction_id: string;
  payer_email: string;
  payer_name: string;
}

export interface ExtraReward {
  reward_id: number;
  reward_title: string;
  reward_description: string;
  reward_confirmation_message: string;
  reward_question: string;
  reward_used: number;
  reward_created_on: string;
  reward_updated_on: string;
  reward_deleted_on: string | null;
  reward_is_active: number;
  reward_image: string;
  reward_slots: number | null;
  reward_coffee_price: string;
  reward_order: number;
}

export interface ExtraPurchase {
  purchase_id: number;
  purchased_on: string;
  purchase_updated_on: string;
  purchase_is_revoked: boolean | number;
  purchase_amount: string;
  purchase_currency: string;
  purchase_question: string | null;
  payer_email: string;
  payer_name: string;
  total_paid_amount?: string;
  extra: ExtraReward;
}

export interface PaginationOptions {
  page?: number;
}

export type SubscriptionStatus = "active" | "inactive" | "all";

export interface SubscriptionsOptions extends PaginationOptions {
  status?: SubscriptionStatus;
}

export type SupportersResponse = PaginatedResponse<Supporter>;
export type SubscriptionsResponse = PaginatedResponse<Subscription>;
export type ExtrasResponse = PaginatedResponse<ExtraPurchase>;
