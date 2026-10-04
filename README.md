# IronForge React Website

A modern, responsive gym and fitness website built with **React + Vite**.  
The project uses reusable components, dynamic data rendering, React state management, responsive CSS, and cinematic UI animations.

---

## 📌 Project Overview

**IronForge** is a fictional fitness/gym website designed to demonstrate a clean, modern React application.

The website allows visitors to:

- Explore the gym and its services
- View training programs
- Browse trainers
- Filter and search trainer information
- Explore membership plans
- Select a membership plan interactively
- Read about the gym's story and milestones
- Submit a contact form
- Browse frequently asked questions
- Switch between light and dark themes
- Use the website comfortably on desktop, tablet, and mobile

The project is also structured as a learning-friendly React project, with comments explaining important code and reusable patterns.

---

## ✨ Main Features

### 🎬 Cinematic Animations

The website includes subtle animations to make the interface feel more polished without overwhelming the user.

Examples include:

- Hero entrance animations
- Floating background effects
- Animated grid backgrounds
- Hover transitions
- Image zoom effects
- Card animations
- Mobile menu transitions
- Smooth UI state changes

The project also respects the user's system `prefers-reduced-motion` setting.

---

### ⚛️ React `useState`

React state is used wherever the interface needs to respond to user interaction.

Examples:

```jsx
const [menuOpen, setMenuOpen] = useState(false);
```

This controls the mobile navigation menu.

Other state-driven features include:

- Theme switching
- Program filters
- Trainer search
- Trainer specialty filters
- Membership selection
- FAQ accordion
- Contact form fields
- Form submission state
- Interactive About timeline

---

### 🔄 Dynamic Rendering with `map()`

Repeated website content is stored as JavaScript data and rendered dynamically.

For example:

```jsx
{programs.map((program) => (
  <ProgramCard
    key={program.id}
    program={program}
  />
))}
```

This means developers do not need to manually duplicate HTML/JSX for every program.

The same approach is used for:

- Navigation links
- Programs
- Trainers
- Membership plans
- Services
- Statistics
- FAQs
- Timeline milestones
- Tags and features

---

## 🗂️ Folder Structure

The important project structure is:

```text
IronForge/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx
│   │   ├── ProgramCard.jsx
│   │   ├── TrainerCard.jsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── siteData.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Trainers.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 📄 What Each Folder Does

## `src/components/`

Contains reusable UI components.

Instead of writing the same UI multiple times, components can be reused across pages.

For example:

```jsx
<TrainerCard trainer={trainer} />
```

The trainer card can then be reused for every trainer.

This keeps the application easier to maintain.

---

## `src/pages/`

Contains the main website pages.

### `Home.jsx`

The landing page.

It introduces IronForge and displays:

- Hero section
- Gym statistics
- Services
- Benefits
- Programs
- Membership plans
- Calls to action

---

### `About.jsx`

The About page explains:

- The IronForge story
- Mission
- Values
- Timeline/milestones
- Company information

The timeline content is dynamically rendered from the data file.

---

### `Programs.jsx`

Displays available fitness programs.

Users can filter programs by category.

Example categories:

- Strength
- Cardio
- Classes
- Recovery

The page uses React state to remember the selected filter.

---

### `Trainers.jsx`

Displays the gym's trainers.

Users can:

- Search trainers
- Filter trainers by specialty
- View trainer information

The trainer cards are generated dynamically with `map()`.

---

### `Contact.jsx`

Provides contact functionality.

It includes:

- Contact information
- Contact form
- Form state
- Submission feedback
- FAQ section
- Responsive layout

The FAQ section uses state to expand/collapse individual questions.

---

# 🧠 `src/data/siteData.js`

This file contains the main website data.

For example:

```js
export const trainers = [
  {
    id: 1,
    name: "Alex Carter",
    specialty: "Strength Training",
  },
];
```

This approach separates **data from UI**.

If you want to add another trainer, you can add another object instead of manually creating another component.

For example:

```js
{
  id: 2,
  name: "Sarah Wilson",
  specialty: "Cardio",
}
```

The Trainers page will automatically render it.

---

# 🧩 How Dynamic Rendering Works

Instead of doing this:

```jsx
<div>Trainer 1</div>
<div>Trainer 2</div>
<div>Trainer 3</div>
```

the project uses:

```jsx
{trainers.map((trainer) => (
  <TrainerCard
    key={trainer.id}
    trainer={trainer}
  />
))}
```

This is better because the UI automatically adapts when the data changes.

---

# 🎨 Responsive Design

The website is designed for:

### Desktop

Large screens receive:

- Multi-column layouts
- Larger typography
- Full navigation
- Wider content areas

### Tablet

Layouts automatically reduce columns and spacing.

### Mobile

The website provides:

- Mobile navigation menu
- Single-column layouts
- Responsive cards
- Smaller typography
- Touch-friendly controls
- Flexible images
- Responsive buttons

---

# 🌓 Theme System

The website includes a light/dark theme.

The theme is controlled using React state and applied to the document.

Example concept:

```jsx
const [theme, setTheme] = useState("dark");
```

The selected theme is also persisted so the user's preference can remain after refreshing the page.

---

# 🧭 Routing

The application uses React Router for page navigation.

Typical routes include:

```text
/
 /about
 /programs
 /trainers
 /contact
