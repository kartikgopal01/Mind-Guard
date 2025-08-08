# Cognito-xo

A modern educational platform powered by LLM (Large Language Models) to help users learn any topic of their choice.

## 🚀 Features

- AI-powered learning assistance
- Interactive learning experience
- Personalized learning paths
- Real-time topic exploration
- Comprehensive topic coverage
- Progress tracking
- Learning history
- Topic bookmarking
- Custom learning goals
- Multi-language support

## 💡 How It Works

### AI Learning Assistant
- Powered by advanced LLM technology
- Natural language interaction
- Context-aware responses
- Adaptive learning patterns
- Real-time topic explanations

### Learning Experience
- Interactive Q&A sessions
- Step-by-step topic breakdowns
- Visual learning aids
- Practice exercises
- Progress assessment
- Learning recommendations

### User Features
- Personalized learning dashboard
- Topic search and discovery
- Learning progress tracking
- Bookmark favorite topics
- Learning history review
- Custom learning goals

### Content Management
- Dynamic content generation
- Topic categorization
- Difficulty levels
- Learning resources
- Reference materials
- External resource links

### Learning Analytics
- Progress tracking
- Learning patterns
- Topic mastery levels
- Time spent learning
- Achievement tracking
- Learning recommendations

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Supabase account
- Clerk account

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd kgm_saas
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
