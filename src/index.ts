import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ message: "Hello Hono!" }));
app.get("/hello/:name", (c) => c.json({ message: `Hello, ${c.req.param("name")}!` }));
app.get("/health", (c) => c.json({ status: "ok" }));

export default app;
