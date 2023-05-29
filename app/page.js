import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 justify-center items-center">
      <h1 className="font-bold text-2xl">Welcome to Muon Capital</h1>
      <p>Discover new investment opportunities.</p>
      <Link
        href="/dashboard"
        className="bg-black px-3 py-2 rounded-xl text-white"
      >
        Dashboard
      </Link>
    </main>
  );
}
