export type Footer = {
  copyright: string;
};
export type Header = {
  siteName: string;
};

export type ArticleData = {
  id: number;
  url: string;
};

export type ArticleContainer = {
  header: Header;
  footer: Footer;
  article: ArticleData;
};

export type ArticleParams = {
  id: number;
  context: string;
};

export type TransformedArticle = {
  siteName: string;
  copyright: string;
  id: number;
  url: string;
};
