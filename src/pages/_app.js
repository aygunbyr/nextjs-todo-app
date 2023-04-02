import "@/styles/globals.css";
import { TodoLayer } from "@/contexts/TodoContext";
import reducer, { initialState } from "@/contexts/reducer";

export default function App({ Component, pageProps }) {
  return (
    <TodoLayer initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </TodoLayer>
  );
}
