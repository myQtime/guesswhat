import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import name1 from '/public/name1.png'
import name2 from '/public/name2.png'
import title from '/public/title.png'

export default function Home() {
    return (
        <div>
            <Head>
                <title>正發猜燈謎</title>
                <link rel="icon" href="/icon.png" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <div className="bg">
                <div className="name">
                    <div className="position-relative h-100">
                        <Image src={name1} className="name1" />
                        <Image src={name2} className="name2" />
                        <Image src={title} className="title" object-fit="contain" />
                    </div>
                </div>
                <Link href="/intro">
                    <button type="button" className="btn btn-danger rounded-pill start">
                        Start
                    </button>
                </Link>
            </div>
        </div>
    )
}
