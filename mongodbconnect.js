const mongoClient=require('mongodb').MongoClient;

mongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err){
      console.log('unable to connect to the database');
  }
    //   console.log('connected to the mongoDB');
    //   db.collection('Todos').insertOne({
    //       text:'something something',
    //       complicated:false
    //   },(err,results)=>{
    //         if(err){
    //             console.log('unable to peint data');
    //         }
    //         console.log(JSON.stringify(results.ops,undefined,2));
    //   })

      db.collection('Todos').find().toArray().then((docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
      },(err)=>{
        console.log('unable to fetch data');
      });

  db.close();
});