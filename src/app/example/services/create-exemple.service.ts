import { v4 as uuid } from 'uuid';

import { ICreateExempleDto } from '../dto/create-exemple.dto';
import { prismaClient } from '../../../database/prisma-client';

async function CreateExemploService(
  //session: ISession,
  dto: ICreateExempleDto,
) {
  const { description, title } = dto;

  const exemplo = await prismaClient.example.create({
    title,
    description,
    created_at: uuid(),
    //criadoPorId: session.user.uuid,
  });

  return exemplo;
}

export default CreateExemploService;
