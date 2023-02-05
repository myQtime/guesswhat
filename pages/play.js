import Head from 'next/head'
import Image from 'next/image'
import name1 from '/public/name1.png'
import name2 from '/public/name2.png'
import majang from '/public/majang.jpg'
import riddle from '/api/riddle.json'
import { useState, useEffect } from 'react'

export default function Home() {
    const a = riddle
    const [now, setNow] = useState(0)
    const [largest, setLargest] = useState(0)

    const [QA, setQA] = useState('Q')

    const [notFnishAry, setNotFnishAry] = useState([])

    const [showNotFnish, setShowNotFnish] = useState('')

    useEffect(() => {
        let string = ''
        let ary = notFnishAry
        notFnishAry.forEach(function (item, i) {
            if (i === notFnishAry.length - 1) {
                string += item
            } else string += item + '、'
        })
        setShowNotFnish(string)
    }, [notFnishAry])

    const checkNow = () => {
        if (largest == 55) {
            return
        } else if (now == largest) {
            setNow(now + 1)
            setLargest(largest + 1)
        } else if (now !== largest) {
            setNow(largest)
        }
    }

    const checkNotFnishAry = () => {
        // setNotFnishAry([...notFnishAry, a[now].number])
        let ary = [...notFnishAry, a[now].number]
        let setAry = [...new Set(ary)]
        setAry.sort(function (a, b) {
            return a - b // a - b > 0
        })
        setNotFnishAry([...setAry])
    }

    const changeAry = () => {
        let ary = notFnishAry
        ary.forEach(function (item, i) {
            if (item === a[now].number) {
                ary.splice(i, 1)
            }
        })
        setNotFnishAry([...ary])
    }

    const jumpTO = () => {
        const jumpInput = document.querySelector('#jumpInput')
        let ary = notFnishAry
        ary.forEach(function (item, i) {
            if (item == jumpInput.value) {
                setNow(jumpInput.value - 1)
            }
        })
        jumpInput.value = ''
    }
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
                    <p class="fw-bold text-center my-4  ">第{a[now].number}題</p>
                    <div
                        className="riddleBox d-flex justify-content-center align-items-center position-relative"
                        style={{ height: '55%' }}
                    >
                        {!a[now].question && QA == 'Q' ? (
                            <div className="majang h-100">
                                <Image src={majang} fill />
                            </div>
                        ) : (
                            <p class="QA fw-bold text-center pt-3">
                                {' '}
                                {QA == 'Q' ? a[now].question : ''}
                                {QA == 'A' ? a[now].answer : ''}
                            </p>
                        )}

                        {/* <p class="QA fw-bold text-center pt-3">
                            {QA == 'Q' ? (
                                a[now].question ? (
                                    `${a[now].question}`
                                ) : (
                                    <div className="majang">
                                        <Image src={majang} fill />
                                    </div>
                                )
                            ) : (
                                ''
                            )}
                            {QA == 'A' ? `${a[now].answer}` : ''}
                        </p> */}
                    </div>

                    <p class="fw-bold text-end me-5 mb-4 pe-5" style={{ height: '10%' }}>
                        ({a[now].hint})
                    </p>
                </div>

                <div className="btnGroup">
                    {QA == 'Q' ? (
                        <button
                            type="button"
                            className="btn btn-danger rounded-pill"
                            onClick={(e) => {
                                setQA('A'), changeAry()
                            }}
                        >
                            {a[now].number === 56 ? 'END' : ' 看答案'}
                        </button>
                    ) : (
                        ''
                    )}

                    {QA == 'Q' ? (
                        <button
                            type="button"
                            className="btn btn-danger rounded-pill"
                            onClick={(e) => {
                                checkNow(), checkNotFnishAry()
                            }}
                        >
                            再想想，下一題
                        </button>
                    ) : (
                        ''
                    )}
                    {QA == 'A' ? (
                        <button
                            type="button"
                            className="btn btn-danger rounded-pill"
                            onClick={(e) => {
                                checkNow(), setQA('Q')
                            }}
                        >
                            {a[now].number === 56 ? 'END' : '繼續挑戰下一題'}
                        </button>
                    ) : (
                        ''
                    )}
                </div>
                <div className="inputGroup ">
                    <p className="unFnishText">未答題題目</p>
                    <div className="input-group">
                        <input type="text" class="form-control" id="jumpInput" placeholder="輸入題號" />
                        <button
                            class="btn btn-danger"
                            type="button"
                            id="button-addon2"
                            onClick={() => {
                                jumpTO(), setQA('Q')
                            }}
                        >
                            GO!
                        </button>
                    </div>
                    <div className="unFnish mt-1"> {showNotFnish}</div>
                </div>
            </div>
        </div>
    )
}
