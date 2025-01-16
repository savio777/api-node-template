import { InferType, object, string } from 'yup';

export type ICreateExempleDto = InferType<typeof CreateExempleDto>;

export const CreateExempleDto = object({
  title: string().required('Título é obrigatório.'),
  description: string().required('Descrição é obrigatório.'),
});
