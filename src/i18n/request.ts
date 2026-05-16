import { getRequestConfig }
from "next-intl/server";

import arMessages
from "./../messages/ar.json";

import enMessages
from "./../messages/en.json";

export default getRequestConfig(
  async ({ requestLocale }) => {

    const locale =
      (await requestLocale) || "ar";

    return {
      locale,

      messages:
        locale === "ar"
          ? arMessages
          : enMessages,
    };
  }
);