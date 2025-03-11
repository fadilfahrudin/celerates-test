import PDFPreview from "@/src/components/PDFPreview";
import UserForm from "@/src/components/UserForm";
import UserTable from "@/src/components/UserTable";
import { ModalProvider } from "@/src/context/ModalContext";
import { UserProvider } from "@/src/context/UserContext";
import { Suspense } from "react";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const users = await getData();
  return (
    <UserProvider initialUsers={users}>
      <ModalProvider>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-center text-2xl"><b>Celerates</b><br />Frontend Engineer Technical Assessment</h1>
          <Suspense fallback={<div className="text-center">Load data...</div>}>
            <UserTable />
          </Suspense>
        </div>
        <UserForm />
        <PDFPreview />
      </ModalProvider>
    </UserProvider>
  );
}
