import { assert } from "chai";
import { describe, it } from "mocha";
import LineAccsessToken from "../../src/entity/line_accsess_token";

describe("line_access_token", () => {
    it("renew", () => {
        const l = new LineAccsessToken();
        assert.isNull(l.get())
        assert.isNotNull(l.renew());
    })
});