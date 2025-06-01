import clientPromise from "@/lib/mongodb";


export async function POST(req){
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("urls");

  // Check if the short URL already exists
  const existingUrl = await collection.findOne({ shortUrl:body.shortUrl });
  console.log("ExistingUrl:", existingUrl)
  if (existingUrl) {
    return Response.json({
      success: false,
      error: true,
      message: "This Custom Text is already taken. Please try another one.",
    });
  }

  // create a new document
  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  })

  return Response.json({
    success: true,
    error: false,
    data: result,
    message: "URL shortened successfully"
  }) 
}

