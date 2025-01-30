import { PayBlock } from "./components/Pay";
import { VerifyBlock } from "./components/Verify";

export default function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center p-6 gap-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <VerifyBlock />
      </section>
      <section className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <PayBlock />
      </section>
    </main>
  );
}