```

This allows the application to behave like a multi-page website while remaining a React single-page application.

---

# 🛠️ Technologies Used

- **React**
- **Vite**
- **React Router**
- **JavaScript**
- **CSS**
- **HTML5**

React handles the UI and state.

Vite provides the development server and production build system.

React Router handles page navigation.

CSS handles:

- Responsive layouts
- Themes
- Animations
- Transitions
- Component styling

---

# 🚀 Getting Started

## 1. Install Node.js

Make sure Node.js is installed.

Check your installation:

```bash
node --version
```

and:

```bash
npm --version
```

---

## 2. Open the Project

Open the project folder in VS Code.

Then open the terminal.

---

## 3. Install Dependencies

Run:

```bash
npm install
```

This installs the packages listed in `package.json`.

---

## 4. Start the Development Server

Run:

```bash
npm run dev
```

Vite will display a local development URL, usually similar to:

```text
http://localhost:5173
```

Open that address in your browser.

---

# 🏗️ Production Build

When the project is ready for deployment:

```bash
npm run build
```

This creates a production build.

To preview the production build locally:

```bash
npm run preview
```

---

# 🧪 Development Workflow

A recommended workflow is:

1. Start the development server.
2. Make changes in `src/`.
3. Save the file.
4. Vite automatically reloads the application.
5. Test desktop layout.
6. Test tablet layout.
7. Test mobile layout.
8. Run the production build before deployment.

---

# ➕ Adding a New Program

Open:

```text
src/data/siteData.js
```

Add another program object.

For example:

```js
{
  id: 10,
  title: "Olympic Lifting",
  category: "Strength",
  description: "Technique-focused Olympic lifting sessions.",
}
```

The Programs page can then render the new item automatically.

You normally do **not** need to create another card manually.

---

# ➕ Adding a New Trainer

Add a trainer to the trainers data:

```js
{
  id: 10,
  name: "Michael Stone",
  specialty: "Strength Training",
}
```

The Trainers page will automatically display the trainer through `map()`.

---

# ➕ Adding a Membership Plan

Add another membership object to the membership data.

The pricing section will dynamically create the new plan.

This keeps the UI and data separated.

---

# 🧑‍💻 Developer Notes

### Use `map()` for repeated content

If several UI elements have the same structure, consider storing them as data and rendering them with `map()`.

### Use `useState` for interactive UI

Use state when the UI needs to change based on user interaction.

Examples:

```jsx
const [search, setSearch] = useState("");
```

```jsx
const [selectedPlan, setSelectedPlan] = useState(null);
```

### Keep components reusable

If the same UI appears more than once, consider creating a reusable component.

### Keep data separate

Website content should generally live in:

```text
src/data/
```

rather than being duplicated throughout page components.

---

# ♿ Accessibility

The project includes accessibility-conscious features such as:

- Semantic HTML
- Keyboard-friendly controls
- Form labels
- Button elements for interactive actions
- Responsive layouts
- Reduced-motion support

Users who have enabled reduced motion at the operating-system level should receive a less animated experience.

---

# 📱 Responsive Testing

When testing the website, check at least:

```text
Desktop:
1920px
1440px
1280px

Tablet:
1024px
768px

Mobile:
430px
390px
375px
320px
```

Pay particular attention to:

- Navigation
- Hero sections
- Cards
- Buttons
- Forms
- Images
- Text wrapping
- Horizontal overflow

---

# 🔧 Customization

You can customize the website by editing:

### Website content

```text
src/data/siteData.js
```

### Pages

```text
src/pages/
```

### Reusable components

```text
src/components/
```

### Global styling

```text
src/App.css
```

### Application routing/global state

```text
src/App.jsx
```

---

# 💡 Why This Structure?

The project intentionally separates:

```text
Data
 ↓
Pages
 ↓
Reusable Components
 ↓
Styling
```

This makes the project easier to understand and scale.

For example:

```text
siteData.js
      ↓
Programs.jsx
      ↓
ProgramCard.jsx
      ↓
App.css
```

The data describes **what** should appear.

The page decides **where** it appears.

The component decides **how** the repeated item is structured.

The CSS decides **how it looks**.

---

# ⚠️ Common Problems

## `npm` is not recognized

Install Node.js and restart VS Code/your terminal.

---

## Dependencies are missing

Run:

```bash
npm install
```

---

## Port 5173 is already being used

Vite may automatically choose another available port.

Check the terminal output for the actual URL.

---

## Changes are not appearing

Try:

```bash
Ctrl + C
npm run dev
```

Then refresh the browser.

---

# 📦 Deployment

After running:

```bash
npm run build
```

the production files will normally be generated inside:

```text
dist/
```

The `dist` folder can then be deployed to a compatible static hosting service.

---

# 🎯 Project Learning Goals

This project demonstrates several important React concepts:

- Components
- Props
- `useState`
- `useEffect`
- `useMemo`
- `map()`
- Filtering
- Searching
- Conditional rendering
- Dynamic rendering
- React Router
- Form state
- Theme state
- Responsive CSS
- CSS animations
- Component reuse
- Separation of data and presentation

It is therefore useful both as a gym website and as a practical React learning project.

---

## 👨‍💻 Author

**IronForge React Project**

Built as a modern React frontend project focused on reusable components, dynamic content, responsive design, and interactive user experiences.
