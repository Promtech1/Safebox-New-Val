// src/data/knowledgeCards.js
import solarBlade from "../assets/solarBlade.png"
import blades from "../assets/blades.png"
import huts from "../assets/huts.png"
import books from "../assets/books.png"
import redPeeps from "../assets/redPeeps.png"

const knowledgeCards = [
    {
        slug:        "solar-energy",
      image: solarBlade,
      title: "What is Solar Energy?",
      description: "Explore how solar panels convert sunlight into electricity and how it’s transforming global energy...",
      tag: "#Renewable energy concepts",
    },
    {
        slug:        "wind-vs-solar",
      image: blades,
      title: "Wind vs. Solar: Which is More Efficient?",
      description: "A side-by-side breakdown of two dominant clean energy sources — efficiency, cost, and use cases.",
      tag: "#Renewable energy concepts",
    },
    {
        slug:        "energy-and-literacy",
      image: books,
      title: "Study Links Energy Access to Higher Literacy Rates",
      description: "Research reveals how electricity access impacts education outcomes across rural regions.",
      tag: "#Research & articles",
    },
    {
        slug:        "clinic-power-crisis",
      image: books,
      title: "Power Outages in Rural Clinics: A Preventable Crisis",
      description: "See how a lack of reliable power endangers lives — and how solar generators are saving them.",
      tag: "#Problem cases & solutions",
    },
    {
        slug:        "economics-emerging-markets",
      image: redPeeps,
      title: "The Economics of Clean Energy in Emerging Markets",
      description: "How solar and microgrid systems are reshaping energy investments in the Global South.",
      tag: "#Research & articles",
    },
    {
        slug:        "village-without-light",
      image: huts,
      title: "A Village Without Light: The Turning Point",
      description: "A short story on how one small solar microgrid transformed a remote community’s economy.",
      tag: "#Problem cases & solutions",
    },
  ];
  
  export default knowledgeCards;
  