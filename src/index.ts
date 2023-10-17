import { Price } from './types'

const totalPrice = ({ price, discount, isInstallment, months }: Price): number => {
  if (price < 0 || discount < 0 || discount > 100 || months < 1)
    throw new Error('Некорректные входные данные')

  const priceWithDiscount = price * (100 - discount) / 100
  if (!isInstallment)
    return priceWithDiscount
  return priceWithDiscount / months
}

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(price)