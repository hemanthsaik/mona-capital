import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
