import { DESTINATION_COUNTRIES } from "../constants/constant"

export const shippingCostCalculator = (weight,country) => {
 return (weight * DESTINATION_COUNTRIES[country]) || 0
}