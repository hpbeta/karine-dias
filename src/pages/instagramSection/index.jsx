import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"

export  function InstagramSection() {
  const posts = [
    { src: image1, alt: "Post 1", link: "https://www.instagram.com/p/DJcxtxGJR3e/?img_index=1" },
    { src: image2, alt: "Post 2", link: "https://www.instagram.com/p/DJQM6LrJdfq/?img_index=1" },
    { src: image3, alt: "Post 3", link: "https://www.instagram.com/p/DExV33vJHsA/" },
    { src: image4, alt: "Post 4", link: "https://www.instagram.com/p/DIryI5XJJVO/?img_index=1" },
    { src: image5, alt: "Post 5", link: "https://www.instagram.com/p/DHcDwAKJ5JM/?img_index=1" },
    { src: image6, alt: "Post 6", link: "https://www.instagram.com/p/DHWziMSJpRF/?img_index=1" },
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-800 mb-4">
          Acompanhe meus conteúdos no Instagram
        </h2>
        <p className="text-gray-600 mb-4">
          com dicas, orientações e reflexões para melhorar sua escrita e arrasar na redação.
        </p>
        <p className="text-purple-700 font-medium text-lg mb-8">
          📷 @profakarinedias
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {posts.map((post, index) => (
            <div key={index} className="rounded overflow-hidden shadow-md">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/profakarinedias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-purple-700 hover:text-purple-900 font-semibold transition-colors"
        >
          Ver mais no Instagram →
        </a>
      </div>
    </section>
  );
}