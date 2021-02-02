import Head from "next/head";

export function Layout({children}){
    return (
        <main className="layout">
            <Head>
                <title>Next Js | FullStack CRUD</title>
            </Head>
            {children}
        </main>
    );
}