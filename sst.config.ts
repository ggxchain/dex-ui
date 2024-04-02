/// <reference path="./.sst/platform/config.d.ts" />

import {env} from "./src/env"

export default $config({
  app(input) {
    return {
      name: "rfq-ui",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("DEX", {
      domain: `dex.${env.GGX_NETWORK}.ggxchain.io`
    });
  },
});
