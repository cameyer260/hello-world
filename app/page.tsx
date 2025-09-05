import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-3xl p-6 gap-4">
      <div className="flex justify-center">
        <h1>Hello World!</h1>
      </div>
      <div className="flex text-center flex-col gap-2">
        <h1>This is my new VPS that I am setting up!</h1>
        <h1>Check out some of my other websites!</h1>
        <Link href="https://www.docuquery.online/">
          <u>docuquery.online</u>
        </Link>
        <Link href="https://www.christophermeyer.dev/">
          <u>christophermeyer.dev</u>
        </Link>
        <Link href="https://www.playskillsphere.com/">
          <u>playskillsphere.com</u>
        </Link>
      </div>
    </div>
  );
}
