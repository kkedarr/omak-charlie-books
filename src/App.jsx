import React, { useState, useEffect } from "react";
import foreplayBook from "./assets/foreplaybook.jpg";
import dinosaurBook from "./assets/dinosaurbook.jpg";
import oceanBook from "./assets/oceanbook.jpg";
import authorPic from "./assets/authorpic.jpg";

const books = [
  {
    title: "The Ultimate Foreplay Handbook",
    description:
      "A comprehensive and engaging guide to foreplay and sexual intimacy. Designed for young adults and couples seeking deeper connection. This book explores pleasure with clarity, warmth, and practical insights.",
    genre: "Romance, Sex-education, Foreplay",
    image: foreplayBook,
    amazonLink: "https://www.amazon.com/dp/B0CVBPGCBN",
    gumroadLink: "https://omakcharlie.gumroad.com/l/ultimate-foreplay-handbook",
  },
  {
    title: "Dinosaurs and Prehistoric Evolution",
    description:
      "Discover the ancient world of dinosaurs and the incredible journey of evolution. Designed for curious minds both young and adult. This book brings prehistoric creatures to life with vivid detail and engaging storytelling.",
    genre: "Documentary, Paleontology, Dinosaurs",
    image: dinosaurBook,
    amazonLink: "https://www.amazon.com/dp/B0DLTX3VXJ",
    gumroadLink: "https://omakcharlie.gumroad.com/l/dinosaurs-and-prehistoric-evolution",
  },
  {
    title: "The Magnificent Giants of the Ocean",
    description:
      "An awe-inspiring dive into the lives of the ocean’s most magnificent creatures. Designed for wildlife lovers of every age. This book captures marine life with vivid imagery and immersive storytelling.",
    genre: "Marine Giants Oceanology, Documentary",
    image: oceanBook,
    amazonLink: "https://www.amazon.com/dp/B0DN5XVTMC",
    gumroadLink: "https://omakcharlie.gumroad.com/l/magnificent-giants-of-the-ocean",
  },
];

