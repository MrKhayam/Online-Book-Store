function openWhatsApp() {
  const phoneNumber = "03448848090";
  var message = encodeURIComponent(
    "Assalamoalaikum! I want to order a book. Can you please provide me more details about it?"
  );

  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
}

const openWhatsAppOnly = () => {
  const phoneNumber = "03448848090";
  let message = "";
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
};

let bookCard = document.querySelectorAll(".bookCard");
bookCard = Array.from(bookCard);

let books = [
  "Rich Dad Poor Dad",
  "Atomic Habits",
  "Zero to Hero",
  "48 Laws of Power",
  "Deep Work",
  "Mindset",
  "The Alchemist",
  "The Power of Now",
  "7 Habits of Highly Effective People",
  "The Art of Hapiness",
  "Miracle Morning",
  "The little Prince",
  "Brave New World",
  "Sapiens",
  "Principles",
  "To Kill a Mocking Bird",
  "Think and Grow Rich",
  "The Millionaire Next Door",
  "The Psychology of Money",
  "Your Money or Your Life",
];

const findIndex = (i, index) => {
  i.addEventListener("click", () => {
    // orderMsg = index;
    bookName = books[index];
    orderBook();
  });
};

let bookName;
bookCard.forEach(findIndex);

const orderBook = () => {
  console.log(bookName);
  const phoneNumber = "03448848090";
  let message = `Assalamoalaikum! I want to order  ${bookName}. Can you please provide me more details about the book?`;
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
};
