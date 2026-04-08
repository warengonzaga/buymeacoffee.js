import { afterEach, expect, mock, spyOn, test } from "bun:test";

import BMC, { BMCError } from "../src/index";
import requester from "../src/requester";
import {
  extrasTemplate,
  subscriptionsTemplate,
  supportersTemplate,
} from "./api-templates";

const token = "let-me-pass";

test("BMC constructor throws on empty token", () => {
  expect(() => new BMC("")).toThrow(
    "BMC: access_token must be a non-empty string",
  );
});

test("BMC constructor throws on invalid token type", () => {
  // biome-ignore lint/suspicious/noExplicitAny: testing invalid input at runtime boundary
  expect(() => new BMC(null as any)).toThrow(
    "BMC: access_token must be a non-empty string",
  );
});

afterEach(() => {
  mock.restore();
});

test("Supporters retrieval", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: supportersTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const supportersData = await bmcInstance.Supporters();

  expect(supportersData).toStrictEqual(supportersTemplate);
  expect(getSpy).toHaveBeenCalledWith(
    "supporters",
    expect.objectContaining({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );
});

test("Supporters retrieval with page param", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: supportersTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const supportersData = await bmcInstance.Supporters({ page: 2 });

  expect(supportersData).toStrictEqual(supportersTemplate);
  expect(getSpy).toHaveBeenCalledWith(
    "supporters",
    expect.objectContaining({
      params: { page: 2 },
    }),
  );
});

test("Supporters retrieval failure", async () => {
  const error = new Error("Request failed");
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);
  const thrown = await bmcInstance.Supporters().catch((e: unknown) => e);

  expect(thrown).toBeInstanceOf(BMCError);
  expect(thrown).toMatchObject({
    endpoint: "supporters",
    message: "Request failed",
    method: "GET",
    name: "BMCError",
  });
});

test("Supporters retrieval: no data", async () => {
  const response = { error: "No supporters" };
  spyOn(requester, "get").mockResolvedValue({
    data: response,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const supportersData = await bmcInstance.Supporters();

  expect(supportersData).toStrictEqual(response);
});

test("Subscription retrieval", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: subscriptionsTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const subscriptions = await bmcInstance.Subscriptions();

  expect(subscriptions).toStrictEqual(subscriptionsTemplate);
  expect(getSpy).toHaveBeenCalledWith(
    "subscriptions",
    expect.objectContaining({
      params: {},
    }),
  );
});

test("Subscription retrieval with filters", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: subscriptionsTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const subscriptions = await bmcInstance.Subscriptions({
    page: 3,
    status: "active",
  });

  expect(subscriptions).toStrictEqual(subscriptionsTemplate);
  expect(getSpy).toHaveBeenCalledWith(
    "subscriptions",
    expect.objectContaining({
      params: { page: 3, status: "active" },
    }),
  );
});

test("Subscription retrieval failure", async () => {
  const error = {
    code: "ERR_BAD_REQUEST",
    isAxiosError: true,
    message: "Request failed",
    response: {
      data: {
        message: "Invalid token",
      },
      status: 401,
    },
  };
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);
  const thrown = await bmcInstance.Subscriptions().catch((e: unknown) => e);

  expect(thrown).toBeInstanceOf(BMCError);
  expect(thrown).toMatchObject({
    code: "ERR_BAD_REQUEST",
    endpoint: "subscriptions",
    message: "Invalid token",
    method: "GET",
    name: "BMCError",
    responseData: {
      message: "Invalid token",
    },
    status: 401,
  });
});

