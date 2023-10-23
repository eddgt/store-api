import {repository} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Product} from '../models';
import {ProductRepository} from '../repositories/product.repository';

export class ProductController {
  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) {}

  @post('/products', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(Product)}},
      },
    },
  })
  async create(@requestBody() product: Product): Promise<Product> {
    return this.productRepository.create(product);
  }

  @get('/products', {
    responses: {
      '200': {
        description: 'Array of Product model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async find(): Promise<Product[]> {
    return this.productRepository.find();
  }

  @get('/products/{id}', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(Product)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Product> {
    return this.productRepository.findById(id);
  }

  @patch('/products', {
    responses: {
      '200': {
        description: 'Product PATCH success',
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {'application/json': {schema: getModelSchemaRef(Product)}},
    })
    product: Product,
  ): Promise<void> {
    await this.productRepository.updateAll(product, {});
  }

  @del('/products', {
    responses: {
      '200': {
        description: 'Product DELETE success',
      },
    },
  })
  async deleteAll(): Promise<void> {
    await this.productRepository.deleteAll();
  }
}
