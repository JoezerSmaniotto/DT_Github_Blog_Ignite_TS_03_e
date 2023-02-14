export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export function formatText(text: string, limitLength = 50) {
  const textArr = text.split(' ')
  const newText = textArr
    // eslint-disable-next-line array-callback-return
    .map((string, index) => {
      if (index < limitLength) {
        return string
      }
    })
    .filter((string) => string !== undefined)
  return `${newText.toString().replaceAll(',', ' ')}...`
}
