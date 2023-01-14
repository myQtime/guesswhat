import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import name1 from '/public/name1.png'
import name2 from '/public/name2.png'
import riddle from '/api/riddle.json'
import { useState } from 'react'

export default function Home() {
    const a = riddle
    const [now, setNow] = useState(0)
    const [QA, setQA] = useState('Q')

    return (
        <div>
            <Head>
                <title>正發猜燈謎</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <div className="bg d-flex justify-content-center">
                <div className="playname">
                    <div className="position-relative h-100">
                        <Image src={name1} className="name1" />
                        <Image src={name2} className="name2" />
                    </div>
                </div>
                <div className="textBox d-flex-column justify-content-center mt-4">
                    <p class="fw-bold text-center my-4  ">說明</p>
                    <div className="mt-5 d-flex justify-content-center align-items-center" style={{ height: '55%' }}>
                        <p class="introtext fw-bold  pt-3">
                            「射燈謎」這種名稱說法是起源於古代的一種「射覆」的猜物遊戲，「射」是猜測，「覆」是覆蓋，即謎底被覆蓋，源於漢代的猜測遊戲。
                        </p>
                    </div>
                </div>

                <Link href="/intro1">
                    <button type="button" className="btn btn-danger rounded-pill start">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}
