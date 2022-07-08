import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-20 bg-violet-500 flex items-center justify-center gap-4">
            <Link href="/">
                <a className="font-medium underline underline-offset-2 hover:text-zinc-300 transition-colors text-2xl text-zinc-50 ">Dashboard</a>
            </Link>
            <Link href="/blog">
                <a className="font-medium underline underline-offset-2 hover:text-zinc-300 transition-colors text-2xl text-zinc-50 ">Blog</a>
            </Link>
            <Link href="/members/sirguilherme97">
                <a className="font-medium underline underline-offset-2 hover:text-zinc-300 transition-colors text-2xl text-zinc-50 ">Membros</a>
            </Link>
        </div>
    )
}
