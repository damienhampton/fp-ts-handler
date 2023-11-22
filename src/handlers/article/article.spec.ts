import { expect } from "chai";
import * as E from "fp-ts/Either";
import { articleHandler } from "./article";

describe("article", () => {
  it("should get an article", async () => {
    expect(
      await articleHandler({ id: 123, context: "bigsite" })()
    ).to.deep.equal(
      E.right({
        siteName: "A Big Site",
        copyright: "Copyright A Big Site",
        id: 123,
        url: "blah blah",
      })
    );
  });
});
