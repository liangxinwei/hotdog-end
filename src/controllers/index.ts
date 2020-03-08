import {Get, Controller,} from 'routing-controllers';
import cons from 'consolidate';
import path from 'path';

@Controller()
export default class {
  @Get('/')
  async router() {
    return cons.ejs(path.resolve(__dirname, '../views/home'), {
      title: 'Example For TypeScript Node.js',
    });
  }
}
