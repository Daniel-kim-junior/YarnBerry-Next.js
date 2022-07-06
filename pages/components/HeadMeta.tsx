import Head from "next/head";

interface MetaType {
  title: string;
  description: string;
  url: string;
  image: string;
}


export default function HeadMeta({ title, description, url, image }: MetaType) {
  return (
    <Head>
      <title>
        포트폴리오-{title}
      </title>
      <meta name="description" content={description || "UI/UX를 중시하는 프론트엔드 개발자"}/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "포트폴리오"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="김민성" />
    </Head>
  )
}