const faqs = [
 {
    question: "Are the books suitable for kids?",
    answer:
      "Absolutely! Most of the books are thoughtfully written to be family-friendly and enjoyable for readers of all ages. If a book contains adult themes or content intended only for mature readers, it is clearly marked so you can make an informed choice.",
  },
  {
    question: "Where can I buy the books?",
    answer:
      "You can conveniently purchase the books on Amazon and Gumroad. All direct purchase links are available on the website, making it easy to find your preferred format and complete your order securely.",
  },
  {
  question: "How can I get the book on Amazon?",
  answer:
    "Getting your copy on Amazon is simple! Both paperback and ebook versions are available. For the easiest experience, use the direct Amazon link provided on our website to go straight to the book’s page. The ordering process is user-friendly and secured by Amazon’s trusted payment system.",
  },
  {
    question: "Are both paperback and ebook formats available?",
    answer:
      "Yes! You have the option to choose between paperback and ebook formats on Amazon. Additionally, the ebook version is available on Gumroad, which allows for instant digital download no matter where you are.",
  },
  {
    question: "What about delivery and shipping?",
    answer:
      "Amazon manages all delivery and shipping logistics. They offer worldwide shipping to any country where Amazon operates. Shipping costs and delivery times depend on your location and the selected shipping method, with options often ranging from standard to expedited delivery.",
  },
  {
    question: "Is the book available internationally?",
    answer:
      "Yes! The books are available internationally on Amazon in all countries where Amazon has a presence. For countries where Amazon’s reach is limited, the ebook versions can be purchased and downloaded instantly worldwide via Gumroad, ensuring readers everywhere can access the books.",
  },
];

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setFeedback("Please enter your name and a valid email.⚠️");
      setTimeout(() => setFeedback(""), 4000);
      return;
    }

    setFeedback("Submitting your subscription...⏳");

    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort(); // Cancel the request
      setFeedback("Server is waking up... please wait a few seconds and try again.⏳");
    }, 15000); // 15-second timeout

    try {
      const response = await fetch("https://omak-charlie-books-backend.onrender.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
        signal: controller.signal,
      });

      clearTimeout(timeout); // Clear timeout if response is received in time

      if (response.ok) {
        setFeedback(`Thanks for subscribing, ${name}!✅`);
        setName("");
        setEmail("");
      } else {
        const resJson = await response.json();
        setFeedback(resJson.message || "Subscription failed. Please try again.❌");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setFeedback("An error occurred. Please try again later.🚨");
      }
      // Else: Already handled in timeout
    }

    setTimeout(() => setFeedback(""), 5000);
  };





  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="bg-[#D7DFA3] text-[#1A4862] min-h-screen relative">
      {/* Sticky Header */}
      <header className="bg-[#1A4862] text-[#D7DFA3] text-center py-10 sticky top-0 z-50">
        <h1 className="text-4xl font-bold">Omak Charlie Omar</h1>
        <p className="mt-2 text-lg">omakcharlie@gmail.com</p>
      </header>

      {/* Author Section */}
      <section className="text-center py-5 px-4">
        <h2 className="text-2xl font-bold mb-1">About the Author</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-8">
          <p className="max-w-2xl text-justify">
            Omak Charlie Omar is a passionate writer dedicated to enlightening and educating readers across diverse subjects,
            from intimacy and relationships to natural history and ocean life. Through meticulously researched content and a powerful narrative style,
            his works inspire curiosity and growth in readers of all ages.
          </p>
          <div className="mt-6 md:mt-0">
            <img className="w-40 h-40 rounded-full object-cover shadow-2xl" src={authorPic} alt="Author" />
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-5 px-4">
        <h2 className="text-2xl font-semibold text-center mb-5">Books</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-[#1A4862] bg-opacity-80 rounded-md shadow-lg w-80 p-4 text-center transform transition duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[420px] object-cover rounded-sm mb-4"
              />
              <h3 className="text-xl font-bold text-[#D7DFA3] mb-2">{book.title}</h3>
              <p className="text-sm text-justify text-[#D7DFA3] mb-2">{book.description}</p>
              <p className="text-xs italic text-[#D7DFA3]">Genre: {book.genre}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D7DFA3] text-[#1A4862] px-4 py-2 rounded-lg text-sm hover:bg-[#FF9900] hover:text-black"
                >
                  Amazon
                </a>
                <a
                  href={book.gumroadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D7DFA3] text-[#1A4862] px-4 py-2 rounded-lg text-sm hover:bg-[#FF90E8] hover:text-black"
                >
                  Gumroad
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-[#1A4862] py-12 px-4 text-center mt-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#D7DFA3] mb-2">Stay Updated</h2>
        <p className="text-[#D7DFA3] mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to receive updates on new book releases, events, and exclusive content from Omak Charlie Omar.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 border border-[#D7DFD7] w-full sm:w-1/3 bg-[#D7DFD7] focus:outline-none focus:ring-2 focus:ring-[#D7DFA3]"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border border-[#D7DFD7] w-full sm:w-1/3 bg-[#D7DFD7] focus:outline-none focus:ring-2 focus:ring-[#D7DFA3]"
            required
          />
          <button
            type="submit"
            className="bg-[#D7DFA9] text-[#1A4862] px-6 py-2 hover:bg-[#D7DFD7] transition"
          >
            Subscribe
          </button>
        </form>
        {feedback && <p className="text-sm text-[#D7DFA3] mt-3">{feedback}</p>}
      </section>

      {/* Reviews and FAQs */}
      <section className="bg-[#D7DFA3] py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">Reader Reviews</h2>
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {[
              `“Honestly, I didn't think a book on foreplay would feel this empowering. It's not vulgar, it's not awkward — it's just honest, well-written, and incredibly helpful. Every couple should read this at least once.” — Maggie J.`,
              `“What really blew my mind in Dinosaurs and Prehistoric Evolution was the detailed illustration and explanation of the Chicxulub asteroid. I’ve read articles before, but this book actually helped me visualize the scale of destruction and understand how it led to the dinosaurs’ extinction. My kids kept asking questions for days. It’s educational without being overwhelming — a brilliant way to bring ancient history to life.” — Ben S.`,
              `“I was genuinely moved by The Magnificent Giants of the Ocean, especially the part about the killer whale mother who carried her dead calf for 17 days across hundreds of miles. I’d heard the story before, but seeing it framed in the context of orca intelligence and emotional depth made it even more powerful. This book does more than educate — it builds empathy for marine life.” — Chris U.`,
              `"I bought The Ultimate Foreplay Handbook with some skepticism, but I was pleasantly surprised. It's informative without being clinical, and it actually helped my partner and I communicate better in the bedroom. Highly recommend for couples wanting to rekindle intimacy.” — Rita`,
              `“My teenage son is fascinated with dinosaurs, so I got him Dinosaurs and Prehistoric Evolution. It turned out to be a great resource for both of us! The illustrations were engaging, and it sparked hours of discussion. A wonderful mix of education and entertainment.” — Mark T.`,
              `“As a marine biology enthusiast, The Magnificent Giants of the Ocean exceeded my expectations. The writing is vivid, and I could tell a lot of research went into this book. It’s perfect for anyone who wants to learn about ocean life without it feeling like a textbook.” — Marisa E.`,
              `“Omak’s storytelling voice is what really makes his books stand out. Whether he's writing about romance or natural history, there’s a unique warmth and clarity. I subscribed to his newsletter just so I don’t miss the next release!” — Charles N.`,
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-md p-4 hover:bg-[#D7DFD7] transition"
              >
                <p className="text-gray-800 italic">{review}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">FAQs</h2>
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 hover:bg-[#D7DFD7] transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-semibold flex justify-between items-center focus:outline-none"
                  aria-expanded={openFAQIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                  <span className="ml-4 text-xl">{openFAQIndex === index ? "−" : "+"}</span>
                </button>
                {openFAQIndex === index && (
                  <p id={`faq-${index}`} className="mt-3 text-gray-700">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#1A4862] text-center text-[#D7DFA3] py-6">
        <p>&copy; {new Date().getFullYear()} Omak Charlie Omar. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FF9900] text-white rounded-full p-3 shadow-lg hover:bg-[#e68a00] transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
