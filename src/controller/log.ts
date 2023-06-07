import { ESController } from '../components/es'
import { LogService } from '../service/log'
import { BaseController } from './base'

@ESController({
  prefix: '/open/log',
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  service: LogService
})
export class LogController extends BaseController {
}
