// Blog posts data - easily editable
// To add a new blog post, add a new entry to this array

const blogPosts = [
  {
    id: 1,
    title: "Welcome to My Journal",
    date: "2025-01-15",
    excerpt: "The beginning of a new adventure in documenting my thoughts and experiences.",
    content: `# Welcome to My Journal

Dear reader,

Today marks the beginning of a new chapter. I've decided to document my thoughts, experiences, and learnings in this digital journal.

Like the ancient scholars who penned their wisdom on parchment, I too shall record my journey through the ever-evolving landscape of technology and life.

## Why a Journal?

In this fast-paced world, it's easy to forget the lessons we learn and the moments that shape us. This journal serves as:

- A repository of knowledge
- A reflection of growth
- A gift to my future self

## What to Expect

Here, you'll find musings on technology, personal growth, and the occasional adventure. Each entry is a snapshot of who I am at this moment in time.

> "The journey of a thousand miles begins with a single step." - Lao Tzu

Let's begin this journey together.

Until next time,
*Your friendly developer*`,
    tags: ["personal", "journey", "introduction"]
  },
  {
    id: 2,
    title: "Lessons from Debugging at Midnight",
    date: "2025-01-10",
    excerpt: "What three hours of debugging taught me about patience, persistence, and the importance of rubber ducks.",
    content: `# Lessons from Debugging at Midnight

*3:47 AM - The clock mocks me as I stare at the screen.*

There's something profoundly humbling about debugging. Tonight, I spent three hours hunting down a bug that turned out to be a single misplaced semicolon in my JavaScript code.

## The Journey

It started innocently enough. "Just a quick feature," I told myself. "It'll take 30 minutes, tops."

Four coffees later, I found myself questioning every life decision that led me to this moment.

## What I Learned

### 1. The Rubber Duck Never Lies

Explaining your code to an inanimate object is surprisingly effective. My rubber duck (named Quackers) has solved more problems than Stack Overflow.

### 2. Take Breaks

The solution often appears when you step away. I found my bug during a walk to the kitchen.

### 3. Version Control is Your Friend

Git saved me from my own hubris more times than I can count tonight.

## The Sweet Victory

When that bug finally revealed itself, the relief was indescribable. It's moments like these that remind me why I love programming.

The struggle is real, but so is the triumph.

*Signing off at 4:23 AM,*
*A slightly wiser developer*`,
    tags: ["coding", "debugging", "lessons", "development"]
  },
  {
    id: 3,
    title: "The Art of Clean Code",
    date: "2025-01-05",
    excerpt: "Reflections on writing code that doesn't make future you cry.",
    content: `# The Art of Clean Code

*"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."* - Martin Fowler

## A Tale of Two Codebases

Last week, I had to revisit code I wrote six months ago. Opening that file was like opening a time capsule of poor decisions.

\`\`\`javascript
// What I wrote then
const x = data.filter(d=>d.a>5).map(d=>({...d,b:d.c*2}))

// What I wish I had written
const activeUsers = userData.filter(user => user.loginCount > 5)
  .map(user => ({
    ...user,
    scoreMultiplier: user.baseScore * 2
  }))
\`\`\`

The difference? Intent. Clarity. Compassion for future me.

## Principles I Now Live By

### 1. Names Matter

Variables should tell a story. \`getUserById\` is better than \`func1\`. Your code should read like prose.

### 2. Functions Should Do One Thing

If you can't explain what your function does in one sentence, it's doing too much.

### 3. Comments Explain Why, Not What

\`\`\`javascript
// Bad: Loop through array
for (let i = 0; i < items.length; i++) { }

// Good: Process items in order to maintain cache consistency
for (let i = 0; i < items.length; i++) { }
\`\`\`

## The Journey Continues

Clean code is a practice, not a destination. Every day, I learn something new about writing better code.

Here's to code that sparks joy (and doesn't spark anger in code reviews).

*Happy coding,*
*A perpetual student of the craft*`,
    tags: ["coding", "best-practices", "clean-code", "software-engineering"]
  },
  {
    id: 4,
    title: "Coffee & Code - A Love Story",
    date: "2024-12-28",
    excerpt: "An ode to the fuel that powers every developer's journey.",
    content: `# Coffee & Code: A Love Story

**Chapter One: The First Brew**

I remember my first cup of coffee during a coding session. I was 19, working on a college project, and someone told me "real developers drink coffee."

I hated it.

It was bitter, acidic, and I couldn't understand the appeal.

Fast forward five years, and I can't write a single line of code without my trusty mug beside me.

## The Evolution of My Coffee Journey

### The Phases

1. **The Denial Phase**: "I don't need coffee to code"
2. **The Acceptance Phase**: "Maybe one cup won't hurt"
3. **The Dependency Phase**: "Where's my coffee? I can't find the keyboard without it"
4. **The Connoisseur Phase**: "Is this Ethiopian single-origin with notes of blueberry?"

I'm currently somewhere between phases 3 and 4.

## The Perfect Coding Coffee

After years of experimentation, I've discovered the perfect formula:

- **Morning sessions**: Light roast, black, no sugar
- **Afternoon debugging**: Medium roast with a splash of milk
- **Late night coding**: Dark roast (proceed with caution)

## Coffee-Driven Development

I've noticed a direct correlation between coffee quality and code quality:

| Coffee Quality | Code Quality | Bug Count |
|---------------|--------------|-----------|
| Excellent     | Great        | Low       |
| Good          | Acceptable   | Medium    |
| Bad           | Questionable | High      |
| No Coffee     | Catastrophic | Yes       |

## In Conclusion

Coffee isn't just a beverage; it's a companion, a ritual, a source of comfort during those long debugging sessions.

Here's to the drink that turns "I can't" into "I can" and "It's impossible" into "Let me grab another cup."

*Caffeinated and ready to code,*
*Your friendly neighborhood developer*

---

*P.S. - No developers were harmed in the making of this blog post. Coffee consumption is entirely voluntary and should be enjoyed responsibly.*`,
    tags: ["personal", "coffee", "lifestyle", "humor"]
  }
];

export default blogPosts;
