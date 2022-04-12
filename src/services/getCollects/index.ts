import collects from "../../mocks/collects";
import { Collect } from "./interface";

export function getCollects(): Promise<Collect[]> {
  let result = new Promise<Collect[]>(resolve => {
    setTimeout(() => {
      resolve(collects);
    }, 2000);
  });
  return result;
}
