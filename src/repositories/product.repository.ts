import {inject} from '@loopback/context';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Product} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: juggler.DataSource,
  ) {
    super(Product, dataSource);
  }
}
