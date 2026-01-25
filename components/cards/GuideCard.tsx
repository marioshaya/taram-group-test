import type { GuideCardProps } from "@/types"

const GuideCard = ({
  title,
  category,
  date,
  intro,
  readLenghtInMinute
}: GuideCardProps) => {
  return (
    <div
      className="flex flex-col gap-y-4 rounded-2xl text-background p-6 hover:scale-105 transition-all ease-in-out duration-500"
      style={{
        background:
          "linear-gradient(135deg, rgb(250, 250, 250) 0%, rgb(230, 230, 230) 25%, rgb(207, 207, 207) 50%, rgb(184, 184, 184) 75%, rgb(158, 158, 158) 100%)",
        boxShadow:
          "rgba(158, 158, 158, 0.4) 0px 20px 60px, rgba(255, 255, 255, 0.6) 0px 1px 0px inset, rgba(0, 0, 0, 0.1) 0px -1px 0px inset"
      }}
    >
      <div className="flex items-center gap-x-4">
        <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center shrink-0 shadow-lg text-white">
          {category.charAt(0)}
        </div>
        <div className="">
          <div className="font-[1000] text-2xl">{category}</div>
          <div className="text-xs opacity-80">
            {readLenghtInMinute}min - {date}
          </div>
        </div>
      </div>
      <div className="text-xl font-extrabold">{title}</div>
      <p>{intro}</p>
    </div>
  )
}

export default GuideCard
