import { deleteAsync } from 'del';

export const reset = () => deleteAsync(app.path.clean);
