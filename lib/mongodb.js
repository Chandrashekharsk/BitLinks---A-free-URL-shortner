import {MongoClient} from "mongodb";
const uri = process.env.MONGODB_URI
const options = {
  useNewUrlParser: true
}


let client;
let clientPromise;
if(!process.env.MONGODB_URI){
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if(process.env.NODE_ENV === 'development'){
  // In development mode, use a global variable so the MongoClient is not constantly re-created
  if(!global._mongoClientPromise){
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}else{
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;