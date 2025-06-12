"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Star, ArrowRight, CheckCircle, Award, Target } from "lucide-react"

interface QuizState {
  currentQuestion: number
  answers: {
    challenge: string | null
    interest: string | null
    pain: string | null
  }
  showFeedback: boolean
  feedbackMessage: string
  feedbackType: "correct" | "incorrect" | "neutral"
  playerName: string
  childAge: string
  parentType: "pai" | "mae"
}

const questions = [
  {
    id: 1,
    type: "challenge",
    title: "Desafio de Percepção Visual",
    question: "Seu filho conseguiria identificar o elemento diferente? (Teste adaptado para crianças no espectro)",
    options: ["◆", "◆", "◆", "◇", "◆", "◆"],
    correctAnswer: "◇",
    feedback: {
      correct: {
        pai: "Excelente! Como pai de uma criança especial, você demonstra a mesma atenção aos detalhes que caracteriza muitas crianças no espectro autista. Nosso kit potencializa essa habilidade natural.",
        mae: "Perfeito! Sua percepção aguçada reflete o olhar atento que toda mãe de criança autista desenvolve. É exatamente essa capacidade que nosso material especializado fortalece.",
      },
      incorrect: {
        pai: "A resposta era o losango vazado. Como pai, você sabe que cada criança no espectro tem seu próprio ritmo e forma de processar informações. Nosso kit respeita essas particularidades.",
        mae: "A resposta era o losango vazado. Como mãe, você compreende que crianças autistas processam informações de forma única. Nosso material é especialmente adaptado para essas necessidades.",
      },
    },
  },
  {
    id: 2,
    type: "interest",
    title: "Prioridades no Desenvolvimento TEA",
    question: "Qual área você considera mais urgente para o desenvolvimento do seu filho autista?",
    options: ["Comunicação e Linguagem", "Coordenação Motora Fina", "Interação Social", "Autonomia e Independência"],
    feedback: {
      neutral: {
        pai: "Escolha muito importante. Como pai de uma criança no espectro, você demonstra compreensão das necessidades específicas do desenvolvimento autista.",
        mae: "Escolha fundamental. Sua intuição materna está alinhada com as prioridades terapêuticas para crianças no espectro autista.",
      },
    },
  },
  {
    id: 3,
    type: "pain",
    title: "Desafios Atuais",
    question: "Como seu filho reage às atividades educacionais tradicionais?",
    options: ["Fica frustrado e abandona rapidamente", "Só se interessa por temas específicos", "Precisa de adaptações constantes"],
    feedback: {
      neutral: {
        pai: "Sua honestidade é valiosa. Reconhecer os desafios específicos do autismo é fundamental para encontrar as estratégias adequadas de aprendizagem.",
        mae: "Obrigado pela sinceridade. Sua experiência como mãe de criança autista nos ajuda a entender como nosso material especializado pode fazer a diferença.",
      },
    },
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Método NeuroCognitivo 360°</h1>
      <p className="mt-4 text-xl">Potencialize o Cérebro do seu Filho</p>
    </main>
  );
}
