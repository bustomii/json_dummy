import express from 'express'
import cors from 'cors'

const app = express()
const data = [
    {
        page : '/kuis/welcome',
        submit : false,
        title : "WELCOME",
        className : 'text__header',
        description : 'Terima kasih sudah menjadikan A-SHOP sebagai bagian dari trading journey kamu. Dalam skill test ini, A-SHOP akan memberikan beberapa pertanyaan singkat tentang pemahaman tradingmu. Tenang, kamu bisa menyelesaikan skill test ini hanya dalam beberapa menit kok!',
        buttonClass : 'button__start',
        button_title : "Let's Start",
        type : 'welcome',
        content_value : []
    },
    {
        page : '/kuis/1',
        submit : false,
        title : "Hello!",
        className : "text__yellow",
        description : '',
        buttonClass : 'button__start',
        button_title : "Lanjut!",
        type : 'input',
        content_value : [
            {
                title : 'Tulis namamu di sini!',
                name : 'name',
                value : null
            }
        ]
    },
    {
        page : '/kuis/2',
        submit : false,
        title : "Berapa usiamu tahun ini?",
        className : "text__question",
        description : '',
        buttonClass : 'button__start',
        button_title : "Lanjut!",
        type : 'option',
        content_value : [
            {
                title : '<17-24 Tahun',
                name : 'a',
                value : '<17-24 Tahun'
            },
            {
                title : '25-35 Tahun',
                name : 'b',
                value : '25-35 Tahun'
            },
            {
                title : '36-46 Tahun',
                name : 'c',
                value : '36-46 Tahun'
            },
            {
                title : '>47 Tahun',
                name : 'd',
                value : '>47 Tahun'
            },
        ]
    },
    {
        page : '/kuis/3',
        submit : false,
        title : "Apakah kamu sudah memulai trading?",
        className : "text__question",
        description : '',
        buttonClass : 'button__start',
        button_title : "Lanjut!",
        type : 'option',
        content_value : [
            {
                title : 'Sudah',
                name : 'a',
                value : 'Sudah'
            },
            {
                title : 'Belum',
                name : 'b',
                value : 'Belum'
            },
        ]
    },
    {
        page : '/kuis/4',
        submit : false,
        title : "Market mana yang ingin / sudah kamu tradingkan?",
        className : "text__question",
        description : '',
        buttonClass : 'button__start',
        button_title : "Lanjut!",
        type : 'option',
        content_value : [
            {
                title : 'Saham',
                name : 'a',
                value : 'Saham'
            },
            {
                title : 'Futures (Forex, Index, Commodity)',
                name : 'b',
                value : 'Futures (Forex, Index, Commodity)'
            },
            {
                title : 'Cryptocurrency',
                name : 'c',
                value : 'Cryptocurrency'
            },
        ]
    },
    {
        page : '/kuis/5',
        submit : true,
        title : "Apa permasalahan trading yang kamu hadapi saat ini?",
        className : "text__question",
        description : '',
        buttonClass : 'button__start',
        button_title : "Kirim!",
        type : 'option',
        content_value : [
            {
                title : 'Belum memahami teknikal analisis',
                name : 'a',
                value : 'Beginner'
            },
            {
                title : 'Sudah memahami teknikal analisis namun belum maksimal ',
                name : 'b',
                value : 'Intermediate'
            },
            {
                title : 'Sudah memahami teknikal analisis dan ingin belajar astrology trading',
                name : 'c',
                value : 'Advanced'
            },
        ]
    }
]

// middleware
app.use(cors())
app.use(express.json())
app.use('/', function (req, res) {
    res.send({ data: data})
})

app.listen('4003', () => console.log('Server Running at port: 4003'))