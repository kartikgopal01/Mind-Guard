export const subjects = [
  "stress",
  "anxiety",
  "depression",
  "mindfulness",
  "sleep",
  "relationships",
];

export const subjectsColors = {
  stress: "#FFDA6E",
  anxiety: "#E5D0FF",
  depression: "#C8FFDF",
  mindfulness: "#BDE7FF",
  sleep: "#FFECC8",
  relationships: "#FFC8E4",
};

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const recentSessions = [
  {
    id: "1",
    subject: "mindfulness",
    name: "Calm Coach",
    topic: "5-minute Mindful Breathing",
    duration: 10,
    color: subjectsColors.mindfulness,
  },
  {
    id: "2",
    subject: "stress",
    name: "Stress Navigator",
    topic: "Identifying Triggers & Coping Plans",
    duration: 20,
    color: subjectsColors.stress,
  },
  {
    id: "3",
    subject: "sleep",
    name: "Sleep Guide",
    topic: "Create a Gentle Bedtime Routine",
    duration: 15,
    color: subjectsColors.sleep,
  },
  {
    id: "4",
    subject: "anxiety",
    name: "Ease Ally",
    topic: "Grounding with 5-4-3-2-1",
    duration: 12,
    color: subjectsColors.anxiety,
  },
  {
    id: "5",
    subject: "relationships",
    name: "Boundaries Buddy",
    topic: "Setting Healthy Boundaries",
    duration: 18,
    color: subjectsColors.relationships,
  },
  {
    id: "6",
    subject: "depression",
    name: "Mood Support",
    topic: "Small Steps: Behavioral Activation",
    duration: 10,
    color: subjectsColors.depression,
  },
];
