import { bar } from "../bar.js"
import { Foo } from "foo";

export default function Page(): JSX.Element {
  return <><div>Hello World! {bar}</div><Foo /></>;
}
