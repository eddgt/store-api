import {repository} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Category} from '../models';
import {CategoryRepository} from '../repositories/category.repository';

export class CategoryController {
  constructor(
    @repository(CategoryRepository)
    public categoryRepository: CategoryRepository,
  ) {}

  @post('/categories', {
    responses: {
      '200': {
        description: 'Category model instance',
        content: {'application/json': {schema: getModelSchemaRef(Category)}},
      },
    },
  })
  async create(@requestBody() category: Category): Promise<Category> {
    return this.categoryRepository.create(category);
  }

  @get('/categories', {
    responses: {
      '200': {
        description: 'Array of Category model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async find(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  @patch('/categories', {
    responses: {
      '200': {
        description: 'Category PATCH success',
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {'application/json': {schema: getModelSchemaRef(Category)}},
    })
    category: Category,
  ): Promise<void> {
    await this.categoryRepository.updateAll(category, {});
  }

  @del('/categories', {
    responses: {
      '200': {
        description: 'Category DELETE success',
      },
    },
  })
  async deleteAll(): Promise<void> {
    await this.categoryRepository.deleteAll();
  }
}
