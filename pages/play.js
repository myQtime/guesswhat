import Head from 'next/head'
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
                    <div className="position-relative">
                        <Image src={name1} className="name1" />
                        <Image src={name2} className="name2" />
                    </div>
                </div>
                <div className="textBox d-flex-column justify-content-center mt-4">
                    <p class="fw-bold text-center my-4  ">第{a[now].number}題</p>
                    <div
                        className="riddleBox d-flex justify-content-center align-items-center"
                        style={{ height: '55%' }}
                    >
                        <p class="fw-bold text-center pt-3">
                            {QA == 'Q' ? `${a[now].question}` : ''}
                            {QA == 'A' ? `${a[now].answer}` : ''}
                        </p>
                    </div>

                    <p class="fw-bold text-end me-5 mb-4 pe-5" style={{ height: '10%' }}>
                        ({a[now].hint})
                    </p>
                </div>

                <div className="btnGroup">
                    <button
                        type="button"
                        className="btn btn-danger rounded-pill"
                        onClick={(e) => {
                            setQA('A')
                        }}
                    >
                        看答案
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger rounded-pill"
                        onClick={(e) => {
                            setNow(now + 1), setQA('Q')
                        }}
                    >
                        再想想，先下一題
                    </button>
                </div>
                <div className="inputGroup input-group">
                    <input type="text" class="form-control" placeholder="輸入題號" />
                    <button class="btn btn-danger" type="button" id="button-addon2">
                        GO!
                    </button>
                </div>
            </div>
        </div>
    )
}
