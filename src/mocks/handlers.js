import { rest } from "msw";
import recipesData from "./recipes.json";

export const handlers = [
  rest.get("/api/recipes", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      //delay response to see loading
      ctx.delay(2000),
      ctx.json(recipesData)
    );
  }),
];
