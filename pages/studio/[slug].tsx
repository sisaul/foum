"use client"

import type { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import ErrorPage from "next/error"
import Layout from "../../components/layout"
import Header from "../../components/layout/header"
import ShowroomSection from "../../components/sections/hero-section"
import TextBlock from "../../components/sections/text-section"
import ImageGrid from "../../components/grids/image-grid"
import TwoProductGrid from "../../components/sections/product-grid-section"
import ProductTextGrid from "../../components/sections/product-text-section"
import ImageCarousel from "../../components/sections/image-carousel"
import ContactForm from "../../components/forms/contact-form"
import Footer from "../../components/layout/footer"

// Types for Sanity content
interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
}

interface SanitySection {
  _key: string
  _type: string
  [key: string]: any // For additional fields based on section type
}

interface Project {
  title: string
  slug: string
  content: SanitySection[]
  seo?: {
    title?: string
    description?: string
  }
}

interface ProjectPageProps {
  project: Project
  preview: boolean
  navItems: { title: string; path: string }[]
  footerColumns: { title: string; links: { title: string; url: string; isExternal?: boolean }[] }[]
}

export default function ProjectPage({ project, preview, navItems, footerColumns }: ProjectPageProps) {
  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // Function to convert Sanity image to URL
  const urlFor = (source: SanityImage) => {
    // This would use your Sanity image URL builder
    return `/placeholder.svg` // Placeholder for demo
  }

  // Function to render different section types
  const renderSection = (section: SanitySection) => {
    switch (section._type) {
      case "showroomSection":
        return (
          <ShowroomSection
            key={section._key}
            image={{
              src: urlFor(section.image),
              alt: section.image.alt || section.title,
            }}
            title={section.title}
            description={section.description}
          />
        )

      case "textBlock":
        return (
          <TextBlock
            key={section._key}
            content={section.text}
            backgroundColor={section.backgroundColor}
            textColor={section.textColor}
          />
        )

      case "imageGrid":
        return (
          <ImageGrid
            key={section._key}
            images={section.images.map((img: any) => ({
              src: urlFor(img.image),
              alt: img.image.alt || img.title,
              title: img.title,
              slug: img.slug?.current,
            }))}
            columns={section.columns || 2}
            withTitles={section.withTitles !== false}
            withLinks={section.withLinks === true}
          />
        )

      case "twoProductGrid":
        return (
          <TwoProductGrid
            key={section._key}
            products={section.products.map((product: any) => ({
              title: product.title,
              slug: product.slug.current,
              imageSrc: urlFor(product.image),
            }))}
          />
        )

      case "productTextGrid":
        return (
          <ProductTextGrid
            key={section._key}
            image={{
              src: urlFor(section.image),
              alt: section.image.alt || section.title,
            }}
            title={section.title}
            description={section.description}
            link={{
              href: section.link.url,
              text: section.link.text || "READ MORE",
            }}
          />
        )

      case "imageCarousel":
        return (
          <ImageCarousel
            key={section._key}
            title={section.title}
            items={section.items.map((item: any) => ({
              title: item.title,
              slug: item.slug.current,
              imageSrc: urlFor(item.image),
            }))}
          />
        )

      default:
        return null
    }
  }

  return (
    <Layout>
      <Head>
        <title>{project.seo?.title || project.title} | FOUM Studio</title>
        <meta name="description" content={project.seo?.description || `FOUM Studio - ${project.title}`} />
      </Head>

      <Header navItems={navItems} />

      <main>{project.content.map(renderSection)}</main>

      <ContactForm footerColumns={footerColumns} />
      <Footer />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  // This would fetch data from Sanity
  // const project = await getClient(preview).fetch(query, { slug: params?.slug })

  // Mock data for demonstration
  const project = {
    title: "Project Title",
    slug: params?.slug,
    content: [
      // Mock content sections would go here
    ],
    seo: {
      title: "Project Title | FOUM Studio",
      description: "Project description for SEO",
    },
  }

  const navItems = [
    { title: "PRODUCTS", path: "/products" },
    { title: "STORIES", path: "/stories" },
    { title: "ABOUT", path: "/about" },
    { title: "STUDIO", path: "/studio" },
    { title: "CONTACT", path: "/contact" },
  ]

  const footerColumns = [
    {
      title: "COMPANY",
      links: [
        { title: "About", url: "/about" },
        { title: "Resellers", url: "/resellers" },
        { title: "Newsletter", url: "/newsletter" },
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        { title: "Stories", url: "/stories" },
        { title: "Instagram", url: "https://instagram.com", isExternal: true },
        { title: "LinkedIn", url: "https://linkedin.com", isExternal: true },
      ],
    },
    {
      title: "INFO",
      links: [
        { title: "FAQ", url: "/faq" },
        { title: "Terms&Conditions", url: "/terms" },
        { title: "Privacy Policy", url: "/privacy" },
      ],
    },
  ]

  return {
    props: {
      project,
      preview,
      navItems,
      footerColumns,
    },
    revalidate: 60, // ISR - revalidate every 60 seconds
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // This would fetch all project slugs from Sanity
  // const paths = await getClient().fetch(query)

  return {
    paths: [],
    fallback: "blocking",
  }
}

