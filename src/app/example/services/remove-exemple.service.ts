import { v4 as uuid } from 'uuid';

import { prismaClient } from '../../../database/prisma-client';

async function RemoveExemploService(
  //session: ISession,
  id: string,
) {
  const example = await prismaClient.example.findFirst({ where: { id } });

  if (!example) {
    throw new BadRequestException('Example não encontrado');
  }

  //example.alteradorPorId = session.user.uuid;
  prismaClient.example.update({
    where: { id },
    data: {
      updated_by_user_id: uuid(),
      deleted_at: new Date(),
    },
  });

  return example;
}

export default RemoveExemploService;
