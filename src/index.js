import dva from 'dva';
import './index.less';
import { AppModel } from "./pages/output";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(AppModel);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
