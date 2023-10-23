import {juggler} from '@loopback/repository';

export const MongoDataSource: juggler.DataSource = new juggler.DataSource({
  name: 'MongoDataSource',
  connector: 'mongodb',
  url: 'mongodb://127.0.0.1:27017/store',
});
