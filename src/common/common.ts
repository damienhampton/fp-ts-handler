import * as T from "fp-ts/Task";
import { Footer, Header } from "../models/models";

export const getHeader =
  (context: string): T.Task<Header> =>
  () =>
    new Promise((r) => setTimeout(() => r({ siteName: "A Big Site" }), 1000));

export const getFooter =
  (context: string): T.Task<Footer> =>
  () =>
    new Promise((r) =>
      setTimeout(() => r({ copyright: "Copyright A Big Site" }), 2000)
    );
