import Head from 'next/head'
import HeadMenu from "../components/headMenu/headMenu";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bananenbrot</title>
            </Head>
            <HeadMenu/>
            <main className={"font-bold"}>
                <div>Hallo dies ist die Homepage</div>
            </main>
        </>
    )
}
