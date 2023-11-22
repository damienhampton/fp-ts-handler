import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import * as f from "fp-ts/function";
import * as A from "fp-ts/Apply";
import * as E from "fp-ts/Either";
import {
  ArticleContainer,
  ArticleData,
  ArticleParams,
  TransformedArticle,
} from "../../models/models";
import { DataError } from "../../models/errors";
import { getFooter, getHeader } from "../../common/common";

export const articleHandler = (
  params: ArticleParams
): TE.TaskEither<DataError, TransformedArticle> =>
  f.pipe(params, getAllArticleData, TE.map(transformData));

const getArticleData =
  (id: number): T.Task<ArticleData> =>
  () =>
    new Promise((r) => setTimeout(() => r({ id, url: "blah blah" }), 2000));

const getAllArticleData = (
  params: ArticleParams
): TE.TaskEither<DataError, ArticleContainer> =>
  f.pipe(
    A.sequenceT(T.task)(
      getHeader(params.context),
      getFooter(params.context),
      getArticleData(params.id)
    ),
    T.map(
      ([header, footer, article]): ArticleContainer => ({
        header,
        footer,
        article,
      })
    ),
    T.map((a: ArticleContainer) =>
      a.article ? E.right(a) : E.left(new DataError("No article"))
    )
  );

const transformData = ({
  header,
  footer,
  article,
}: ArticleContainer): TransformedArticle => {
  return {
    ...header,
    ...footer,
    ...article,
  };
};
