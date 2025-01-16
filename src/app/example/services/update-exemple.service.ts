import { v4 as uuid } from 'uuid';

import { IUpdateExempleDto } from '../dto/update-exemple.dto';
import { prismaClient } from '../../../database/prisma-client';

async function UpdateExemploService(
  //session: ISession,
  id: string,
  dto: IUpdateExempleDto,
) {
  const { description, title } = dto;

  const exemplo = await prismaClient.example.findFirst({ where: { id } });

  if (!exemplo) {
    throw new BadRequestException('Example não encontrado');
  }

  prismaClient.example.update({
    where: { id },
    data: {
      title,
      description,
      updated_at: new Date(),
      updated_by_user_id: uuid(),
    },
  });

  return exemplo;
}

export default UpdateExemploService;
