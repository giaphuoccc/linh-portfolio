import Hero from "./component/Hero";
import Works from "./component/Works";
import Background from "./component/Background";
import Strengths from "./component/Strengths";
import Footer from "./component/Footer";

// Hàm để tách phần chữ và phần hình ảnh trong content
// const parseContent = (htmlContent) => {
//     // Tạo một DOMParser để phân tích HTML
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, "text/html");

//     // Tìm phần chữ trong <p> trước <img>
//     const text = doc.querySelector("p") ? doc.querySelector("p").textContent.trim() : '';  // Chỉ lấy phần text của <p>

//     // Tìm phần hình ảnh từ thẻ <img>
//     const imageSrc = doc.querySelector("img") ? doc.querySelector("img").src : '';  // Lấy src của ảnh từ thẻ <img>

//     return { text, imageSrc };
// };

const Portfolio = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Hero />
      <Works />
      <Background />
      <Strengths />
      <Footer />
    </div>
  );
};

export default Portfolio;
