import { projects } from "../server"

export default function personHandler({ query: { id } }, res) {
  const filtered = projects.filter((project) => project.id === parseInt(id))

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with id: ${id} not found.` })
  }
}