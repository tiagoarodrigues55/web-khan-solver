import {connectToDatabase} from '../../config/mongodb'

export default async (req, res)=>{
  const {plan, name, username, password, school, transactionId} = req.body
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('subscribers')

  await collection.insertOne({...req.body, subscriberAt: new Date()})

  return res.status('200').json({eai:true})
}