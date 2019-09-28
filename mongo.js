// モジュールのインポート
const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

// dbのurlを変数の中へ
const url = "mongodb://localhost:27017/"
let db

// DBに接続
MongoClient.connect(url, function(err, mongodb) {
    assert.equal(null, err)
    console.log("はじめてのAPIサーバ起動しました。おめでとう")
    
    // dbの名前を引数に加える
    db = mongodb.db("test")
})

var collection = function(name) {
    return db.collection(name)
}

// コレクション関数をexport
module.exports = collection



