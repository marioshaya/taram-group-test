import Link from "next/link"
import { notFound } from "next/navigation"
import { IoMdArrowBack } from "react-icons/io"
import Section from "@/components/section/Section"
import { guidesData } from "@/data"
import { slugify } from "@/utils"

export default async function GuideDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const guide = guidesData.find((g) => slugify(g.title) === slug)

  if (!guide) return notFound()

  return (
    <main>
      <Section>
        <div className="space-y-6">
          <Link
            className="flex items-center gap-x-4 text-background py-3 px-4 rounded-2xl text-lg font-black w-full md:w-64"
            href="/guides"
            style={{
              background:
                "linear-gradient(135deg, rgb(250, 250, 250) 0%, rgb(230, 230, 230) 25%, rgb(207, 207, 207) 50%, rgb(184, 184, 184) 75%, rgb(158, 158, 158) 100%)",
              boxShadow:
                "rgba(158, 158, 158, 0.2) 0px 10px 30px, rgba(255, 255, 255, 0.6) 0px 1px 0px inset, rgba(0, 0, 0, 0.1) 0px -1px 0px inset",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <IoMdArrowBack />
            <div className="">Retour aux guides</div>
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">{guide.title}</h1>
          <p className="text-sm opacity-85">
            {guide.readLenghtInMinute} minutes de lecture - {guide.date}
          </p>
          <p
            className="p-6 text-background rounded-3xl text-xl"
            style={{
              background:
                "linear-gradient(135deg, rgb(250, 250, 250) 0%, rgb(230, 230, 230) 25%, rgb(207, 207, 207) 50%, rgb(184, 184, 184) 75%, rgb(158, 158, 158) 100%)",
              boxShadow:
                "rgba(158, 158, 158, 0.2) 0px 10px 30px, rgba(255, 255, 255, 0.6) 0px 1px 0px inset, rgba(0, 0, 0, 0.1) 0px -1px 0px inset",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            {guide.intro}
          </p>
        </div>
      </Section>
    </main>
  )
}
