import Head from "next/head";
import HeadMenu from "../components/headMenu/headMenu";
import Presence from "../components/presence/presence";

export default function Login() {

    return (
        <>
            <Head>
                <title>WeBoard</title>
            </Head>
            <HeadMenu/>
            <main>
                <Presence/>
            </main>
        </>
    )
}
