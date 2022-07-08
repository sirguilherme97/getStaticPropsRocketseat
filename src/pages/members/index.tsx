import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../componets/Header";

export default function Members({ user }) {
    return (
        <div>
            <Header />
            <div className="px-12 py-6 flex flex-col gap-4">
                <h1 className="font-bold text-violet-500 text-2xl">Alguns Membros da Rocketseat</h1>
                {user.map(user => {
                    return (
                        <a
                            className="px-4 hover:underline underline-offset-2 hover:text-violet-500 transition-colors"
                            key={user.login}
                            href={`/members/${user.login}`}>{user.login}</a>
                    )
                })}
            </div>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/members')
    const data = await response.json()

    return {
        props: { user: data },
        revalidate: 60
    }
}
