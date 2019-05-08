function createOverdueReport (userId) {
  const dueInvoices = await fetchOverdueInvoices(userId)
  const overdueInvoicesTotal = dueInvoices.reduce((acc, invoice) => acc + invoice.total)
  const allInvoices = await fetchAllInvoices(userId)
  const allInvoicesTotal = allInvoices.reduce((acc, invoice) => acc + invoice.total)
  const percentDueInvoice = overdueInvoicesTotal / allInvoicesTotal * 100

  const pos = await fetchOverduePurchaseOrder(userID)
  const overduePosTotal = pos.reduce((acc, po) => acc + po.total)
  const allPurchaseOrders = await fetchAllPurchaseOrders(userId)
  const allPurchaseOrdersTotal = allPurchaseOrders.reduce((acc, po) => acc + po.total)
  const percentPurchaseDue = overduePurchaseOrdersTotal / allPurchaseOrdersTotal * 100
  // ....
  return {
    percentDueInvoice,
    percentPurchaseDue
  }
}

// Refactor #1

function createOverdueReport (userId) {
  // Gather data
  const dueInvoices = await fetchOverdueInvoices(userId)
  const allInvoices = await fetchAllInvoices(userId)
  const allPurchaseOrders = await fetchAllPurchaseOrders(userId)
  const pos = await fetchOverduePurchaseOrder(userID)

  // Create report
  const overdueInvoicesTotal = dueInvoices.reduce((acc, invoice) => acc + invoice.total)
  const allInvoicesTotal = allInvoices.reduce((acc, invoice) => acc + invoice.total)
  const percentDueInvoice = overdueInvoicesTotal / allInvoicesTotal * 100
  const overduePosTotal = pos.reduce((acc, po) => acc + po.total)
  const allPurchaseOrdersTotal = allPurchaseOrders.reduce((acc, po) => acc + po.total)
  const percentPurchaseDue = overduePurchaseOrdersTotal / allPurchaseOrdersTotal * 100
  // ....
  return {
    percentDueInvoice,
    percentPurchaseDue
  }
}

// Refacotr #2
function createOverdueReport (userId) {
  // Gather data
  const [dueInvoices, allInvoices, pos, allPurchaseOrders] = await Promise.all([
    fetchOverdueInvoices(userId),
    fetchAllInvoices(userId),
    fetchOverduePurchaseOrder(userId),
    fetchAllPurchaseOrders(userId)
  ])

  const reports = processReports(dueInvoices, allInvoices, pos, allPurchaseOrders)
  return reports
}

// This can be unit tested for every edge cases
function processReports (dueInvoices, allInvoices, pos, allPurchaseOrders) {
  const overdueInvoicesTotal = dueInvoices.reduce((acc, invoice) => acc + invoice.total)
  const allInvoicesTotal = allInvoices.reduce((acc, invoice) => acc + invoice.total)
  const percentDueInvoice = overdueInvoicesTotal / allInvoicesTotal * 100
  const overduePosTotal = pos.reduce((acc, po) => acc + po.total)
  const allPurchaseOrdersTotal = allPurchaseOrders.reduce((acc, po) => acc + po.total)
  const percentPurchaseDue = overduePurchaseOrdersTotal / allPurchaseOrdersTotal * 100
  return {
    percentDueInvoice,
    percentPurchaseDue
  }
}
