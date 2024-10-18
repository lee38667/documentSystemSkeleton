import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const documents = [
  {
    id: "DOC001",
    name: "Project Proposal.docx",
    type: "Word Document",
    size: "2.3 MB",
    date: "2023-04-15",
  },
  {
    id: "DOC002",
    name: "Financial Report Q2.xlsx",
    type: "Excel Spreadsheet",
    size: "5.1 MB",
    date: "2023-04-20",
  },
  {
    id: "DOC003",
    name: "Marketing Presentation.pptx",
    type: "PowerPoint",
    size: "8.7 MB",
    date: "2023-04-22",
  },
  {
    id: "DOC004",
    name: "Client Meeting Notes.pdf",
    type: "PDF",
    size: "1.2 MB",
    date: "2023-04-25",
  },
  {
    id: "DOC005",
    name: "Product Roadmap.png",
    type: "Image",
    size: "3.5 MB",
    date: "2023-04-28",
  },
]

export function RecentDocuments() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((document) => (
          <TableRow key={document.id}>
            <TableCell>{document.name}</TableCell>
            <TableCell>{document.type}</TableCell>
            <TableCell>{document.size}</TableCell>
            <TableCell>{document.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}