import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  async connect (url): Promise<void> {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<void> {
    this.client.close()
  }
}
