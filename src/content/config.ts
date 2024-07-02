// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
// 2. Define your collection(s)

const javascriptDataSchema = z.object({
  key1: z.string(),
  key2: z.string()
})

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
})

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imgName: z.string(),
    caption: z.string(),
    footnote: z.string().optional(),
    attribution: z.record(z.string(), z.string()).array().optional(),
    tools: z.array(z.string()),
    githubURL: z.string().url(),
    websiteURL: z.string().url(),
    videoURL: z.string().url().optional()
  })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  about: aboutCollection,
  projects: projectCollection
}
