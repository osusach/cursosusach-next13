import Majors from "@/components/Majors";

export default function Home() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      {/* @ts-expect-error Server Component */}
      <Majors />
    </main>
  );
}
