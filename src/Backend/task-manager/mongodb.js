//CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongdb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }
    console.log('Connected correctly')
    const db = client.db(databaseName)

    db.collection('users').findOne({name: 'Marui'}, (error, user) => {
        if(error){
            console.log('Unable to find')
        }

        console.log(user)
    })

    // db.collection('users').find({age: 26}).toArray((error,users) => {
    //     if(error){
    //         console.log('Unable to find')
    //     }

    //     console.log(users)
    // })
    // db.collection('users').find({age: 26}).count((error,count) => {
    //     if(error){
    //         console.log('Unable to find')
    //     }

    //     console.log(count)
    // })
    // db.collection('users').insertOne({
    //     name: 'Dui',
    //     age: 2
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Dukdui',
    //         age: 1
    //     }, 
    //     {
    //         name: 'Marui',
    //         age: 2
    //     }
    // ], (error , result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
//     db.collection('tasks').insertMany([
//         {
//             description: 'tanawat',
//             completed: true
//         },
//         {
//             description: 'Dukdui',
//             completed: false
//         }
//     ], (error, result) => {
//         if(error){
//             return console.log('Unable to insert tasks')
//         }

//         console.log(result.ops)
//     })
})