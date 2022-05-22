import express, { Request, Response } from "express";
const app = express();

app.use(express.static("./dist"));
app.use(express.json());

app.get("/api/potanginamo", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

// Serve the files on port 3000.
app.listen(3000, () => console.log("Example app listening on port 3000!\n"));
