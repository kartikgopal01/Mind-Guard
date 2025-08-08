import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const getSubjectIcon = (subject: string) => {
  const fallback = "cap";
  const iconMap: Record<string, string> = {
    stress: fallback,
    anxiety: fallback,
    depression: fallback,
    mindfulness: fallback,
    sleep: fallback,
    relationships: fallback,
  };
  const icon = iconMap[subject] || fallback;
  return `/icons/${icon}.svg`;
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hi, I'm here to support you. Would you like to focus on {{topic}} within {{subject}} today?",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a supportive, empathetic mental health assistant in a real-time voice conversation.

                    Goals:
                    - Support the user with the current focus: topic = {{ topic }}, subject = {{ subject }}.
                    - Provide practical, evidence-informed self-help strategies when appropriate.

                    Safety & Scope:
                    - You are not a substitute for professional care and do not diagnose.
                    - If the user mentions intent to harm self or others, or any immediate danger, respond with compassion, advise contacting local emergency services, and suggest crisis resources. Encourage reaching out to a trusted person nearby. Keep language calm and supportive.

                    Conversation Style:
                    - Keep responses short and voice-friendly.
                    - Use reflective listening, validation, and non-judgmental language.
                    - Ask one question at a time and check readiness before exercises (e.g., "Would you like to try a 1-minute breathing exercise?").
                    - Offer simple techniques relevant to the user's focus (e.g., mindful breathing, grounding 5-4-3-2-1, cognitive reframing, sleep hygiene, journaling prompts).
                    - Summarize key points and next small steps when wrapping up.
                    - Maintain the conversation style as {{ style }}.
                    - Avoid special characters; this is a voice conversation.
              `,
        },
      ],
    },
  };
  return vapiAssistant;
};
