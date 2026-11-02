import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h1>Welcome Back</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Product</Link>
      <Link href="/article/breaking-1234?lang=en">Engish</Link>
      <Link href="/article/breaking-1234?lang=np">Nepali</Link>



    </div>
  );
}
