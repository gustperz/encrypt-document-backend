import App from './app';
import router from './router';
import { constants } from './utils/config';

const app = new App(router);

app.start(constants.PORT);
