import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Header from "../../componets/Header"

export default function Member({ avatar_url, name, bio, company, followers, following }) {
    return (
        <div>
            <Header />
            <div className="flex flex-col mt-12 justify-center items-center gap-4 p-4">
                <div className="flex gap-4 items-center ">
                    <Image
                        src={avatar_url}
                        alt={name}
                        width={96}
                        height={96}
                        className="rounded-full"
                    />
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col justify-center items-start">
                            <p>{name}</p>
                            <p>{bio}</p>
                            <p>{company}</p>
                        </div>
                        <div className="flex gap-4 items-center ">
                            <p>Seguidores: {followers}</p>
                            <p>Seguindo: {following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/members')
    const data = await response.json();

    const paths = data.map(member => {
        return { params: { login: member.login } }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { login } = context.params
    const response = await fetch(`https://api.github.com/users/${login}`)
    const data = await response.json();
    return {
        props: { user: data },
        revalidate: 10
    }
}
