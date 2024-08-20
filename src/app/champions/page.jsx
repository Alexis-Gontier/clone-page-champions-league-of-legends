import Hero from "@/components/pageChampions/hero/Hero"
import CardContainer from "@/components/pageChampions/cards/CardContainer"

export default function page() {
  return (
    <div className="py-16">
      <Hero />
      <CardContainer />
    </div>
  )
}
