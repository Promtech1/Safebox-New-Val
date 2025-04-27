// src/pages/BlogPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import knowledgeCards from "../data/KnowledgeCards";
import KnowledgeCardGrid from "../components/Education/KnowledgeCardGrid";

// static imports for author + extra images
import brightAvatar from "../assets/bright.png";
import howItWorksImg from "../assets/solar-farm.png";

const BlogPage = () => {
  const { slug } = useParams();
  const article = knowledgeCards.find((c) => c.slug === slug);

  if (!article) {
    return <div className="p-10 text-center">Article not found.</div>;
  }

  // pick three others to show
  const otherArticles = knowledgeCards
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <div className="bg-[#0f1f1c] min-h-screen text-white">
      {/* Hero */}
      <header
        className="relative h-[80vh] bg-cover  flex items-center justify-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl font-bold">{article.title}</h1>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 py-16">
        {/* Sidebar */}
        <aside className="space-y-4 text-center lg:text-left">
          <img
            src={brightAvatar}
            alt="Bright Idemudia"
            className="w-24 h-24 rounded-full mx-auto lg:mx-0"
          />
          <h2 className="text-xl font-semibold">Bright Idemudia</h2>
          <p className="text-sm text-gray-300">Senior Researcher</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-2">
            <a href="https://twitter.com/bright" aria-label="X">
              <svg /* …X icon… */ />
            </a>
            <a href="https://linkedin.com/in/bright" aria-label="LinkedIn">
              <svg /* …LinkedIn icon… */ />
            </a>
          </div>
        </aside>

        {/* Main article */}
        <article className="lg:col-span-3 space-y-12">
          {/* Introduction */}
          <section className="space-y-2">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p>
              Solar energy is the light and heat from the sun, captured and
              converted into usable electricity or thermal energy. It’s a
              clean, renewable power source that’s available everywhere the sun
              shines.
            </p>
          </section>

          {/* How Does it Work */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How Does it Work?</h2>
            <img
              src={howItWorksImg}
              alt="Solar farm"
              className="w-full rounded"
            />
            <ul className="list-disc list-inside space-y-2">
              <li>☀︎ Sunlight hits the solar panels</li>
              <li>⚡ PV cells convert light into direct current (DC)</li>
              <li>🔌 An inverter converts DC to AC electricity</li>
              <li>🏠 Power flows into homes and buildings</li>
            </ul>
          </section>

          {/* Why It Matters */}
          <section className="space-y-2">
            <h2 className="text-2xl font-bold">Why Solar Energy Matters</h2>
            <ul className="list-none space-y-2">
              <li>✅ Renewable: The sun is a constant, limitless energy source.</li>
              <li>🌍 Clean: Solar doesn't release harmful emissions.</li>
              <li>💸 Affordable: Reduces or eliminates energy bills.</li>
              <li>⚡ Accessible: Powers remote areas without grid access.</li>
            </ul>
          </section>

          {/* Quick Facts */}
          <section className="space-y-2">
            <h2 className="text-2xl font-bold">Quick Facts</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>☀︎ 1kW solar setup can power basic lighting + appliances</li>
              <li>⏳ Sunlight for 1 hour = energy for a full year</li>
              <li>🔋 Batteries store excess energy for night use</li>
            </ul>
          </section>
        </article>
      </div>

      {/* Other Articles */}
      <section className="pt-16 pb-24">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Other Articles
        </h2>
        <KnowledgeCardGrid cards={otherArticles} />
      </section>
    </div>
  );
};

export default BlogPage;
