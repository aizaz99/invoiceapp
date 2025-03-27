import {
    Container, Typography, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Dialog,
    DialogTitle, DialogContent, CircularProgress
  } from '@mui/material'
  import { useQuery } from '@tanstack/react-query'
  import { useState } from 'react'
  
  const fetchInvoices = async () => {
    const res = await fetch('http://localhost:3000/invoices')
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
  }
  
  export default function InvoicePage() {
    const [selectedInvoice, setSelectedInvoice] = useState(null)
  
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ['invoices'],
      queryFn: fetchInvoices,
    })
  
    return (
      <Container>
        <Typography variant="h4" color="primary" gutterBottom>
          Invoices
        </Typography>
  
        {isLoading && <CircularProgress />}
        {isError && <p>Error: {error.message}</p>}
  
        {!isLoading && !isError && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Vendor</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(inv => (
                  <TableRow key={inv.id} onClick={() => setSelectedInvoice(inv)} hover>
                    <TableCell>{inv.vendor_name}</TableCell>
                    <TableCell>${inv.amount}</TableCell>
                    <TableCell>{new Date(inv.due_date).toLocaleDateString()}</TableCell>
                    <TableCell>{inv.paid ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
  
        <Dialog open={Boolean(selectedInvoice)} onClose={() => setSelectedInvoice(null)}>
          <DialogTitle sx={{ bgcolor: 'primary.main', color: '#fff' }}>
            Invoice Detail
          </DialogTitle>
          <DialogContent>
            {selectedInvoice && (
              <div>
                <p><strong>Vendor:</strong> {selectedInvoice.vendor_name}</p>
                <p><strong>Description:</strong> {selectedInvoice.description}</p>
                <p><strong>Amount:</strong> ${selectedInvoice.amount}</p>
                <p><strong>Due Date:</strong> {new Date(selectedInvoice.due_date).toLocaleDateString()}</p>
                <p><strong>Paid:</strong> {selectedInvoice.paid ? 'Yes' : 'No'}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    )
  }