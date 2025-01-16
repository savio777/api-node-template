import { Request } from 'express';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '../../shared/decorators/middlewares';
import { CreateExempleDto } from './dto/create-exemple.dto';
import { FindAllExempleDto } from './dto/findall-exemple.dto';
import { UpdateExempleDto } from './dto/update-exemple.dto';
import CreateExempleService from './services/create-exemple.service';
import FindAllExempleService from './services/findall-exemple.service';
import FindByIdExempleService from './services/findbyid-exemple.service';
import RemoveExempleService from './services/remove-exemple.service';
import UpdateExempleService from './services/update-exemple.service';

@Controller('/v1/exemples')
export class ExempleController {
  //Middleware(SeuMiddleWareExUploadFoto);
  //Middleware(SeuMiddleWareExUserLogado);
  @Post({
    status: 200,
  })
  create(req: Request) {
    //const session = req?.session;
    const dto = CreateExempleDto.validateSync(req.body);

    return CreateExempleService(
      //session,
      dto,
    );
  }

  @Get()
  findAll(req: Request) {
    const dto = FindAllExempleDto.validateSync(req.query);
    return FindAllExempleService(dto);
  }

  @Get(':id')
  findById(req: Request) {
    const id = req.params.id;

    return FindByIdExempleService(id);
  }

  @Put(':id')
  update(req: Request) {
    //const session = req?.session;
    const id = req.params.id;
    const dto = UpdateExempleDto.validateSync(req.body);

    return UpdateExempleService(
      //session,
      id,
      dto,
    );
  }

  @Delete(':id')
  remove(req: Request) {
    //const session = req?.session;
    const id = req.params.id;
    return RemoveExempleService(
      //session,
      id,
    );
  }
}
