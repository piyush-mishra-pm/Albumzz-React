// We maintian this history object, instead of using the history object in browser router.
// This gives us more control, to do programmatic navigation, with much lesser code.

// "history" automatically installed with react-router-dom
import createHistory from "history/createBrowserHistory";

export default createHistory();
