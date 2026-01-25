import type { GuideCardProps } from "@/types"

export const guideFilter = [
  "Tous",
  "Site vitrine",
  "Guide agence",
  "Refonte",
  "SEO",
  "Optimisation",
  "E-commerce"
]

export const guidesData: GuideCardProps[] = [
  {
    category: "Site vitrine",
    date: "4 févr",
    title: "Pourquoi créer un site vitrine en 2025 ?",
    intro:
      "Les bonnes raisons d'avoir une présence en ligne, avec des exemples simples pour artisans, freelances et PME.",
    readLenghtInMinute: 6
  },
  {
    category: "Guide agence",
    date: "18 janv.",
    title: "Comment choisir son agence web : la checklist simplifiée",
    intro:
      "10 questions à poser avant de signer : budget, délais, maintenance, SEO, accompagnement",
    readLenghtInMinute: 6
  },
  {
    category: "Refonte",
    date: "05 janv.",
    title: "Réussir sa refonte web sans stress",
    intro:
      "Plan d'action en 5 étapes pour garder vos contenus, améliorer la conversion et rassurer vos équipes.",
    readLenghtInMinute: 7
  },
  {
    category: "SEO",
    date: "20 déc.",
    title: "Le SEO intelligenet : 5 astuces pour dépasser vos concurrents",
    intro:
      "Des actions simples à mettre en place chaque semaine pour remonter sur Google sans jargon technique",
    readLenghtInMinute: 5
  },
  {
    category: "Automatisation",
    title:
      "Automatiser vos processus métier : gagner du temps et réduire les erreurs",
    date: "10 févr.",
    intro:
      "Comment identifier les tâches répétitives à automatiser et les workflows qui feront gagner des heures chaque semaine",
    readLenghtInMinute: 8
  },
  {
    category: "E-commerce",
    title: "Créer un site e-commerce réussi : les 7 étapes essentielles",
    date: "15 févr.",
    intro:
      "De la préparation à la mise en ligne, découvrez comment lancer votre boutique en ligne avec succès et éviter les pièges courants",
    readLenghtInMinute: 9
  }
]
