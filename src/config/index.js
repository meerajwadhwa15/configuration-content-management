import { Constants } from './constants';
import { Database } from './database';
import Routes from './routes';

export const Config  = { ...Constants, ...Database, ...Routes };