/// <reference path="./.sst/platform/config.d.ts" />

import {env} from "./src/env";


const getDomain = () => {
  if (env.NODE_ENV === 'production') {
    return `dex.${env.NEXT_PUBLIC_GGX_NETWORK}.ggxchain.io`;
  }

  throw new Error(`Unsupported NODE_ENV: ${env.NODE_ENV}`)
}

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
      domain: getDomain()
    });
  },
});
