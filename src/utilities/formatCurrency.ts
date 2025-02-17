//Function to convert the "amount" number into a currency number format - preceded with a pound symbol

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "GBP",
    style: "currency",
})

export default function formatCurrency(number: number) {
  return (
    CURRENCY_FORMATTER.format(number)
  )
}
