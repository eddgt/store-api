import {inject} from '@loopback/context';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Category} from '../models';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: juggler.DataSource,
  ) {
    super(Category, dataSource);
  }
}
