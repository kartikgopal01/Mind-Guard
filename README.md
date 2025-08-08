# AI Mental Health Companion

A supportive, voice-first mental health assistant powered by LLMs. It guides users through brief check-ins, grounding and mindfulness exercises, and practical coping strategies tailored to their selected focus areas.

## 🚀 Features

- Empathetic, voice-first support sessions
- Real-time conversation with speech-to-text and text-to-speech
- Focus areas like stress, anxiety, sleep, mindfulness, relationships, depression
- Practical tools: mindful breathing, 5-4-3-2-1 grounding, reframing, journaling prompts
- Session history and bookmarks
- Personalization: name, focus area, voice, and style
- Privacy- and safety-aware guidance (not a substitute for professional care)
- Multi-language support

## 💡 How It Works

### AI Mental Health Companion
- Empathetic, non-judgmental conversation
- Context-aware support aligned to selected focus areas
- Short, voice-friendly responses with gentle prompts
- Safety-aware guidance (encourages crisis resources when appropriate)

### Support Experience
- Interactive check-ins and reflective listening
- Short mindfulness and grounding exercises
- Simple, actionable coping strategies
- Gentle summaries and next-step suggestions

### User Features
- Personalized dashboard for sessions and bookmarks
- Search and discovery across focus areas
- History of recent sessions
- Bookmark companions for quick access

### Companion Configuration
- Name, focus area, preferred voice, and conversation style
- Ready-to-use examples for common focus areas

### Insights
- Recent sessions overview
- Time spent in sessions

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Supabase account
- Clerk account
 - Vapi account (for real-time voice) and Web token

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd saas-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
```

## 🚀 Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## 🧪 Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── constants/        # Application constants
├── lib/             # Utility functions and configurations
├── public/          # Static assets
├── types/           # TypeScript type definitions
└── middleware.ts    # Next.js middleware
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** Supabase
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form + Zod
- **Development:** ESLint, TypeScript

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👥 Authors

- Kartik Gopal❄️ - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Clerk for authentication
- Supabase for the database solution
- All other open-source contributors
