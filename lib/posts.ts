export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "you-dont-have-to-be-a-genius-to-code",
    title: "You Don't Have to Be a Genius to Code",
    date: "2026-10-14",
    tags: ["Coding", "Mindset", "Beginners"],
    excerpt:
      "I started coding at 14 and hated it. Here is what actually helped me stick with it.",
    content: `
I started coding at 14 and hated it.

Not because I wasn't smart enough. Not because I didn't care. But because every resource I found made me feel like I was already behind. Like coding was a club I hadn't been invited to.

So I want to say this clearly: you do not have to be a genius to code. You just have to be willing to feel confused for a while.

## The moment it clicked

I remember the first time a piece of code I wrote actually did what I wanted it to do. It was a tiny Python script that printed my name in a loop. Nothing special. But I felt like I had built something real.

That feeling is what kept me going. Not raw talent. Not some natural gift. Just the small high of figuring something out.

## What actually helps

**1. Build something you care about.** Following tutorials is fine at the start, but you learn the most when you are trying to solve your own problem. My Snapchat Memory Downloader came from a real problem I had. That is why I actually finished it.

**2. Read error messages.** I know they look scary. But they are telling you exactly what went wrong. Learning to read them is one of the highest-leverage skills in programming.

**3. Stop comparing your chapter one to someone else's chapter ten.** The developers you look up to also Googled "how to center a div" at some point. They still do.

## The real barrier is not ability

The real barrier is the voice in your head that says you don't belong here. That voice is lying.

Tech needs more people who care about the impact of what they build, not just the how. It needs people who ask why. It needs you.

So if you are on the fence, start. Not because it will be easy. But because the confused version of you right now is closer to a programmer than you think.
    `.trim(),
  },
];
