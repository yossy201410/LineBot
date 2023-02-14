import { assert } from "chai";
import { describe, it } from "mocha";
import LineAccsessToken from "../../src/entity/line_accsess_token";

import * as dotenv from "dotenv";
dotenv.config();

describe("line_access_token", () => {
    it("env", () => {
        assert.isTrue(process.env.CHANNEL_ID !== undefined);
        assert.isTrue(process.env.CHANNEL_SECRET !== undefined);
    })
    it("renew", async () => {
        const l = new LineAccsessToken();
        assert.isNull(l.get());
        assert.isNotNull(await l.renew);
        assert.isNotNull(l.renew());
    })
});