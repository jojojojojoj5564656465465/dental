interface CardQwkProps {
  title: number
  symbol: string
  subtitle: string
  text: string
}

const cardData: CardQwkProps[] = [
  {
    title: 24,
    symbol: '+',
    subtitle: 'insurance covered',
    text: 'Our team loves dental trivia. Did you know that tooth enamel.',
  },
  {
    title: 1524,
    symbol: '+',
    subtitle: 'insurance covered',
    text: 'Our team loves dental trivia. Did you know that tooth enamel.',
  },
  {
    title: 3, // Using string here to represent "3K"
    symbol: 'K',
    subtitle: 'insurance covered',
    text: 'Our team loves dental trivia. Did you know that tooth enamel.',
  },
  {
    title: 92,
    symbol: '+',
    subtitle: 'insurance covered',
    text: 'Our team loves dental trivia. Did you know that tooth enamel.',
  },
]
export default cardData
