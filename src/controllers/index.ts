import {Get, Controller,} from 'routing-controllers';
import cons from 'consolidate';
import path from 'path';

@Controller()
export default class {
  @Get('/')
  async renderIndex() {
    return cons.ejs(path.resolve(__dirname, '../../views/home.ejs'), {
      title: 'hotdog 后台',
    });
  }
}
