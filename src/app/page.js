import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full min-h-screen">
                <section className="flex flex-col justify-center items-center w-full h-screen bg-white">
                    <h1 className="text-8xl font-bold">Hero</h1>
                </section>
                <section className="flex flex-col justify-center items-center w-full h-screen bg-black">
                    <h2 className="text-4xl ">SEction 1</h2>
                </section>
                <section className="flex flex-col justify-center items-center w-full h-screen bg-indigo-600">
                    <h2 className="text-4xl ">SEction 2</h2>
                </section>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-slate-600 w-full h-24">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
