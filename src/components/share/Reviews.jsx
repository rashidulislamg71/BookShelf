import React from 'react'
import Marquee from 'react-fast-marquee'
import ReviewCard from '../ui/ReviewCard'

function Reviews() {

  const reviews = [
    {
      id: 1,
      name: "Rashidul Islam",
      country: "Bangladesh",
      rating: 5,
      comment:
        "This site is very good. There are many types of books. Now I am a member of BookShelf!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW1LFVLrTeSynKd6fZW2JFbbIwM3-jBJilg&s",
    },
    {
      id: 2,
      name: "Jerin",
      country: "Pakistan",
      rating: 4,
      comment: "I am very happy to get BookShelf. Now I read regularly.",
      image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
    },
    {
      id: 3,
      name: "Kobir Rahman",
      country: "India",
      rating: 5,
      comment:
        "Wonderful book borrowing site! I have been reading here for more than 3 years.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEjJaLzKEFkSUTenXwYY2tUAF7_i3NCuKbA&s",
    },
    {
      id: 4,
      name: "John Don",
      country: "USA",
      rating: 4,
      comment: "It is a very good site for reading many types of books.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEjJaLzKEFkSUTenXwYY2tUAF7_i3NCuKbA&s",
    },
    {
      id: 5,
      name: "Ayesha Khan",
      country: "Bangladesh",
      rating: 5,
      comment:
        "Amazing platform! I can easily borrow books anytime I want.",
      image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
    },
    {
      id: 6,
      name: "Sohail Ahmed",
      country: "Pakistan",
      rating: 4,
      comment:
        "Very useful website for students and book lovers.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW1LFVLrTeSynKd6fZW2JFbbIwM3-jBJilg&s",
    },
    {
      id: 7,
      name: "Priya Sharma",
      country: "India",
      rating: 5,
      comment:
        "Best digital library I have ever used. Highly recommended!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEjJaLzKEFkSUTenXwYY2tUAF7_i3NCuKbA&s",
    },
    {
      id: 8,
      name: "Michael Smith",
      country: "USA",
      rating: 4,
      comment:
        "Simple UI and lots of useful books available here.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEjJaLzKEFkSUTenXwYY2tUAF7_i3NCuKbA&s",
    },
    {
      id: 9,
      name: "Nusrat Jahan",
      country: "Bangladesh",
      rating: 5,
      comment:
        "I love this platform. It helps me read daily without any hassle.",
      image: "",
    },
    {
      id: 10,
      name: "Ali Raza",
      country: "Pakistan",
      rating: 5,
      comment:
        "Excellent service for book readers. Smooth and fast experience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEjJaLzKEFkSUTenXwYY2tUAF7_i3NCuKbA&s",
    },
  ];


  return (
    <section className="pt-10">
      {/* section title  */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Loved by Readers Around the World
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Real feedback from our community of book lovers who use BookShelf daily
          to discover, read, and borrow their favorite books.
        </p>
      </div>

      {/* review marque section  */}
      <Marquee pauseOnHover speed={70} direction={"right"} gradient={false}>
        <div className="flex gap-6 px-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Marquee>
    </section>
  )
}

export default Reviews