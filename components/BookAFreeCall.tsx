import type { BookAFreeCallProps } from "@/types"
import BackBtn from "./buttons/BackBtn"
import OfferCard from "./cards/OfferCard"

const BookAFreeCall = ({ title, paragraph, onClick }: BookAFreeCallProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-4 bg-background">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="font-extrabold text-3xl">Offre recommandée</h3>
        <BackBtn isRestartBtn onClick={onClick} />
      </div>
      <OfferCard paragraph={paragraph} title={title} />
    </div>
  )
}

export default BookAFreeCall