test("Subscription retrieval: no data", async () => {
  const response = { error: "No subscriptions" };
  spyOn(requester, "get").mockResolvedValue({
    data: response,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const subscriptions = await bmcInstance.Subscriptions();

  expect(subscriptions).toStrictEqual(response);
});

test("Extras retrieval", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: extrasTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const extras = await bmcInstance.Extras();

  expect(extras).toStrictEqual(extrasTemplate);
  expect(getSpy).toHaveBeenCalledWith(
    "extras",
    expect.objectContaining({
      params: {},
    }),
  );
});

test("Supporter lookup by id", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: supportersTemplate.data[0],
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const supporter = await bmcInstance.Supporter(
    supportersTemplate.data[0].support_id,
  );

  expect(supporter).toStrictEqual(supportersTemplate.data[0]);
  expect(getSpy).toHaveBeenCalledWith(
    `supporters/${supportersTemplate.data[0].support_id}`,
    expect.objectContaining({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );
});

test("Subscription lookup by id", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: subscriptionsTemplate.data[0],
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const subscription = await bmcInstance.Subscription(
    subscriptionsTemplate.data[0].subscription_id,
  );

  expect(subscription).toStrictEqual(subscriptionsTemplate.data[0]);
  expect(getSpy).toHaveBeenCalledWith(
    `subscriptions/${subscriptionsTemplate.data[0].subscription_id}`,
    expect.objectContaining({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );
});

test("Extra lookup by id", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: extrasTemplate.data[0],
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const extra = await bmcInstance.Extra(extrasTemplate.data[0].purchase_id);

  expect(extra).toStrictEqual(extrasTemplate.data[0]);
  expect(getSpy).toHaveBeenCalledWith(
    `extras/${extrasTemplate.data[0].purchase_id}`,
    expect.objectContaining({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );
});

test("Extras retrieval with page param", async () => {
  const getSpy = spyOn(requester, "get").mockResolvedValue({
    data: extrasTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const extras = await bmcInstance.Extras({ page: 2 });

  expect(extras).toStrictEqual(extrasTemplate);
  expect(getSpy).toHaveBeenCalledWith(
    "extras",
    expect.objectContaining({
      params: { page: 2 },
    }),
  );
});

test("Extras retrieval failure", async () => {
  const error = {
    code: "ERR_BAD_REQUEST",
    isAxiosError: true,
    message: "Request failed",
    response: {
      data: { message: "Invalid token" },
      status: 401,
    },
  };
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);
  const thrown = await bmcInstance.Extras().catch((e: unknown) => e);

  expect(thrown).toBeInstanceOf(BMCError);
  expect(thrown).toMatchObject({
    code: "ERR_BAD_REQUEST",
    endpoint: "extras",
    message: "Invalid token",
    method: "GET",
    name: "BMCError",
    status: 401,
  });
});

test("Extras retrieval: no data", async () => {
  const response = { error: "No extras" };
  spyOn(requester, "get").mockResolvedValue({
    data: response,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const extras = await bmcInstance.Extras();

  expect(extras).toStrictEqual(response);
});

test("Supporter lookup by id failure", async () => {
  const error = {
    code: "ERR_NOT_FOUND",
    isAxiosError: true,
    message: "Not Found",
    response: {
      data: { message: "Supporter not found" },
      status: 404,
    },
  };
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);
  const thrown = await bmcInstance.Supporter(9999).catch((e: unknown) => e);

  expect(thrown).toBeInstanceOf(BMCError);
  expect(thrown).toMatchObject({
    code: "ERR_NOT_FOUND",
    endpoint: "supporters/9999",
    message: "Supporter not found",
    method: "GET",
    name: "BMCError",
    status: 404,
  });
});

test("Subscription lookup by id failure", async () => {
  const error = {
    code: "ERR_NOT_FOUND",
    isAxiosError: true,
    message: "Not Found",
    response: {
      data: { message: "Subscription not found" },
      status: 404,
    },
  };
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);
  const thrown = await bmcInstance.Subscription(9999).catch((e: unknown) => e);

  expect(thrown).toBeInstanceOf(BMCError);
  expect(thrown).toMatchObject({
    code: "ERR_NOT_FOUND",
    endpoint: "subscriptions/9999",
    message: "Subscription not found",
    method: "GET",
    name: "BMCError",
    status: 404,
  });
});

test("Extra lookup by id failure", async () => {
  const error = {
    code: "ERR_NOT_FOUND",
    isAxiosError: true,
    message: "Not Found",
    response: {
      data: { message: "Extra not found" },
      status: 404,
    },
  };
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);
  const thrown = await bmcInstance.Extra(9999).catch((e: unknown) => e);

  expect(thrown).toBeInstanceOf(BMCError);
  expect(thrown).toMatchObject({
    code: "ERR_NOT_FOUND",
    endpoint: "extras/9999",
    message: "Extra not found",
    method: "GET",
    name: "BMCError",
    status: 404,
  });
});
