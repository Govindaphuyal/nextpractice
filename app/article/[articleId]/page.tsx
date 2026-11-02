
import Link from "next/link";
import { use , Suspense} from "react";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "np" }>;
};

function ArticleContent({ params, searchParams }: Props) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
        <h1>News article { articleId }</h1>
        <p>reading langage {lang}</p>
      <div>
<Link href={`/article/${articleId}?lang=en`}>Engish</Link>
      <Link href={`/article/${articleId}?lang=es`}>Spanish</Link> 
      <Link href={`/article/${articleId}?lang=np`}>Nepali</Link> 
          </div>
    </div>
  )
}
export default function NewsArticle(props: Props) {
  return (
    <Suspense fallback={<p>Loading article...</p>}>
      <ArticleContent {...props} />
    </Suspense>
  );
}
