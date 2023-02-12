import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "components/ui/aspect-ratio"

import { GLOBAL_DISCOUNT } from "@/lib/constants"

interface ProductQuickViewProps {
  id?: string
  color?: string
  slug: string
  size?: string
  quantity?: number
  price?: number
  name?: string
  shortDescription?: string
  max_weight?: number
  image1: string
  image2?: string
}

const ProductQuickView: React.FunctionComponent<ProductQuickViewProps> = ({
  id,
  image1,
  color,
  slug,
  size,
  quantity,
  price,
  name,
  shortDescription,
  max_weight,
}) => {
  const applyDiscount = (price: number, discount: number) => {
    let x = price - price * discount
    return x.toFixed(1)
  }

  const priceWithDiscount = applyDiscount(price, GLOBAL_DISCOUNT)

  return (
    <Link href={`/products/${slug}`}>
      <div className="rounded-md border dark:border-zinc-800 hover:dark:border-zinc-700 p-2">
        <div className="">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={image1}
              alt="Photo by Alvaro Pinot"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs">
            Hasta <span className="text-lg font-bold">{max_weight}</span> kg
          </span>
          <div className="flex flex-col justify-center items-end">
            <span className="font-mono line-through text-xs text-red-600">
              {price}
            </span>
            <span className="font-mono">S/ {priceWithDiscount}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductQuickView
