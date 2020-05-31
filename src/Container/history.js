import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ queryKey: false, basename:process.env.PUBLIC_URL });
export default history;
