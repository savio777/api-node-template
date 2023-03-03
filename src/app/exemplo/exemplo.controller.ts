import { Request } from 'express';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '../../shared/decorators/middlewares';
import { CreateExemploDto } from './dto/create-exemplo.dto';
import { FindAllExemploDto } from './dto/findall-exemplo.dto';
import { UpdateExemploDto } from './dto/update-exemplo.dto';
import CreateExemploService from './services/create-exemplo.service';
import FindAllExemploService from './services/findall-exemplo.service';
import FindByIdExemploService from './services/findbyid-exemplo.service';
import RemoveExemploService from './services/remove-exemplo.service';
import UpdateExemploService from './services/update-exemplo.service';

@Controller('/v1/exemplos')
export class ExemploController {
  //Middleware(SeuMiddleWareExUploadFoto);
  //Middleware(SeuMiddleWareExUserLogado);
  @Post({
    status: 200,
  })
  create(req: Request) {
    //const session = req?.session;
    const dto = CreateExemploDto.validateSync(req.body);

    return CreateExemploService(
      //session,
      dto,
    );
  }

  @Get()
  findAll(req: Request) {
    const dto = FindAllExemploDto.validateSync(req.query);
    return FindAllExemploService(dto);
  }

  @Get(':id')
  findById(req: Request) {
    const id = req.params.id;

    return FindByIdExemploService(id);
  }

  @Put(':id')
  update(req: Request) {
    //const session = req?.session;
    const id = req.params.id;
    const dto = UpdateExemploDto.validateSync(req.body);

    return UpdateExemploService(
      //session,
      id,
      dto,
    );
  }

  @Delete(':id')
  remove(req: Request) {
    //const session = req?.session;
    const id = req.params.id;
    return RemoveExemploService(
      //session,
      id,
    );
  }
}
