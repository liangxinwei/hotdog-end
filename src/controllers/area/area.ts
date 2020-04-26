import {Ctx, JsonController, Get, QueryParam} from 'routing-controllers';
import {Context} from 'koa';
import {Response} from '../../utils';
import Province from '../../models/area/province';
import City from '../../models/area/city';
import District from '../../models/area/district';
import Street from '../../models/area/street';
import Village from '../../models/area/village';

async function findProvince() {
  return Province.findAll({raw: true});
}
console.log('test');
async function findCity(provinceCode: string) {
  return City.findAll({
    raw: true,
    where: {
      provinceCode: provinceCode
    }
  });
}

async function findDistrict(cityCode: string) {
  return District.findAll({
    raw: true,
    where: {
      cityCode: cityCode
    }
  });
}

async function findStreet(districtCode: string) {
  return Street.findAll({
    raw: true,
    where: {
      districtCode: districtCode
    }
  });
}

async function findVillage(streetCode: string) {
  return Village.findAll({
    raw: true,
    where: {
      streetCode: streetCode
    }
  });
}

@JsonController('/v1/area')
export default class {
  @Get('/province')
  async getProvince(@Ctx() ctx: Context) {
    try {
      const data = await findProvince();
      return Response.success(data);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Get('/city')
  async getCities(@Ctx() ctx: Context, @QueryParam('provinceCode', {required: true}) provinceCode: string) {
    try {
      const data = await findCity(provinceCode);
      return Response.success(data);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Get('/district')
  async getDistricts(@Ctx() ctx: Context, @QueryParam('cityCode', {required: true}) cityCode: string) {
    try {
      const data = await findDistrict(cityCode);
      return Response.success(data);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Get('/street')
  async getStreets(@Ctx() ctx: Context, @QueryParam('districtCode', {required: true}) districtCode: string) {
    try {
      const data = await findStreet(districtCode);
      return Response.success(data);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }

  @Get('/village')
  async getVillages(@Ctx() ctx: Context, @QueryParam('streetCode', {required: true}) streetCode: string) {
    try {
      const data = await findVillage(streetCode);
      return Response.success(data);
    } catch (e) {
      return Response.error({ctx, e});
    }
  }
}
