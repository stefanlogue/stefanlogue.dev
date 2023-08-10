import { SSTConfig } from "sst";
import { Config, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "stefanloguedev",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const DEVTO_APIKEY = new Config.Secret(stack, "DEVTO_APIKEY")
      const site = new NextjsSite(stack, "site", {
        bind: [DEVTO_APIKEY]
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    }, { stackName: `${app.name}-${app.stage}` });
  },
} satisfies SSTConfig;
