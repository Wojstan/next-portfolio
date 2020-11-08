// Fake users data
import { projects } from "./server";

export default function handler(req, res) {

  res.status(200).json(projects)
}