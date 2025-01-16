import { InferType } from 'yup';
import { CreateExempleDto } from './create-exemple.dto';

export type IUpdateExempleDto = InferType<typeof UpdateExempleDto>;

export const UpdateExempleDto = CreateExempleDto;
