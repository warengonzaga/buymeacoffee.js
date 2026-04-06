import { afterEach, expect, mock, spyOn, test } from "bun:test";

import BMC from "../src/index";
import requester from "../src/requester";
import {
  extrasTemplate,
  subscriptionsTemplate,
  supportersTemplate,
} from "./api-templates";

const token = "let-me-pass";

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

test("Supporters retrieval failure", async () => {
  const error = new Error("Request failed");
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);

  await expect(bmcInstance.Supporters()).rejects.toThrow("Request failed");
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
  spyOn(requester, "get").mockResolvedValue({
    data: subscriptionsTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const subscriptions = await bmcInstance.Subscriptions();

  expect(subscriptions).toStrictEqual(subscriptionsTemplate);
});

test("Subscription retrieval failure", async () => {
  const error = new Error("Request failed");
  spyOn(requester, "get").mockRejectedValue(error);

  const bmcInstance = new BMC(token);

  await expect(bmcInstance.Subscriptions()).rejects.toThrow("Request failed");
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
  spyOn(requester, "get").mockResolvedValue({
    data: extrasTemplate,
  } as Awaited<ReturnType<typeof requester.get>>);

  const bmcInstance = new BMC(token);
  const extras = await bmcInstance.Extras();

  expect(extras).toStrictEqual(extrasTemplate);
});
