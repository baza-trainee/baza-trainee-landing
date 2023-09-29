export const prettyPrint = (obj: any, fromFuncName?: string) => {
  console.log(`from ${fromFuncName || "prettyPrint"} >>`, JSON.stringify(obj, null, 2));
};
